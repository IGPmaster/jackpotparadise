export async function onRequest(context) {
  try {
    console.log('🚀 Fetching games from CloudFlare Worker via proxy')
    
    // CloudFlare Worker URL - this is the fast, cached endpoint
    const workerUrl = 'https://access-ppgames.tech1960.workers.dev/'
    console.log(`📡 Requesting: ${workerUrl}`)
    
    // Forward the request to CloudFlare Worker
    const response = await fetch(workerUrl, {
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
    
    console.log(`📊 CloudFlare Worker response status: ${response.status}`)
    
    if (!response.ok) {
      console.error(`❌ CloudFlare Worker error: ${response.status} - ${response.statusText}`)
      
      // If Worker fails, fallback to direct ProgressPlay API - JACKPOTPARADISE CONFIG
      console.log('🔄 Falling back to direct ProgressPlay API...')
      const fallbackResponse = await fetch('https://content.progressplay.net/api23/api/game?whitelabelId=34', {
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
      
      console.log(`📊 ProgressPlay API fallback response status: ${fallbackResponse.status}`)
      
      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json()
        console.log(`✅ Fallback successful: ${Array.isArray(fallbackData) ? fallbackData.length : 'unknown'} games from ProgressPlay`)
        
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
        throw new Error('Both CloudFlare Worker and ProgressPlay API failed')
      }
    }
    
    const data = await response.json()
    console.log(`✅ Successfully fetched ${Array.isArray(data) ? data.length : 'unknown'} games from CloudFlare Worker`)
    
    return new Response(JSON.stringify(data), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // 5 minutes cache - Worker already has its own caching
      }
    })
    
  } catch (error) {
    console.error('💥 Worker proxy error:', error)
    
    // Return empty array as ultimate fallback to prevent crashes
    return new Response(JSON.stringify([]), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
  }
}
