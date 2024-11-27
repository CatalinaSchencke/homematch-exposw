// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image', 'nuxt-icon', '@nuxtjs/tailwindcss', '@nuxt/icon','@pinia/nuxt'],

  googleFonts: {
    families: {
      'Poppins': [300, 400, 500, 600, 700, 800] // Especifica las diferentes variantes que deseas usar
    },
    display: 'swap'
  },

  compatibilityDate: '2024-11-26',
})