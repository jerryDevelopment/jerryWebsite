module.exports = {
  // mode: 'spa',
  // router: {
  //   base: '/playground/nuxtjs/dist/'
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-js-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NuxtJS Test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS integration
  */
  css: [
    // CSS file in the project
    '@/assets/css/main.css'  
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'rgba(0,0,0,1)' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    vendor: ['axios']

  }
}
