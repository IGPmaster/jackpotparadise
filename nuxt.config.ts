export default defineNuxtConfig({
  // Keep SSR true for Cloudflare Pages
  ssr: true,
  nitro: {
    preset: 'cloudflare-pages',
    output: {
      dir: '.output',
      publicDir: '.output/public'
    },
    prerender: {
      crawlLinks: true,     // Add this to prerender linked pages
      routes: ['/']         // Add this to ensure root is prerendered
    }
  },
  // Use ISR (Incremental Static Regeneration) for all routes
  routeRules: {
    '/api/**': { prerender: false }, // CloudFlare Functions - disable prerendering
    '/withdrawals-info': { prerender: false }, // Exclude missing page from prerender
    '/excluded-games': { prerender: false }, // Exclude missing page from prerender
    '/**': { isr: true }
  },
  // Add this experimental feature for better Cloudflare Pages compatibility
  experimental: {
    payloadExtraction: false
  },
  css: ['~/assets/main.css'],
  plugins: [
    '~/plugins/language.js',
    '~/plugins/hreflang.js',
    '~/plugins/vue-gtm.client.js',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'JackpotParadise - Your Casino!',
      meta: [
        { name: 'description', content: "Enjoy seamless mobile gaming with JackpotParadise's mobile slots." }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
    }
  },
});