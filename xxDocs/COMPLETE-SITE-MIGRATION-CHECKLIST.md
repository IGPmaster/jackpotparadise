# Complete Site Migration Checklist

## Pre-Migration Setup
- [ ] Identify site's WHITELABEL_ID
- [ ] Backup current codebase
- [ ] Test on staging first

## Step 1: Update globalData.js

### 1.1 Site Configuration
```javascript
export const WHITELABEL_ID = XX; // Update with site's ID
```

### 1.2 API Endpoints
```javascript
// Games API (ISP fix + optimization)
const KV_GAMES = process.client ? '/api/pp/games' : 'https://access-ppgames.tech1960.workers.dev/';

// Add caching variables (optimization)
let gamesCache = null;
let gamesCacheTime = 0;
let gamesRequestInFlight = null;
const GAMES_CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
```

### 1.3 Replace Functions
- [ ] Replace `fetchGames()` with optimized version (from CLOUDFLARE-WORKER-OPTIMIZATION-GUIDE.md)
- [ ] Replace `fetchApiPromotions()` with worker version (from MULTI-SITE-ISP-BLOCKING-FIX.md)
- [ ] Replace `fetchFooterContent()` with worker version (from MULTI-SITE-ISP-BLOCKING-FIX.md)
- [ ] Replace `fetchCachedContent()` with worker version (from MULTI-SITE-ISP-BLOCKING-FIX.md)

## Step 2: Update Components

### 2.1 Game Components (Remove duplicate API calls)
Files to update:
- [ ] `components/NewGames.vue`
- [ ] `components/PopularGames.vue`
- [ ] `components/SlotGames.vue`
- [ ] `components/CasinoGames.vue`
- [ ] `components/JackpotGames.vue`

**Remove this pattern:**
```javascript
onMounted(async () => {
    await fetchGames(); // ❌ REMOVE
});
```

**Keep this pattern:**
```javascript
await useAsyncData('game-data', async () => {
    await fetchGames(); // ✅ KEEP
});
```

## Step 3: Update Pages

### 3.1 Compliance Pages
- [ ] `pages/compliance/[slug].vue` - Update API URL
- [ ] `pages/compliance/index.vue` - Update API URL

### 3.2 Promotions Page (if needed)
- [ ] `pages/promotions/index.vue` - Switch to client-side loading if hydration issues

## Step 4: Infrastructure Decision

**Choose ONE option:**

### Option A: Universal Workers Only (RECOMMENDED)
- [ ] No additional files needed
- [ ] Uses existing universal workers
- [ ] Simpler deployment

### Option B: CloudFlare Functions (More Complex)
- [ ] Copy `/functions` folder from Maxiplay
- [ ] Copy `/server` folder from Maxiplay
- [ ] Update `nuxt.config.ts`:
```javascript
nitro: {
  routeRules: {
    '/api/**': { prerender: false },
  }
}
```

## Step 5: Testing

### 5.1 Functionality Tests
- [ ] Homepage loads all game sections
- [ ] Promotions page works
- [ ] Footer content displays
- [ ] Compliance pages load
- [ ] No CORS errors in console

### 5.2 Performance Tests
- [ ] Check console for cache hits: `🎮 GAMES: Using cached games data`
- [ ] Verify worker calls: `✅ UNIFIED: Data received`
- [ ] Monitor CloudFlare Worker analytics

### 5.3 Cross-Country Tests
- [ ] Test with VPN from different countries
- [ ] Verify geo-targeting works
- [ ] Check content translations

## Step 6: Monitoring (First 48 Hours)

### 6.1 CloudFlare Analytics
- [ ] Worker CPU usage (should be low)
- [ ] Error rates (should be <1%)
- [ ] KV cache hit rates (should be >80%)

### 6.2 Browser Console
Look for success patterns:
- [ ] `🎮 GAMES: Using cached games data` (frequent)
- [ ] `✅ UNIFIED: Footer content cached successfully`
- [ ] `✅ CONTENT: Content cached for X`

### 6.3 Error Monitoring
Watch for these issues:
- [ ] "Missing codes parameter" errors
- [ ] "Hydration completed but contains mismatches"
- [ ] Empty promotions arrays
- [ ] Slow page loads

## 🚨 CRITICAL TROUBLESHOOTING

### Issue: Games Not Loading Despite API Success
**Symptoms**: Console shows successful API calls but components show empty arrays
**Cause**: Data flow disconnect between global fetchGames() and gameStore
**Solution**: Homepage must call `gameStore.fetchGames()` instead of global `fetchGames()`

### Issue: Still Getting CORS Errors
**Symptoms**: CORS policy errors in console
**Cause**: `KV_GAMES` still using direct ProgressPlay API
**Solution**: Update to `const KV_GAMES = 'https://access-ppgames.tech1960.workers.dev/';`

### Issue: Promotions Load Once But Not On Reload
**Symptoms**: Promotions show on first visit but disappear on page reload
**Cause**: Promotions page not calling `fetchApiPromotions()`
**Solution**: Add `onMounted(async () => { await fetchApiPromotions(); })`

### Issue: Import/Export Errors
**Symptoms**: "X is not a function" or undefined errors
**Cause**: Importing non-existent exports (e.g., `globalGames` instead of `games`)
**Solution**: Verify all imports match actual exports in globalData.js

## Rollback Plan

If issues occur:
1. [ ] Revert `globalData.js` changes
2. [ ] Revert component changes
3. [ ] Remove `/functions` folder (if added)
4. [ ] Deploy previous working version

## Success Criteria

- [ ] Zero "blocked by CORS policy" errors
- [ ] All content loading correctly
- [ ] Page load times improved
- [ ] No hydration errors
- [ ] CloudFlare Worker CPU usage <50% of previous levels

## Site-Specific Notes

**Site Name:** _______________
**WHITELABEL_ID:** ___________
**Special Requirements:** ____________________
**WordPress Integration:** Yes/No
**Compliance Pages:** List any custom ones
**Testing Notes:** ___________________________

---

**Estimated Time:** 2-4 hours per site
**Prerequisites:** Access to both guide files
**Support:** Check both MD guides for detailed code examples
