// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Supanuxt',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: 'Sample model with Nuxt3 + Supabase' },
        { name: 'author', content: 'beomzin' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', '@nuxtjs/supabase'],
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      clientUrl: '',
      serverUrl: '',
      buildVersion: ''
    }
  },
  supabase: {
    redirect: false
  }
})
