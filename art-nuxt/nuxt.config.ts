import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    STRAPI_URL: process.env.STRAPI_URL,
    STRAPI_V4_URL: process.env.STRAPI_V4_URL,
    LIVE_URL: process.env.LIVE_URL,
    FIENTA_TICKET_URL: process.env.FIENTA_TICKET_URL,
  },
})
