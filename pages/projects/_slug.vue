<template>
  <section class="container">
    <div class="c-frame bg-black">
      <div class="c-area pad-t-4 pad-b-6 pad-resp-2-b-1">
        <div v-if="projectCurrentLanguage.introMedia.type == 'img'" class="media-container media-container-css-height media-container-css-height-project-single-col w-per-100">
          <picture class="obj-fit-cover">
            <source media="(min-width: 1441px)" :data-srcset="projectCurrentLanguage.introMedia.src.mw1441">
            <source media="(min-width: 1025px)" :data-srcset="projectCurrentLanguage.introMedia.src.mw1025">
            <source media="(min-width: 769px)" :data-srcset="projectCurrentLanguage.introMedia.src.mw769">
            <source media="(min-width: 426px)" :data-srcset="projectCurrentLanguage.introMedia.src.mw426">
            <source media="(min-width: 0px)" :data-srcset="projectCurrentLanguage.introMedia.src.mw0">
            <img class="obj-fit-cover lazyload" :data-src="projectCurrentLanguage.introMedia.src.default">
          </picture>
        </div>
        <div v-else class="media-container">
          <video-player class="vjs-custom-skin vjs-big-play-centered inline" ref="videoPlayer" :options="videoOptions(projectCurrentLanguage.introMedia)"></video-player>
        </div>
      </div>
      <div class="c-area">
        <div class="c-area c-area-m">
          <div class="col col-unit-12 pad-resp-2-lr-2-75 pad-resp-4-lr-0 pad-b-5 pad-resp-2-b-4">
            <div class="col col-unit-6 pad-b-6 col-resp-2-unit-12 pad-lr-0-75 pad-resp-4-lr-1 float-left" v-if="isResp2 || isResp3 || isResp4">
              <h1 class="text-s c-white">{{ projectCurrentLanguage.title }}</h1>
              <h2 class="text-s c-grey-4">{{ projectCurrentLanguage.subline }}</h2>
            </div>
            <div class="col col-unit-8 col-resp-2-unit-12 pad-lr-0-75 pad-resp-4-lr-1 float-left">
              <h2 class="text-xl lh-1-2 c-white">{{ projectCurrentLanguage.headline }}</h2>
            </div>
            <div class="col col-unit-4 pad-lr-0-75 pad-l-2 pad-t-0-5 float-left" v-if="!isResp2 && !isResp3 && !isResp4">
              <h1 class="text-s c-white">{{ projectCurrentLanguage.title }}</h1>
              <h2 class="text-s c-grey-4">{{ projectCurrentLanguage.subline }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="c-area pad-b-14">
        <div class="c-area c-area-m">
          <div class="col col-unit-8 col-resp-2-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-0 float-left">
            <div class="col col-unit-12 pad-resp-4-lr-1" v-for="(text, index) in projectCurrentLanguage.infoText" :key="index">
              <h3 class="text-s c-white mar-b-1" v-html="text.headline"></h3>
              <p class="text-s c-grey-4 mar-b-0-75" :class="{ 'mar-b-3': index < projectCurrentLanguage.infoText.length - 1 }" v-html="textFormated(text.text)"></p>
            </div>
            <div class="col col-unit-12 pad-t-2 pad-b-4" v-if="isResp2 || isResp3 || isResp4">
              <div v-for="(media, index) in projectCurrentLanguage.media" :key="index">
                <div @click="activateSlideshow(index)" class="media-container media-container-css-height media-container-css-height-project-single-col w-per-100 pointer">
                  <img v-if="media.type == 'img'" class="obj-fit-cover lazyload" :data-src="media.src.mw769">
                  <video v-else :autoplay="media.settings.autoplay" :loop="media.settings.loop" :muted="media.settings.muted" :controls="media.settings.controls" playinline class="obj-fit-cover">
                    <source :src="media.src"/>
                  </video>
                </div>
                <p class="text-xs c-grey-4 mar-t-0-5 mar-b-1" v-html="media.subline ? media.subline : '&nbsp;'"></p>
              </div>
              <div class="col col-unit-12 pad-resp-4-lr-1 pad-t-2" v-if="projectCurrentLanguage.clients.length > 0">
                <h4 class="text-xs c-white" v-html="projectCurrentLanguage.clients.length > 1 ? projectsCurrentLanguage.clientsHeadline : projectsCurrentLanguage.clientHeadline"></h4>
                <p class="text-xs c-grey-4 mar-b-1" v-html="projectCurrentLanguage.clients.join(', ')"></p>
              </div>
              <div class="col col-unit-12 pad-resp-4-lr-1" v-if="projectCurrentLanguage.partners.length > 0">
                <h4 class="text-xs c-white" v-html="projectsCurrentLanguage.partnersHeadline"></h4>
                <p class="text-xs c-grey-4 mar-b-1" v-html="projectCurrentLanguage.partners.join(', ')"></p>
              </div>
              <div class="col col-unit-12 pad-resp-4-lr-1" v-if="projectCurrentLanguage.expertise.length > 0">
                <h4 class="text-xs c-white" v-html="projectsCurrentLanguage.expertiseHeadline"></h4>
                <p class="text-xs c-grey-4 mar-b-1" v-html="projectCurrentLanguage.expertise.join('<br>')"></p>
              </div>
            </div>
          </div>
          <div class="col col-unit-4 pad-lr-0-75 pad-l-2 float-left" style="position: sticky; top: 5em;" v-if="!isResp2 && !isResp3 && !isResp4">
            <h4 class="text-s c-white mar-b-1" v-html="projectsCurrentLanguage.galleryHeadline"></h4>
            <div v-for="(media, index) in projectCurrentLanguage.media" :key="index">
              <div @click="activateSlideshow(index)" class="media-container media-container-css-height media-container-css-height-project-single-col w-per-100 pointer">
                <img v-if="media.type == 'img'" class="obj-fit-cover lazyload" :data-src="media.src.mw769">
                <video v-else :autoplay="media.settings.autoplay" :loop="media.settings.loop" :muted="media.settings.muted" :controls="media.settings.controls" playinline class="obj-fit-cover">
                  <source :src="media.src"/>
                </video>
              </div>
              <p class="text-xs c-grey-4 mar-t-0-25 mar-b-0-5" v-html="media.subline ? media.subline : '&nbsp;'"></p>
            </div>
            <div class="col col-unit-12 pad-resp-4-lr-1 pad-t-2" v-if="projectCurrentLanguage.clients.length > 0">
              <h4 class="text-xs c-white" v-html="projectCurrentLanguage.clients.length > 1 ? projectsCurrentLanguage.clientsHeadline : projectsCurrentLanguage.clientHeadline"></h4>
              <p class="text-xs c-grey-4 mar-b-1" v-html="projectCurrentLanguage.clients.join(', ')"></p>
            </div>
            <div class="col col-unit-12 pad-resp-4-lr-1" v-if="projectCurrentLanguage.partners.length > 0">
              <h4 class="text-xs c-white" v-html="projectsCurrentLanguage.partnersHeadline"></h4>
              <p class="text-xs c-grey-4 mar-b-1" v-html="projectCurrentLanguage.partners.join(', ')"></p>
            </div>
            <div class="col col-unit-12 pad-resp-4-lr-1" v-if="projectCurrentLanguage.expertise.length > 0">
              <h4 class="text-xs c-white" v-html="projectsCurrentLanguage.expertiseHeadline"></h4>
              <p class="text-xs c-grey-4 mar-b-1" v-html="projectCurrentLanguage.expertise.join('<br>')"></p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <main-footer></main-footer>
    <transition name="fast-fade">
      <div class="screen fixed bg-black" style="z-index: 3" v-if="slideshowIsActive">
        <div @click="slideshowIsActive = false" class="cor-tr pad-tb-1-1 pad-lr-2" style="z-index: 1;">
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.13 23.13" class="close-button-icon">
              <path d="M13.39,11.56,22.75,2.2A1.29,1.29,0,0,0,20.92.38L11.56,9.74,2.2.38A1.27,1.27,0,0,0,.38.38a1.27,1.27,0,0,0,0,1.82l9.36,9.36L.38,20.92A1.29,1.29,0,1,0,2.2,22.75l9.36-9.36,9.36,9.36a1.33,1.33,0,0,0,.92.38,1.29,1.29,0,0,0,.91-.38,1.3,1.3,0,0,0,0-1.83Z" class=" fill-blue"></path>
            </svg>
          </button>
        </div>
        <vue-flickity ref="singlePageFlickity" :options="flickityOptions">
          <div class="single-page-slide" v-for="(media, index) in projectCurrentLanguage.media" :key="index">
            <img class="single-page-slide-img" v-if="media.type == 'img'" :data-flickity-lazyload="media.src.mw1441">
          </div>
        </vue-flickity>
        <div class="edge-b">
          <span v-html="currentSlideIndex + '/' + projectCurrentLanguage.media.length"></span>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>

import MainFooter from '@/components/main-footer'

export default {
  head() {
    return {
      bodyAttrs: {
        class: 'bg-black',
      },
      title: this.projectCurrentLanguage.meta.title,
      meta: [
        { name: 'description', content: this.projectCurrentLanguage.meta.description },
        { name: 'application-name', content: 'Jerry Digital' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'Jerry Digital' },
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
        { rel: 'apple-touch-icon', sizes:'57x57', href: 'favicon/jerry-digital/apple-touch-icon-57x57.png?v=200714114610' },
        { rel: 'apple-touch-icon', sizes:'60x60', href: 'favicon/jerry-digital/apple-touch-icon-60x60.png?v=200714114610' },
        { rel: 'apple-touch-icon', sizes:'72x72', href: 'favicon/jerry-digital/apple-touch-icon-72x72.png?v=200714114610' },
        { rel: 'apple-touch-icon', sizes:'76x76', href: 'favicon/jerry-digital/apple-touch-icon-76x76.png?v=200714114610' },
        { rel: 'apple-touch-icon', sizes:'114x114', href: 'favicon/jerry-digital/apple-touch-icon-114x114.png?v=200714114610' },
        { rel: 'apple-touch-icon', sizes:'120x120', href: 'favicon/jerry-digital/apple-touch-icon-120x120.png?v=200714114610' },
        { rel: 'apple-touch-icon', sizes:'144x144', href: 'favicon/jerry-digital/apple-touch-icon-144x144.png?v=200714114610' },
        { rel: 'apple-touch-icon', sizes:'152x152', href: 'favicon/jerry-digital/apple-touch-icon-152x152.png?v=200714114610' },
        { rel: 'apple-touch-icon', sizes:'180x180', href: 'favicon/jerry-digital/apple-touch-icon-180x180.png?v=200714114610' },
        { rel: 'icon', type: 'image/png', href: 'favicon/jerry-digital/android-chrome-36x36.png?v=200714114610', sizes:'36x36' },
        { rel: 'icon', type: 'image/png', href: 'favicon/jerry-digital/android-chrome-48x48.png?v=200714114610', sizes:'48x48' },
        { rel: 'icon', type: 'image/png', href: 'favicon/jerry-digital/android-chrome-72x72.png?v=200714114610', sizes:'72x72' },
        { rel: 'icon', type: 'image/png', href: 'favicon/jerry-digital/android-chrome-96x96.png?v=200714114610', sizes:'96x96' },
        { rel: 'icon', type: 'image/png', href: 'favicon/jerry-digital/android-chrome-144x144.png?v=200714114610', sizes:'144x144' },
        { rel: 'icon', type: 'image/png', href: 'favicon/jerry-digital/android-chrome-192x192.png?v=200714114610', sizes:'192x192' },
        { rel: 'icon', type: 'image/png', href: 'favicon/jerry-digital/favicon-16x16.png?v=200714114610', sizes:'16x16' },
        { rel: 'icon', type: 'image/png', href: 'favicon/jerry-digital/favicon-32x32.png?v=200714114610', sizes:'32x32' },
        { rel: 'icon', type: 'image/png', href: 'favicon/jerry-digital/favicon-96x96.png?v=200714114610', sizes:'96x96' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: 'favicon/jerry-digital/favicon.ico?v=200714114610' },
        { rel: 'manifest', href: 'favicon/jerry-digital/manifest.json?v=200714114610' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-320x460.png?v=200714114610', media: '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-640x920.png?v=200714114610', media: '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-640x1096.png?v=200714114610', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-748x1024.png?v=200714114610', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: landscape)', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-750x1024.png?v=200714114610', media: '', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-750x1294.png?v=200714114610', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-768x1004.png?v=200714114610', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 1) and (orientation: portrait)', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-1182x2208.png?v=200714114610', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-1242x2148.png?v=200714114610', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-1496x2048.png?v=200714114610', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', rel: 'apple-touch-startup-image' },
        { href: 'favicon/jerry-digital/apple-touch-startup-image-1536x2008.png?v=200714114610', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', rel: 'apple-touch-startup-image' }
      ]
    }
  },
  nuxtI18n: {
    paths: {
      de: '/projekte/:slug',
      en: '/projects/:slug'
    }
  },
  components: { MainFooter },
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
      slideshowIsActive: false,
      currentSlideIndex: 1,
      flickityOptions: {
        prevNextButtons: true,
        pageDots: false,
        adaptiveHeight: true,
        lazyLoad: 2,
        wrapAround: true,
        arrowShape: 'M32.43,49.86A5,5,0,0,1,33,47.94L61,2.67a3.58,3.58,0,1,1,6,3.84h0L40.11,49.86,67,93.49a3.58,3.58,0,1,1-6,3.84L33,51.78A3.89,3.89,0,0,1,32.43,49.86Z',
        on: {
          change: (index) => {
            this.currentSlideIndex = index + 1
          },
        }
      },
    }
  },
  computed: {
    projectCurrentLanguage: function () {
      return this.projectsCurrentLanguage.list.filter(project => project.url == this.$route.params.slug)[0]
    },
  },
  methods: {
    videoOptions(media) {
      return {
        muted: media.settings.muted,
        loop: media.settings.loop,
        autoplay: media.settings.autoplay,
        controls: media.settings.controls,
        playsinline: true,
        fluid: true,
        sources: [{
          type: "video/mp4",
          src: media.src
        }],
        poster: media.posterSrc
      }
    },
    textFormated(text) {
      let formattedText = text.split('<ul>').join('<ul class="pad-l-1" style="list-style: disc; list-style-position: outside;">')
      formattedText = formattedText.split('<li>').join('<li class="text-s">')

      return formattedText
    },
    activateSlideshow(index) {
      this.slideshowIsActive = true
      setTimeout( () => {
        console.log(this.$refs.singlePageFlickity)
        this.$refs.singlePageFlickity.select(index, true, true)
      },1)
    }
  },
  created() {
  }
}

</script>

<style>

  .flickity-prev-next-button {
    background: none !important;
    height: 4em;
    width: 4em;
  }

  .flickity-prev-next-button.previous {

  }
  .flickity-prev-next-button.next {

  }

  .flickity-button-icon path {
    fill: #002dff;
  }


  .single-page-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  .single-page-slide-img {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    object-fit: contain;
  }

</style>
