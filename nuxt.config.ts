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
      fallback: true,
      crawlLinks: true,     // Add this to prerender linked pages
      routes: ['/']         // Add this to ensure root is prerendered
    }
  },
  // Use ISR (Incremental Static Regeneration) for all routes
  routeRules: {
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
  ],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'betDukes - Your Casino!',
      meta: [
        { name: 'description', content: "Enjoy seamless mobile gaming with betDukes's mobile slots." }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/bd-faviconV2.png' },
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
    }
  },
});