# Multi-Site ISP Blocking Fix Implementation Guide

## Overview

This guide provides step-by-step instructions to implement the ISP blocking fix across all 13 sites. The solution uses CloudFlare Workers with KV caching to bypass ISP/browser blocking of ProgressPlay API calls.

## Problem Summary

- **Issue**: ISP providers blocking direct API calls to ProgressPlay (`content.progressplay.net`)
- **Symptoms**: `Access to fetch... has been blocked by CORS policy`, `SyntaxError: Unexpected token '<'`
- **Solution**: Route API calls through CloudFlare Workers with edge caching

## Architecture Overview

```
Before (BLOCKED):
Browser → Direct API Call → ProgressPlay API ❌

After (WORKING):
Browser → CloudFlare Worker → KV Cache ⚡
                           ↘ ProgressPlay API (fallback)
```

## Universal CloudFlare Workers (Already Deployed)

These workers serve ALL sites using `whitelabelId` parameter:

- **`content-pp.tech1960.workers.dev`** - Updates KV cache with fresh content
- **`access-content-pp.tech1960.workers.dev`** - Serves cached content to browsers
- **KV Namespace**: `content-pp-cache` - Stores cached promotions, footer, compliance content

## Implementation Steps

### Step 1: Update Site Configuration

**File**: `composables/globalData.js`

**1.1 Update WHITELABEL_ID (Site-Specific)**
```javascript
// Update this to your site's specific ID
export const WHITELABEL_ID = XX; // Replace XX with your site's ID
```

**Site IDs Reference:**
- Maxiplay: 65 ✅
- Site 2: [ADD_ID]
- Site 3: [ADD_ID]
- Site 4: [ADD_ID]
- Site 5: [ADD_ID]
- Site 6: [ADD_ID]
- Site 7: [ADD_ID]
- Site 8: [ADD_ID]
- Site 9: [ADD_ID]
- Site 10: [ADD_ID]
- Site 11: [ADD_ID]
- Site 12: [ADD_ID]
- Site 13: [ADD_ID]

### Step 2: Update API Endpoints

**2.1 Update Promotions API (ProgressPlay)**

Find the `fetchApiPromotions()` function and update:
```javascript
async function fetchApiPromotions() {
  try {
    console.log('🎁 UNIFIED: Starting fetchApiPromotions()');
    console.log('🔍 UNIFIED: lang.value =', lang.value);
    console.log('🔍 UNIFIED: WHITELABEL_ID =', WHITELABEL_ID);
    console.log('🔍 UNIFIED: process.client =', process.client);
    
    // Use unified proxy for client-side calls, direct API for server-side
    const apiUrl = process.client
      ? `https://access-content-pp.tech1960.workers.dev/?type=promotions&whitelabelId=${WHITELABEL_ID}&country=${lang.value}`
      : `${PP_API_URL}PromotionsInfo?whitelabelId=${WHITELABEL_ID}&country=${lang.value}`;
    
    console.log('📡 UNIFIED: Fetching promotions from URL:', apiUrl);
    
    const response = await fetch(apiUrl);
    console.log('📊 UNIFIED: Response status:', response.status);
    console.log('📊 UNIFIED: Response ok:', response.ok);
    
    const responseData = await response.json();
    
    // Handle unified response format vs direct API format
    const data = process.client ? responseData.promotions : responseData;
    
    console.log('✅ UNIFIED: Data received:', Array.isArray(data) ? `Array with ${data.length} items` : typeof data);
    console.log('📄 UNIFIED: Data sample:', data ? JSON.stringify(data).substring(0, 200) : 'No data');
    
    pp_promotions.value = data || [];
    console.log('✅ UNIFIED: pp_promotions.value set to:', pp_promotions.value);
  } catch (error) {
    console.error('❌ UNIFIED: Error fetching promotions:', error);
    console.error('❌ UNIFIED: Error stack:', error.stack);
    pp_promotions.value = []; // Ensure it's always an array on error
  }
}
```

**2.2 Update Footer Content API**

Find the `fetchFooterContent()` function and update:
```javascript
export async function fetchFooterContent(lang) {
  const cacheKey = `footer_${lang}`;
  
  if (footerContentCache.has(cacheKey)) {
    const cached = footerContentCache.get(cacheKey);
    footerIcons.value = cached.footericon || [];
    footerText.value = cached.footertext || [];
    return;
  }

  try {
    // UNIFIED API CALL: Get both footer contents in one request
    const apiUrl = process.client
      ? `https://access-content-pp.tech1960.workers.dev/?type=content&codes=footericon,footertext&whitelabelId=${WHITELABEL_ID}&country=${lang.value}`
      : null; // Server-side will use direct API calls individually for now

    if (process.client) {
      console.log('🚀 UNIFIED: Fetching footer content (icons + text) in single call');
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      // Extract individual results from unified response
      footerIcons.value = data.footericon || [];
      footerText.value = data.footertext || [];
      
      // Cache the unified result
      footerContentCache.set(cacheKey, data);
      console.log('✅ UNIFIED: Footer content cached successfully');
    } else {
      // Server-side: Still use individual calls for now
      await fetchFooterIconsServer(lang);
      await fetchFooterTextServer(lang);
    }
  } catch (error) {
    console.error('❌ UNIFIED: Error fetching footer content:', error);
    footerIcons.value = [];
    footerText.value = [];
  }
}
```

**2.3 Update Compliance Content API**

Find the `fetchCachedContent()` function and update:
```javascript
export async function fetchCachedContent(code, country = lang.value) {
  // CRITICAL: Ensure we use supported country, not raw detected country
  // If no country provided, use the resolved lang.value (which should be the fallback)
  const resolvedCountry = country;
  // KV key format: content:aboutus:65:IE (whitelabel:country)
  const cacheKey = `content:${code}:${WHITELABEL_ID}:${resolvedCountry}`;
  const now = Date.now();
  
  // Check cache first
  if (contentCache.has(cacheKey)) {
    const cached = contentCache.get(cacheKey);
    if ((now - cached.timestamp) < CONTENT_CACHE_DURATION) {
      console.log('📄 CONTENT: Using cached content for', code);
      return cached.data;
    }
  }
  
  try {
    console.log('📄 CONTENT: Fetching fresh content for', code);
    console.log('🔍 CONTENT DEBUG: country parameter =', resolvedCountry);
    console.log('🔍 CONTENT DEBUG: lang.value =', lang.value);
    console.log('🔍 CONTENT DEBUG: cache key =', cacheKey);
    console.log('🔍 CONTENT DEBUG: WHITELABEL_ID =', WHITELABEL_ID);
    
    // Use unified Worker for KV caching
    const apiUrl = `https://access-content-pp.tech1960.workers.dev/?type=content&codes=${code}&whitelabelId=${WHITELABEL_ID}&country=${resolvedCountry}`;
    console.log('🔍 CONTENT DEBUG: Full API URL =', apiUrl);
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error('❌ CONTENT: HTTP error:', response.status, response.statusText);
      return '';
    }
    
    const responseData = await response.json();
    const data = responseData[code];
    const htmlContent = data && data[0] ? data[0].Html : '';
    
    // Cache the result
    contentCache.set(cacheKey, {
      data: htmlContent,
      timestamp: now
    });
    
    console.log('✅ CONTENT: Content cached for', code, 'for', CONTENT_CACHE_DURATION / 60000, 'minutes');
    return htmlContent;
    
  } catch (error) {
    console.error('❌ CONTENT: Error fetching content:', error);
    return '';
  }
}
```

### Step 3: Update Compliance Pages

**3.1 Update `pages/compliance/[slug].vue`**

Find the fetch logic and update:
```javascript
// Inside the useAsyncData or fetch function
const apiUrl = process.client
  ? `https://access-content-pp.tech1960.workers.dev/?type=content&codes=${slug}&whitelabelId=${WHITELABEL_ID}&country=${lang.value}`
  : `${PP_API_URL}InfoContent?whitelabelId=${WHITELABEL_ID}&code=${slug}`;
```

**3.2 Update `pages/compliance/index.vue`**

Find the fetch logic and update:
```javascript
// Inside the fetch function for each compliance item
const apiUrl = process.client
  ? `https://access-content-pp.tech1960.workers.dev/?type=content&codes=${code}&whitelabelId=${WHITELABEL_ID}&country=${lang.value}`
  : `${PP_API_URL}InfoContent?whitelabelId=${WHITELABEL_ID}&code=${code}`;
```

### Step 4: Update Promotions Page (Optional)

**File**: `pages/promotions/index.vue`

If your site has hydration issues with promotions, update to client-side only loading:

```javascript
<script setup>
import { onMounted, ref } from 'vue'
import { fetchApiPromotions, pp_promotions, loadLang } from '~/composables/globalData'

const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    console.log('🎁 PROMOTIONS PAGE: Starting client-side data load')
    await loadLang()
    await fetchApiPromotions()
    console.log('✅ PROMOTIONS PAGE: Data loaded successfully')
  } catch (err) {
    console.error('❌ PROMOTIONS PAGE: Error loading data:', err)
    error.value = err
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <div v-if="loading" class="text-center py-10">
      <p>Loading promotions...</p>
    </div>
    
    <div v-else-if="error" class="text-center py-10">
      <p>Error loading promotions. Please try again later.</p>
    </div>
    
    <div v-else-if="pp_promotions && pp_promotions.length > 0">
      <!-- Your existing promotions template -->
      <div v-for="promotion in pp_promotions" :key="promotion.Id">
        <div v-html="promotion.Html"></div>
      </div>
    </div>
    
    <div v-else class="text-center py-10">
      <p>No promotions available for your region.</p>
    </div>
  </div>
</template>
```

## Testing Checklist

After implementing the changes, test the following:

### ✅ **Promotions**
- [ ] Promotions load on main page
- [ ] Promotions page loads without errors
- [ ] No "blocked by CORS policy" errors in console
- [ ] Content is geo-targeted correctly

### ✅ **Footer Content**
- [ ] Footer icons display correctly
- [ ] Footer text/disclaimer displays
- [ ] No console errors for footer content

### ✅ **Compliance Pages**
- [ ] `/compliance` index page loads
- [ ] Individual compliance pages (`/compliance/terms`, `/compliance/privacy`, etc.) load
- [ ] Content is properly translated for the user's country

### ✅ **Performance**
- [ ] Pages load faster than before
- [ ] No hydration mismatch errors
- [ ] Console shows successful API calls to CloudFlare Workers

## Troubleshooting

### **Issue**: "Missing codes parameter" error
**Solution**: Check that the `codes` parameter is properly passed in compliance page URLs

### **Issue**: Promotions show as empty array
**Solution**: 
1. Check that `WHITELABEL_ID` is correct for the site
2. Verify the country parameter is being passed correctly
3. Check CloudFlare Worker logs for errors

### **Issue**: Footer content not loading
**Solution**: Ensure `lang.value` is properly resolved before calling `fetchFooterContent()`

### **Issue**: Hydration mismatches
**Solution**: Use client-side only loading for promotions page (see Step 4)

## Monitoring

### **CloudFlare Worker Analytics**
- Monitor requests to `access-content-pp` worker
- Check error rates and response times
- Verify KV cache hit rates

### **Browser Console**
Look for these success messages:
- `✅ UNIFIED: Data received: Array with X items`
- `✅ UNIFIED: Footer content cached successfully`
- `✅ CONTENT: Content cached for X`

### **KV Storage Usage**
- Monitor `content-pp-cache` namespace usage
- Keys follow pattern: `promotions:whitelabelId:country` and `content:code:whitelabelId`

## Rollout Strategy

### **Phase 1: Test Site**
1. Implement on 1 test site
2. Verify all functionality works
3. Monitor for 24-48 hours

### **Phase 2: Gradual Rollout**
1. Deploy to 3-4 sites
2. Monitor performance and errors
3. Address any issues

### **Phase 3: Full Deployment**
1. Deploy to remaining sites
2. Monitor all sites for first week
3. Document any site-specific issues

## Support

For issues during implementation:
1. Check browser console for error messages
2. Verify CloudFlare Worker is responding at `https://access-content-pp.tech1960.workers.dev/`
3. Confirm `WHITELABEL_ID` is correct for each site
4. Test with different VPN countries to verify geo-targeting

## Success Metrics

- ✅ Zero "blocked by CORS policy" errors
- ✅ All content types loading successfully
- ✅ Improved page load times
- ✅ Consistent performance across all geographic regions
- ✅ Reduced direct API calls to ProgressPlay (lower server load)

---

**Last Updated**: December 2024  
**Tested On**: Maxiplay (WHITELABEL_ID: 65) ✅
