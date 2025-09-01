export async function onRequest(context) {
  try {
    const url = new URL(context.request.url)
    const pathSegments = url.pathname.split('/')
    const code = pathSegments[pathSegments.length - 1] // Get the last segment as code
    const whitelabelId = url.searchParams.get('whitelabelId') || '34'
    const country = url.searchParams.get('country') || 'GB'
    
    console.log(`🦶 Fetching footer content: code=${code}, country=${country}, whitelabelId=${whitelabelId}`)
    
    // Build the ProgressPlay API URL (new InfoContent endpoint)
    const progressPlayUrl = `https://content.progressplay.net/api23/api/InfoContent?whitelabelId=${whitelabelId}&code=${code}`
    console.log(`📡 Requesting: ${progressPlayUrl}`)
    
    // Forward the request to ProgressPlay API with proper headers
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
    
    console.log(`📊 ProgressPlay Content API response status: ${response.status}`)
    
    if (!response.ok) {
      console.error(`❌ ProgressPlay Content API error: ${response.status} - ${response.statusText}`)
      
      // For footer content, return empty array as graceful fallback
      console.log('🔄 Returning empty array as fallback for footer content')
      
      return new Response(JSON.stringify([]), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=600' // 10 minutes cache for footer
        }
      })
    }
    
    const data = await response.json()
    console.log(`✅ Successfully fetched footer content: ${Array.isArray(data) ? data.length : 'single'} items`)
    
    return new Response(JSON.stringify(data), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=600' // 10 minutes cache for footer
      }
    })
    
  } catch (error) {
    console.error('💥 Footer content proxy error:', error)
    
    // Return empty array as ultimate fallback to prevent crashes
    return new Response(JSON.stringify([]), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
  }
}
