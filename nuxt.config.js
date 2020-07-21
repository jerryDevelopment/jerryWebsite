module.exports = {
  // mode: 'spa',
  router: {
    base: '/',
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
    meta: [
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=ISO-8859-1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'Jerry' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'Jerry' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: 'mstile-150x150.png?v=200714114610' },
      { name: 'msapplication-square70x70logo', content: 'mstile-70x70.png?v=200714114610' },
      { name: 'msapplication-square150x150logo', content: 'mstile-150x150.png?v=200714114610' },
      { name: 'msapplication-wide310x150logo', content: 'mstile-310x150.png?v=200714114610' },
      { name: 'msapplication-square310x310logo', content: 'mstile-310x310.png?v=200714114610' },
      { name: 'msapplication-config', content: 'browserconfig.xml?v=200714114610' },
    ],
    link: [
      { rel: "apple-touch-icon", sizes:"57x57", href: "favicon/jerry/apple-touch-icon-57x57.png?v=200714114610" },
      { rel: "apple-touch-icon", sizes:"60x60", href: "favicon/jerry/apple-touch-icon-60x60.png?v=200714114610" },
      { rel: "apple-touch-icon", sizes:"72x72", href: "favicon/jerry/apple-touch-icon-72x72.png?v=200714114610" },
      { rel: "apple-touch-icon", sizes:"76x76", href: "favicon/jerry/apple-touch-icon-76x76.png?v=200714114610" },
      { rel: "apple-touch-icon", sizes:"114x114", href: "favicon/jerry/apple-touch-icon-114x114.png?v=200714114610" },
      { rel: "apple-touch-icon", sizes:"120x120", href: "favicon/jerry/apple-touch-icon-120x120.png?v=200714114610" },
      { rel: "apple-touch-icon", sizes:"144x144", href: "favicon/jerry/apple-touch-icon-144x144.png?v=200714114610" },
      { rel: "apple-touch-icon", sizes:"152x152", href: "favicon/jerry/apple-touch-icon-152x152.png?v=200714114610" },
      { rel: "apple-touch-icon", sizes:"180x180", href: "favicon/jerry/apple-touch-icon-180x180.png?v=200714114610" },
      { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-36x36.png?v=200714114610", sizes:"36x36" },
      { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-48x48.png?v=200714114610", sizes:"48x48" },
      { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-72x72.png?v=200714114610", sizes:"72x72" },
      { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-96x96.png?v=200714114610", sizes:"96x96" },
      { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-144x144.png?v=200714114610", sizes:"144x144" },
      { rel: "icon", type: "image/png", href: "favicon/jerry/android-chrome-192x192.png?v=200714114610", sizes:"192x192" },
      { rel: "icon", type: "image/png", href: "favicon/jerry/favicon-16x16.png?v=200714114610", sizes:"16x16" },
      { rel: "icon", type: "image/png", href: "favicon/jerry/favicon-32x32.png?v=200714114610", sizes:"32x32" },
      { rel: "icon", type: "image/png", href: "favicon/jerry/favicon-96x96.png?v=200714114610", sizes:"96x96" },
      { rel: "shortcut icon", type: "image/x-icon", href: "favicon/jerry/favicon.ico?v=200714114610" },
      { rel: "manifest", href: "favicon/jerry/manifest.json?v=200714114610" },
      { href: "favicon/jerry/apple-touch-startup-image-320x460.png?v=200714114610", media: "(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-640x920.png?v=200714114610", media: "(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-640x1096.png?v=200714114610", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-748x1024.png?v=200714114610", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: landscape)", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-750x1024.png?v=200714114610", media: "", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-750x1294.png?v=200714114610", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-768x1004.png?v=200714114610", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: portrait)", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-1182x2208.png?v=200714114610", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-1242x2148.png?v=200714114610", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-1496x2048.png?v=200714114610", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)", rel: "apple-touch-startup-image" },
      { href: "favicon/jerry/apple-touch-startup-image-1536x2008.png?v=200714114610", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)", rel: "apple-touch-startup-image" }
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
    extend (config, { isDev, isClient, loaders: { vue } }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  },
  plugins: [
    { src: '~/plugins/content', ssr: true },
    { src: '~/plugins/lazysizes.client.js', ssr: false },
    { src: '~/plugins/vue-flickity', ssr: false },
    { src: '~/plugins/vue-instagram', ssr: false },
    { src: '~/plugins/vue-scrollto', ssr: true },
    { src: '~/plugins/vue-video-player', ssr: false },
    { src: '~/plugins/window-size-and-scroll-position', ssr: true },
    { src: '~/plugins/vue-in-viewport-directive', ssr: false },
    { src: '~/plugins/vue-parallax', ssr: true }
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
    }],
    ['nuxt-interpolation']
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
