// CloudFlare Functions - WordPress Promotions Proxy
export async function onRequest(context) {
  const { request, env } = context;

  // Handle CORS preflight requests
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  try {
    console.log('🔄 WP PROXY: Fetching WordPress promotions...');
    
    // WordPress API endpoint - ROYALZEE CONFIG
    const wpApiUrl = 'https://headless.royalzee.com/wp-json/wp/v2/promotions/?_fields=content,yoast_head_json.description,yoast_head_json.og_title,acf&acf_format=standard';
    
    console.log('📡 WP PROXY: Calling WordPress API:', wpApiUrl);
    
    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(wpApiUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
      }
    });
    
    clearTimeout(timeoutId);

    console.log('📊 WP PROXY: Response status:', response.status);
    console.log('📊 WP PROXY: Response ok:', response.ok);

    // Check if response is actually JSON first
    const contentType = response.headers.get('content-type');
    console.log('📊 WP PROXY: Response content-type:', contentType);
    
    // Get response body once
    const responseText = await response.text();
    
    if (!response.ok) {
      console.error('❌ WP PROXY: WordPress API error:', response.status, response.statusText);
      console.error('❌ WP PROXY: Error response body:', responseText.substring(0, 500));
      return new Response(JSON.stringify({ 
        error: 'WordPress API error', 
        status: response.status,
        statusText: response.statusText,
        body: responseText.substring(0, 200)
      }), {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }
    
    if (!contentType || !contentType.includes('application/json')) {
      console.error('❌ WP PROXY: Received HTML instead of JSON:', responseText.substring(0, 500));
      return new Response(JSON.stringify({ 
        error: 'WordPress API returned HTML instead of JSON',
        contentType: contentType,
        body: responseText.substring(0, 200)
      }), {
        status: 502,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('❌ WP PROXY: Failed to parse JSON:', parseError);
      console.error('❌ WP PROXY: Response text:', responseText.substring(0, 500));
      return new Response(JSON.stringify({ 
        error: 'Failed to parse WordPress API response as JSON',
        parseError: parseError.message,
        body: responseText.substring(0, 200)
      }), {
        status: 502,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }
    console.log('✅ WP PROXY: WordPress promotions fetched successfully:', Array.isArray(data) ? `${data.length} items` : typeof data);

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "*",
        "Cache-Control": "public, max-age=300", // 5 minutes cache
      },
    });

  } catch (error) {
    console.error('❌ WP PROXY: Error fetching WordPress promotions:', error);
    
    // Handle timeout specifically
    if (error.name === 'AbortError') {
      console.error('❌ WP PROXY: Request timed out after 10 seconds');
      return new Response(JSON.stringify({ 
        error: 'Request timeout',
        message: 'WordPress API request timed out after 10 seconds'
      }), {
        status: 504, // Gateway timeout
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "*",
        },
      });
    }
    
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: error.message,
      name: error.name
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "*",
      },
    });
  }
}
