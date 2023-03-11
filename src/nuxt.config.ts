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
      projectId: "demofibase-f94e1",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    },
  }
})