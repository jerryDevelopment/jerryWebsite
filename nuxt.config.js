module.exports = {
  // mode: 'spa',
  router: {
    base: '/',
    scrollBehavior (to, from, savedPosition) {

      if( (to.name == 'imprint___de' || to.name == 'imprint___en') || (to.name == 'privacy-policy___de' || to.name == 'privacy-policy___en') || (to.name == 'projekte_slug___de' || to.name == 'projects_slug___en') ) {
        return savedPosition
      } else {
        if( (from.name == 'imprint___de' || from.name == 'imprint___en')  || (from.name == 'privacy-policy___de' || from.name == 'privacy-policy___en') || (from.name == 'projekte_slug___dee' || from.name == 'projects_slug___en') ) {
          return savedPosition
        } else {
          return ({ x: 0, y: 0 })
        }
      }

    },
  },

  env: {
      // staticImageSrcBase: 'http://192.168.178.48/.../static/images/',
      // restBaseEndpoint: 'http://192.168.178.48/.../rest-api/',
      // staticMediaSrcBase: 'http://192.168.178.34/nuxt/static/',
      // restBaseEndpoint: 'http://192.168.178.34/nuxt/rest-api/',
      // staticMediaSrcBase: '/jerry/new/dist/',
      // restBaseEndpoint: '/jerry/new/dist/',
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
    { src: '~/plugins/content', ssr: true },
    { src: '~/plugins/vue-flickity', ssr: false },
    { src: '~/plugins/vue-instagram', ssr: false },
    { src: '~/plugins/vue-scrollto', ssr: false },
    { src: '~/plugins/vue-video-player', ssr: false },
    { src: '~/plugins/window-size-and-scroll-position', ssr: true },
    { src: '~/plugins/vue-in-viewport-directive', ssr: false },
    { src: '~/plugins/vue-parallax', ssr: false }
  ],
  modules: [
    ['nuxt-cookie-control', {
       colors: {
        barTextColor: '#fff',
        modalOverlay: '#000',
        barBackground: '#000',
        barButtonColor: '#191919',
        modalTextColor: '#000',
        modalBackground: '#fff',
        modalOverlayOpacity: 0.8,
        modalButtonColor: '#fff',
        modalUnsavedColor: '#fff',
        barButtonHoverColor: '#fff',
        barButtonBackground: '#fff',
        modalButtonHoverColor: '#fff',
        modalButtonBackground: '#191919',
        controlButtonIconColor: '#000',
        controlButtonBackground: '#fff',
        barButtonHoverBackground: '#333',
        checkboxActiveBackground: '#000',
        checkboxInactiveBackground: '#000',
        modalButtonHoverBackground: '#878787',
        checkboxDisabledBackground: '#ddd',
        controlButtonIconHoverColor: '#fff',
        controlButtonHoverBackground: '#000',
        checkboxActiveCircleBackground: '#fff',
        checkboxInactiveCircleBackground: '#fff',
        checkboxDisabledCircleBackground: '#fff',
      },

      text: {
        locale: {
          en: {
            barDescription:  'Our website uses cookies that help us to improve our website, to offer the best possible service and to provide an optimal customer experience. You can manage your settings here. By clicking on "Accept all" you agree that your cookies will be used for this purpose.',
          },
          de: {
            barDescription:  'Unsere Website verwendet Cookies, die uns helfen, unsere Website zu verbessern, den bestmöglichen Service zu bieten und ein optimales Kundenerlebnis zu ermöglichen. Hier können Sie Ihre Einstellungen verwalten. Indem Sie auf "Alle Akzeptieren" klicken, erklären Sie sich damit einverstanden, dass Ihre Cookies für diesen Zweck verwendet werden.',
          }
        },
      }

    }],
    ['nuxt-i18n', {
      locales: ['de', 'en'],
      defaultLocale: 'de',
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
          en:  'Used to save your cookie settings.'
        },
        //else
        description:  'Werden verwendet um Deine Cookieeinstellungen zu speichern.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      },{
        //if multilanguage
        name: {
          en: 'Language Cookies'
        },
        //else
        name:  'Language Cookies',
        //if multilanguage
        description: {
          en:  'Used to save your language settings on this website.'
        },
        //else
        description:  'Werden verwendet um Deine Spracheinstellungen für diese Website zu speichern.',
        cookies: ['i18n_redirected']
      }
    ],
    optional: [
      {
        name:  'Google Analitycs',
        //if multilanguage
        description: {
          en:  'We use Google Analytics to collect anonymous data about website usage and functionality. We use the knowledge to improve our products, services and user experience.'
        },
        //else
        description:  'Wir verwenden Google Analytics, um anonyme Daten über Website-Nutzung und -Funktionalität zu sammeln. Wir nutzen die Erkenntnisse, um unsere Produkte, Dienstleistungen und das Benutzererlebnis zu verbessern.',
        src:  'https://www.googletagmanager.com/gtag/js?id=UA-172341798-1',
        async:  true,
        cookies: ['_ga', '_gat_gtag_UA_172341798_1', '_gid'],
        accepted: () => {

          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'UA-172341798-1', { 'anonymize_ip': true });
        }
      }
    ]
  }

}
