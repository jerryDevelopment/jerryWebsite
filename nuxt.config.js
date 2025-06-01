module.exports = {
  // mode: 'spa',
  router: {
    base: '/',
  },
  env: {
       staticMediaSrcBase: '/',
       restBaseEndpoint: '/',
   },

  /*
  ** Headers of the page
  */
     head: {
       meta: [
         { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { name: 'application-name', content: 'Jerry' },
         { name: 'mobile-web-app-capable', content: 'yes' },
         { name: 'apple-mobile-web-app-capable', content: 'yes' },
         { name: 'apple-mobile-web-app-title', content: 'Jerry' },
         { name: 'msapplication-TileColor', content: '#ffffff' },
         { name: 'theme-color', content: '#ffffff' },
         { name: 'apple-mobile-web-app-status-bar-style', content: '#ffffff' }
       ],
       link: [
         { rel: "apple-touch-icon", sizes:"180x180", href: "favicon/jerry/apple-touch-icon-180x180.png" },
         { rel: "icon", type: "image/png", href: "favicon/jerry/favicon-32x32.png", sizes:"32x32" },
         { rel: "icon", type: "image/png", href: "favicon/jerry/favicon-16x16.png", sizes:"16x16" },
         { rel: "shortcut icon", type: "image/x-icon", href: "favicon/jerry/favicon.ico" }
       ]
   },
   /*
   ** Global CSS integration
   */
   css: [
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
     extend (config, { isDev, isClient, loaders: { vue } }) {
       if (isClient) {
         vue.transformAssetUrls.img = ['data-src', 'src']
         vue.transformAssetUrls.source = ['data-srcset', 'srcset']
       }
     },
     loaders: {
       scss: {
         implementation: require('sass'),
       }
     }
   },
   plugins: [
     { src: '~/plugins/content', ssr: true },
     { src: '~/plugins/lazysizes.client.js', ssr: false },
     { src: '~/plugins/vue-scrollto', ssr: true },
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
     ['nuxt-interpolation'],
     ['@nuxtjs/sitemap', {
       hostname: 'https://www.wirsindjerry.de',
       gzip: true,
       i18n: {
       locales: ['de', 'en'],
         routesNameSeparator: '___'
       },
       exclude: [
         '/datenschutz',
         '/en/privacy-policy',
         '/impressum',
         '/en/imprint'
       ]
     }]
   ]
} 