export async function onRequest(context) {
  // Handle CORS preflight
  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      }
    })
  }

  try {
    const url = new URL(context.request.url)
    const whitelabelId = url.searchParams.get('whitelabelId') || '34'
    const country = url.searchParams.get('country') || 'GB'
    
    console.log('🎁 CF FUNCTION: Fetching promotions from ProgressPlay API via server proxy')
    console.log(`🔍 Request parameters: whitelabelId=${whitelabelId}, country=${country}`)
    console.log(`🌐 Request URL: ${context.request.url}`)
    console.log(`🔧 Request method: ${context.request.method}`)
    
    // Build the ProgressPlay API URL for promotions (fixed endpoint with language)
    const progressPlayUrl = `https://content.progressplay.net/api23/api/PromotionsInfo?whitelabelId=${whitelabelId}&country=${country}`
    console.log(`📡 Requesting: ${progressPlayUrl}`)
    
    // Forward the request to ProgressPlay API with same headers as games proxy
    const response = await fetch(progressPlayUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Referer': 'https://www.jackpotparadise.com/',
        'Origin': 'https://www.jackpotparadise.com',
        'Connection': 'keep-alive',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site'
      }
    })
    
    console.log(`📊 ProgressPlay Promotions API response status: ${response.status}`)
    console.log(`📊 Response status text: ${response.statusText}`)
    console.log(`📊 Response headers:`, Object.fromEntries(response.headers))
    
    if (!response.ok) {
      console.error(`❌ ProgressPlay Promotions API error: ${response.status} - ${response.statusText}`)
      
      // Try to get the error response body for debugging
      try {
        const errorText = await response.text()
        console.error(`❌ Error response body (first 500 chars): ${errorText.substring(0, 500)}`)
      } catch (bodyError) {
        console.error(`❌ Could not read error response body:`, bodyError)
      }
      
      // For promotions, return empty array as graceful fallback (no worker fallback like games)
      console.log('🔄 Returning empty array as fallback for promotions')
      
      return new Response(JSON.stringify([]), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=900' // 15 minutes cache for promotions
        }
      })
    }
    
    // Try to parse the response
    let data
    try {
      const responseText = await response.text()
      console.log(`📄 Raw response (first 200 chars): ${responseText.substring(0, 200)}`)
      data = JSON.parse(responseText)
      console.log(`✅ Successfully parsed JSON response`)
    } catch (parseError) {
      console.error(`❌ JSON parse error:`, parseError)
      console.log('🔄 Returning empty array due to parse error')
      return new Response(JSON.stringify([]), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
    }
    
    console.log(`✅ Successfully fetched ${Array.isArray(data) ? data.length : 'single'} promotions from ProgressPlay API`)
    console.log(`📊 Data structure:`, Array.isArray(data) ? 'Array' : typeof data)
    
    if (Array.isArray(data) && data.length > 0) {
      console.log(`📊 First promotion sample:`, JSON.stringify(data[0]).substring(0, 200))
    }
    
    console.log('✅ CF FUNCTION: Returning successful response')
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
        'Cache-Control': 'public, max-age=900', // 15 minutes cache for promotions
        'Vary': 'Origin'
      }
    })
    
  } catch (error) {
    console.error('💥 Promotions proxy error:', error)
    console.error('💥 Error stack:', error.stack)
    console.error('💥 Error message:', error.message)
    
    // Return empty array as ultimate fallback to prevent crashes
    console.log('🔄 CF FUNCTION: Returning error fallback response')
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin'
      }
    })
  }
}