export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
      base: '/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
      title: 'Ulypse',
      meta: [
          {charset: 'utf-8'},
          {name: 'viewport', content: 'width=device-width, initial-scale=1'},
          {hid: 'description', name: 'description', content: ''},
          {name: 'google-site-verification', content: 'J4baRjNuvmn3FUcs7DNFIVxdH8jD_aO07O4HXa54dXU'}
      ],
      link: [
          {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
          {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css'}
      ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
      "@/assets/scss/main.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
      // https://go.nuxtjs.dev/buefy
      'nuxt-buefy',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}

function getDomain() {
  if (process.env.NODE_ENV === 'production') {
    if (process.env.HOST_URL) {
      return process.env.HOST_URL
    } else if (process.env.HEROKU_APP_NAME) {
      return `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`
    } else if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`
    } else {
      return 'https://ulypse.net'
    }
  } else {
    return 'http://localhost:3000'
  }
}
