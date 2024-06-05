/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#22223B',
        'primary-variant': '#4A4E69',
        'background' : '#C9ADA7',
        'white': '#F2E9E4',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

