<template>
  <section class="container screen fixed scrollable legal-container bg-grey-1" style="z-index: 100;">
    <div class="cor-tr fixed" style="z-index: 2;">
        <div class="col col-100 pad-lr-2 pad-tb-1-25 align-center" @click="closeImprint()">
          <button type="button">
            <svg class="close-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.13 23.13">
              <path class="fill-white" d="M13.39,11.56,22.75,2.2A1.29,1.29,0,0,0,20.92.38L11.56,9.74,2.2.38A1.27,1.27,0,0,0,.38.38a1.27,1.27,0,0,0,0,1.82l9.36,9.36L.38,20.92A1.29,1.29,0,1,0,2.2,22.75l9.36-9.36,9.36,9.36a1.33,1.33,0,0,0,.92.38,1.29,1.29,0,0,0,.91-.38,1.3,1.3,0,0,0,0-1.83Z"/>
            </svg>
          </button>
        </div>
    </div>
    <div class="c-frame">
      <div class="c-area c-area-m">
        <div class="col col-unit-12 pad-lr-0-5 pad-t-8 pad-b-4 align-center">
          <svg class="legal-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 342.81 235.16">
            <g>
              <path class="fill-white" d="M194.4,74.1V66.4H178.2v58.4h17V101.3c0-5.3.6-10.7,4.3-14.4,3.9-4.1,9.5-4.9,16.4-4.1V66.2c-8.1-1.3-16.1,1.2-21.5,7.9" transform="translate(-28.59 17.58)"/>
              <path class="fill-white" d="M238.5,74.1V66.4H222.3v58.4h17V101.3c0-5.3.6-10.7,4.2-14.4,3.9-4.1,9.5-4.9,16.4-4.1V66.2c-8-1.3-16,1.2-21.4,7.9" transform="translate(-28.59 17.58)"/>
              <path class="fill-white" d="M99.1,29.1a14.2,14.2,0,1,0,14.2,14.2h0A14.19,14.19,0,0,0,99.1,29.1" transform="translate(-28.59 17.58)"/>
              <path class="fill-white" d="M325.4,115.6l-.2-49H307.9l.3,30c0,7.4-5.3,13-12.9,13-11.1,0-12.4-9.3-12.4-13l-.2-30h-17l.2,30c0,17.4,10.5,29.1,26.2,29.1a21.71,21.71,0,0,0,16.4-7l.1,16.6c0,6.1-3.7,12.1-12.2,12.1s-12.1-6.1-12.1-12.1v-1.2h-17v.6c0,16.6,11.3,29.3,29.1,29.3s29.3-12.6,29.3-29.3Z" transform="translate(-28.59 17.58)"/>
              <path class="fill-white" d="M154.6,88.5H129.3a4.05,4.05,0,0,1,.5-.9c2.1-5.3,6.6-8.7,12.1-8.7a12.7,12.7,0,0,1,12.5,8.9,2.51,2.51,0,0,0,.4.7h-.2M142.1,64.3c-16.5,0-29.8,13.7-29.8,30.6s13.4,30.6,29.8,30.6a29.92,29.92,0,0,0,28.4-21.2H153c-2.2,4.1-6.5,6-11,6a13,13,0,0,1-12.5-8.8l-.1-.2h0c-.1-.4-.3-.8-.4-1.2h42.5a29.61,29.61,0,0,0,.4-5.2c-.1-16.9-13.4-30.6-29.8-30.6" transform="translate(-28.59 17.58)"/>
              <path class="fill-white" d="M90.4,135.1c0,6-3.7,12.1-12.1,12.1H74.4v16.6h4.3c17.5-.2,28.8-12.8,28.8-29.3V66.3h-17Z" transform="translate(-28.59 17.58)"/>
            </g>
          </svg>
        </div>
        <div class="col-unit-12 pad-lr-1 pad-b-10" v-html="imprintCurrentLanguageText"></div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  head() {
    return {
      bodyAttrs: {
        class: 'bg-grey-1',
      },
      title: this.imprintCurrentLanguage.meta.title,
      meta: [
        { name: "application-name", content: "Jerry" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-title", content: "Jerry" },
        { name: "msapplication-TileColor", content: "#ffffff" },
        { name: "theme-color", content: "#ffffff" },
        { name: "apple-mobile-web-app-status-bar-style", content: "#ffffff" },
        { name: "msapplication-TileImage", content: "mstile-150x150.png?v=200714114610" },
        { name: "msapplication-square70x70logo", content: "mstile-70x70.png?v=200714114610" },
        { name: "msapplication-square150x150logo", content: "mstile-150x150.png?v=200714114610" },
        { name: "msapplication-wide310x150logo", content: "mstile-310x150.png?v=200714114610" },
        { name: "msapplication-square310x310logo", content: "mstile-310x310.png?v=200714114610" },
        { name: "msapplication-config", content: "browserconfig.xml?v=200714114610" },
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


    }
  },
  transition: {
    name: 'page-fade',
    mode: 'in-out'
  },
  nuxtI18n: {
    paths: {
      de: '/impressum', // -> accessible at /about-us (no prefix since it's the default locale)
      en: '/imprint'
    }
  },
  scrollToTop: false,
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
    }
  },
  methods: {
    closeImprint() {
      this.$router.go(-1)
    }
  },
  created() {
  }
}

</script>

<style>

</style>
