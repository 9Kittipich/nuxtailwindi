// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,

  modules: [
    'nuxt-windicss',
    'nuxt-icon',
    'nuxt-vuefire',
  ],
  vuefire: {
    config: {
      apiKey: "",
      authDomain: "",
      projectId: process.env.NUXT_VUEFIRE_CONFIG_PROJECT_ID,
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    },
  }
})