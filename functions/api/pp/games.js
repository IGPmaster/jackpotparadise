export async function onRequest(context) {
  try {
    console.log('🎮 GAMES: Fetching games from ProgressPlay API via CloudFlare Function')
    
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
    
    // Build the ProgressPlay API URL - JACKPOTPARADISE CONFIG
    const progressPlayUrl = 'https://content.progressplay.net/api23/api/game?whitelabelId=34'
    console.log(`📡 GAMES: Requesting: ${progressPlayUrl}`)
    
    // Forward the request to ProgressPlay API with proper headers
    const response = await fetch(progressPlayUrl, {
      method: 'GET',
      signal: controller.signal,
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
    
    clearTimeout(timeoutId);
    
    console.log(`📊 ProgressPlay API response status: ${response.status}`)
    
    if (!response.ok) {
      console.error(`❌ ProgressPlay API error: ${response.status} - ${response.statusText}`)
      
      // Fallback to CloudFlare Worker if ProgressPlay API fails
      console.log('🔄 Falling back to CloudFlare Worker...')
      const fallbackResponse = await fetch('https://access-ppgames.tech1960.workers.dev/')
      console.log(`📊 CloudFlare Worker response status: ${fallbackResponse.status}`)
      
      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json()
        console.log(`✅ Fallback successful: ${Array.isArray(fallbackData) ? fallbackData.length : 'unknown'} games`)
        
        return new Response(JSON.stringify(fallbackData), {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=300' // 5 minutes cache
          }
        })
      } else {
        throw new Error('Both ProgressPlay API and CloudFlare Worker failed')
      }
    }
    
    const data = await response.json()
    console.log(`✅ Successfully fetched ${Array.isArray(data) ? data.length : 'unknown'} games from ProgressPlay API`)
    
    return new Response(JSON.stringify(data), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // 5 minutes cache
      }
    })
    
  } catch (error) {
    console.error('💥 GAMES: Games proxy error:', error)
    
    // Handle timeout specifically
    if (error.name === 'AbortError') {
      console.error('❌ GAMES: Request timed out, trying CloudFlare Worker fallback...');
      try {
        const fallbackResponse = await fetch('https://access-ppgames.tech1960.workers.dev/')
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json()
          console.log(`✅ GAMES: Timeout fallback successful: ${Array.isArray(fallbackData) ? fallbackData.length : 'unknown'} games`)
          
          return new Response(JSON.stringify(fallbackData), {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Content-Type': 'application/json',
              'Cache-Control': 'public, max-age=300'
            }
          })
        }
      } catch (fallbackError) {
        console.error('❌ GAMES: Timeout fallback also failed:', fallbackError)
      }
    }
    
    // Return empty array as ultimate fallback to prevent crashes
    return new Response(JSON.stringify([]), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60' // Short cache for errors
      }
    })
  }
}
