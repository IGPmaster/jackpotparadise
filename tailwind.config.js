/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'signup-gradient': 'linear-gradient(305deg, rgba(187, 187, 187, 1) 0%, rgba(238, 238, 238, 1) 100%)',
        'login-gradient': 'linear-gradient(305deg, rgba(255, 196, 0, 1) 0%, rgba(255, 255, 0, 1) 100%)',
      },
      colors: {
        primary: '#fbfce0',
        secondary: '#182B41',
        primary_bg: '#1C3F6B',
        secondary_bg: '#95BFE9',
        tertiary_dark: '#182B41',
    },
  },
  plugins: [],
  important: true,
}
}