# Hippozino Content Worker Fix

## Problem
Hippozino (WHITELABEL_ID = 12) is using LOCAL CloudFlare Functions instead of the unified CloudFlare Workers, which means it's not creating KV cache entries.

## Current Code (BROKEN)
```javascript
// Line 554 in fetchCachedContent function
const apiUrl = `/api/pp/content?type=content&codes=${code}&whitelabelId=${WHITELABEL_ID}&country=${resolvedCountry}`;
```

## Fixed Code (WORKING)
```javascript
// Use unified CloudFlare Worker for KV caching
const apiUrl = `https://access-content-pp.tech1960.workers.dev/?type=content&codes=${code}&whitelabelId=${WHITELABEL_ID}&country=${resolvedCountry}`;
```

## Also Update fetchFooterContent Function
```javascript
// Line ~505 in fetchFooterContent function - CHANGE THIS:
const apiUrl = `/api/pp/content?type=content&codes=footericon,footertext&whitelabelId=${WHITELABEL_ID}&country=${lang}`;

// TO THIS:
const apiUrl = `https://access-content-pp.tech1960.workers.dev/?type=content&codes=footericon,footertext&whitelabelId=${WHITELABEL_ID}&country=${lang}`;
```

## Expected Results After Fix
- KV entries like `content:aboutus:12:IE` should be created
- Footer content should also be cached
- All compliance pages should load faster after first visit

## Apply This Same Fix to All 12 Sites
Every site that uses `/api/pp/content` needs to be updated to use `https://access-content-pp.tech1960.workers.dev/` instead.
