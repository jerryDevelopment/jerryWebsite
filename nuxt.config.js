module.exports = {
  // mode: 'spa',
  // router: {
  //   base: '/.../dist/'
  // },
  env: {
      // staticImageSrcBase: 'http://192.168.178.48/.../static/images/',
      // restBaseEndpoint: 'http://192.168.178.48/.../rest-api/',
      // staticMediaSrcBase: 'http://192.168.178.34/nuxt/static/',
      // restBaseEndpoint: 'http://192.168.178.34/nuxt/rest-api/',
      staticMediaSrcBase: '/',
      restBaseEndpoint: '/',
  },

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
    '@/assets/css/fontface.scss',
    '@/assets/css/basic.scss',
    '@/assets/css/layout.scss',
    '@/assets/css/typography.scss',
    '@/assets/css/color.scss',
    '@/assets/css/spacing.scss',
    '@/assets/css/states.scss',
    '@/assets/css/custom.scss',
    '@/assets/css/styling.scss',
    '@/assets/css/responsive/responsive-1.scss',
    '@/assets/css/responsive/responsive-2.scss',
    '@/assets/css/responsive/responsive-3.scss',
    '@/assets/css/responsive/responsive-4.scss',
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
    }
  },
  plugins: [
    { src: '~/plugins/vue-flickity', ssr: false },
    { src: '~/plugins/vue-packery', ssr: false },
    { src: '~/plugins/vue-instagram', ssr: false }
  ],
  modules: [
    ['nuxt-cookie-control', {
      //your options
    }]
  ],
cookies: {
  necessary: [
    {
      //if multilanguage
      name: {
        en: 'Default Cookies'
      },
      //else
      name:  'Default Cookies',
      //if multilanguage
      description: {
        en:  'Used for cookie control.'
      },
      //else
      description:  'Used for cookie control.',
      cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
    }
  ],
  optional: [
    {
      name:  'Google Analitycs',
      //if multilanguage
      description: {
        en:  'Google GTM is ...'
      },
      //else
      description:  'Google GTM is...',
      src:  'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
      async:  true,
      cookies: ['_ga', '_gat', '_gid'],
      accepted: () =>{
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
      },
      declined: () =>{
      }
    }
  ]
}

}
