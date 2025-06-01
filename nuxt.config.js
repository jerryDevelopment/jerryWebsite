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
       controlButton: true,
       blockIframe: true,
       colors: {
         barTextColor: '#fff',
         modalOverlay: '#000',
         barBackground: '#000',
         barButtonColor: '#fff',
         modalTextColor: '#fff',
         modalBackground: '#000',
         modalOverlayOpacity: 0.8,
         modalButtonColor: '#000',
         modalUnsavedColor: '#fff',
         barButtonHoverColor: '#000',
         barButtonBackground: '#fff',
         modalButtonHoverColor: '#fff',
         modalButtonBackground: '#fff',
         controlButtonIconColor: '#000',
         controlButtonBackground: '#fff',
         barButtonHoverBackground: '#333',
         checkboxActiveBackground: '#fff',
         checkboxInactiveBackground: '#333',
         modalButtonHoverBackground: '#333',
         checkboxDisabledBackground: '#666',
         controlButtonIconHoverColor: '#fff',
         controlButtonHoverBackground: '#000',
         checkboxActiveCircleBackground: '#000',
         checkboxInactiveCircleBackground: '#fff',
         checkboxDisabledCircleBackground: '#999',
       },
       cookies: {
         necessary: [
           {
             name: {
               en: 'Essential Cookies',
               de: 'Notwendige Cookies'
             },
             description: {
               en: 'These cookies are essential for the basic functionality of our website. They enable core features such as security, network management, and accessibility.',
               de: 'Diese Cookies sind für die grundlegende Funktionalität unserer Website unerlässlich. Sie ermöglichen Kernfunktionen wie Sicherheit, Netzwerkverwaltung und Barrierefreiheit.'
             },
             cookies: ['cookie-control-consent', 'cookie-control-enabled-cookies', 'PHPSESSID', 'csrf_token']
           }
         ],
         optional: [
           {
             name: 'Functional',
             identifier: 'functional',
             description: {
               en: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and providing live chat support.',
               de: 'Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung, wie das Speichern Ihrer Einstellungen, Spracheinstellungen und die Bereitstellung von Live-Chat-Support.'
             },
             initialState: false,
             cookies: ['language_preference', 'theme_preference', 'user_settings', 'chat_session']
           },
           {
             name: 'Analytics',
             identifier: 'analytics',
             description: {
               en: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.',
               de: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden. Dies hilft uns, die Leistung unserer Website und die Benutzererfahrung zu verbessern.'
             },
             initialState: false,
             cookies: ['_ga', '_ga_*', '_gat', '_gid', '_gat_gtag_*', 'gtag']
           },
           {
             name: 'Marketing',
             identifier: 'marketing',
             description: {
               en: 'These cookies are used to track visitors across websites to display relevant advertisements and measure the effectiveness of our marketing campaigns.',
               de: 'Diese Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen, um relevante Werbung anzuzeigen und die Wirksamkeit unserer Marketingkampagnen zu messen.'
             },
             initialState: false,
             cookies: ['_fbp', '_fbc', 'fr', 'tr', 'ads/ga-audiences', 'NID', 'DSID', 'IDE', 'test_cookie', 'linkedin_oauth_*', 'li_*', 'bcookie', 'bscookie']
           },
           {
             name: 'Preferences',
             identifier: 'preferences',
             description: {
               en: 'These cookies remember your choices and preferences to provide a more personalized experience on future visits.',
               de: 'Diese Cookies merken sich Ihre Entscheidungen und Präferenzen, um bei zukünftigen Besuchen eine personalisiertere Erfahrung zu bieten.'
             },
             initialState: false,
             cookies: ['user_preferences', 'display_mode', 'notification_settings', 'layout_preference']
           }
         ]
       },
       text: {
         locale: {
           en: {
             barTitle: 'Cookie Consent',
             barDescription: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies for these purposes. You can customize your preferences or decline non-essential cookies.',
             acceptAll: 'Accept All',
             declineAll: 'Decline All',
             manageCookies: 'Manage Preferences',
             unsaved: 'You have unsaved settings',
             close: 'Close',
             save: 'Save Preferences',
             necessary: 'Essential',
             optional: 'Optional',
             functional: 'Functional',
             blockedIframe: 'To see this content, please enable functional cookies',
             here: 'here'
           },
           de: {
             barTitle: 'Cookie-Einwilligung',
             barDescription: 'Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Traffic zu analysieren. Durch Klicken auf "Alle akzeptieren" stimmen Sie unserer Verwendung von Cookies für diese Zwecke zu. Sie können Ihre Einstellungen anpassen oder nicht-wesentliche Cookies ablehnen.',
             acceptAll: 'Alle akzeptieren',
             declineAll: 'Alle ablehnen',
             manageCookies: 'Einstellungen verwalten',
             unsaved: 'Sie haben ungespeicherte Einstellungen',
             close: 'Schließen',
             save: 'Einstellungen speichern',
             necessary: 'Notwendig',
             optional: 'Optional',
             functional: 'Funktional',
             blockedIframe: 'Um diesen Inhalt zu sehen, aktivieren Sie bitte funktionale Cookies',
             here: 'hier'
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