// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Supanuxt',
      charset: 'utf-8'
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', '@nuxtjs/supabase'],
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      clientUrl: process.env.CLIENT_URL,
      serverUrl: process.env.SERVER_URL
    }
  },
  supabase: {
    redirect: false
  }
})
