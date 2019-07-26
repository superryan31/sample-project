export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Set the link active classes
   */
  router: {
    linkActiveClass: 'active open'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    /* Import Font Awesome Icons Set */
    '~/node_modules/flag-icon-css/css/flag-icon.min.css',
    /* Import Font Awesome Icons Set */
    '~/node_modules/font-awesome/css/font-awesome.min.css',
    /* Import Simple Line Icons Set */
    '~/node_modules/simple-line-icons/css/simple-line-icons.css',
    /* Import Bootstrap Vue Styles */
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    /* Import Core SCSS */
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],
  /*
   ** Style resources configuration
   */
  styleResources: {
    scss: './assets/scss/style.scss'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/vee-validate.js'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/eslint-module',
    'bootstrap-vue/nuxt',
    'nuxt-validate'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: 'http://localhost:3000'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'users/sign_in', method: 'post', propertyName: 'token' },
          user: { url: 'users/sign_in', method: 'get', propertyName: false },
          logout: false
        }
      }
    },
  redirect: {
    login: '/login',
    logout: '/',
    home: '/',
  }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
