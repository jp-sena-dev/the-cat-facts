// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    "@nuxt/image"
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  alias: {
    assets: "<rootDir>/assets"
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})