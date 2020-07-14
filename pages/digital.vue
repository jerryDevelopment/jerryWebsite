<template>
  <section class="container page-digital">
    <div class="c-frame bg-black" id="who">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-12 pad-resp-4-t-10 pad-b-9 align-center">
          <h2 class="text-xl mar-b-0-33 c-white" v-html="digitalPageCurrentLanguage.whoJerryDigital.headline"></h2>
          <div class="media-container media-container-diagram media-container-diagram-1 w-per-100 mar-t-2 mar-b-4">
            <img class="obj-fit-cover" :src="staticMediaSrcBase + 'images/pictograms/' + digitalPage.pictogramWhoJerryDigital">
          </div>
          <p class="text-l c-white" v-html="digitalPageCurrentLanguage.whoJerryDigital.text"></p>
        </div>
      </div>
    </div>
    <div class="c-frame bg-grey-1" id="why">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-6-5 pad-b-9 align-center">
          <h2 class="text-xl mar-b-0-33 c-white" v-html="digitalPageCurrentLanguage.whyJerryDigital.headline"></h2>
          <div class="media-container media-container-diagram media-container-diagram-2 w-per-75 mar-t-5 mar-b-3-5">
            <img class="obj-fit-cover" :src="staticMediaSrcBase + 'images/pictograms/' + digitalPage.pictogramWhyJerryDigital">
          </div>
          <p class="text-s c-white" v-html="digitalPageCurrentLanguage.whyJerryDigital.subline"></p>
        </div>
      </div>
    </div>
    <div class="c-frame bg-black" id="how">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-12 pad-resp-4-t-8 align-center">
          <h2 class="text-xl mar-b-0-66 mar-resp-4-b-1 c-white" v-html="digitalPageCurrentLanguage.howJerryDigital.headline"></h2>
        </div>
        <div class="col col-unit-6 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-b-9 pad-resp-4-b-1 align-center">
          <p class="text-l c-white" v-html="digitalPageCurrentLanguage.howJerryDigital.subline"></p>
        </div>
      </div>
    </div>
    <div class="" v-for="(listEntry, index) in digitalPageCurrentLanguage.howJerryDigital.list" :key="index">
      <div class="c-frame bg-black" style="z-index: 1;">
        <div :class="'c-area c-area-m' + ( index == 5 ? ' pad-b-3' : '')" :style="(index + 1) % 2 == 0 && index != 5 ? 'padding-bottom: 3em;' : (index + 2) % 2 == 0 ? 'padding-top: 8em;' : ''">
          <div class="col col-unit-8 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-b-4-5 align-center">
            <span class="text-numbers c-blue" v-html="'0' + (index + 1)"></span><br>
            <div class="deco-line bg-grey-3"></div>
            <h3 class="text-l c-white mar-t-0-5 mar-b-0-66" v-html="listEntry.headline"></h3>
            <p class="text-m c-grey-4" v-html="listEntry.text"></p>
          </div>
        </div>
      </div>
      <div v-if="(index + 1) % 2 == 0 && index != 5" v-parallax="0.1" class="c-frame" :style="'z-index: 0;' + ( isResp4 ? 'height: 20em;' : 'height: 30em;' )">
        <img v-if="index == 1" class="obj-fit-cover" style="height: 110%; top: -5%;" :src="staticMediaSrcBase + 'images/' + digitalPage.imgHowJerryDigital1">
        <img v-if="index == 3" class="obj-fit-cover" style="height: 110%; top: -5%;" :src="staticMediaSrcBase + 'images/' + digitalPage.imgHowJerryDigital2">
      </div>
    </div>
    <div class="c-frame bg-grey-1">
      <div class="c-area c-area-m">
        <div class="col col-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-1 pad-t-3 pad-b-4 align-center">
          <div class="media-container media-container-diagram media-container-diagram-3 w-per-100">
            <img class="obj-fit-cover" :src="staticMediaSrcBase + 'images/pictograms/' + digitalPage.pictogramHowJerryDigital">
          </div>
        </div>
      </div>
    </div>
    <div class="c-frame bg-black">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-12 pad-b-5 pad-resp-4-t-10 align-center">
          <h2 class="text-xl mar-b-0-66 mar-resp-4-b-1 c-white" v-html="digitalPageCurrentLanguage.whatJerryDigital.sectionIntro.headline"></h2>
          <p class="text-l c-white" v-html="digitalPageCurrentLanguage.whatJerryDigital.sectionResults.headline"></p>
        </div>
      </div>
    </div>
    <div class="c-frame bg-black" id="what">
      <div class="c-area c-area-m">
        <div class="col col-unit-12 pad-lr-0-75 align-center pad-b-8">
          <h3 class="" v-html="digitalPageCurrentLanguage.whatJerryDigital.sectionResults.headline"></h3>
          <div class="col col-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-1">
            <div class="col col-unit-3 col-resp-2-unit-6 col-resp-4-unit-10 pad-lr-1 mar-b-4 align-center inline-block v-top pointer result-container" v-for="(listEntry, index) in digitalPageCurrentLanguage.whatJerryDigital.sectionResults.list" :key="index" @click="openPopUp(listEntry)">
              <div class="cor-tr mar-r-3-5">
                <button type="button">
                  <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <circle class="fill-blue" cx="10" cy="10" r="10"/>
                    <rect class="fill-white" x="9.07" y="8.38" width="1.89" height="6.75"/>
                    <path class="fill-white" d="M10,4.37a1.47,1.47,0,1,0,1,2.57h0a1.46,1.46,0,0,0-1-2.56Z"/>
                  </svg>
                </button>
              </div>
              <div class="media-container media-container-diagram media-container-diagram-4 w-per-50">
                <img class="obj-fit-cover" :src="staticMediaSrcBase + 'images/pictograms/' + listEntry.img">
              </div>
              <p class="text-xs c-grey-4" v-html="listEntry.title"></p>
            </div>
          </div>
        </div>
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 align-center pad-b-11">
          <p class="text-l c-white mar-b-0-66" v-for="(paragraph, index) in digitalPageCurrentLanguage.whatJerryDigital.sectionResults.text" :key="index" v-html="paragraph"></p>
        </div>
      </div>
    </div>
    <div class="c-frame bg-black" id="jerry-consulting" ref="switchVisibleArea">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-10 pad-resp-4-t-7 pad-b-12-5 pad-resp-4-b-35">
          <div class="col col-unit-6 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 float-left resp-4-align-center">
            <h3 class="text-m text-resp-4-m c-white mar-b-0-66 mar-resp-4-b-1" v-html="digitalPageCurrentLanguage.whatJerryDigital.sectionSportsBusinessConsultants.headline"></h3>
            <p class="text-s c-white mar-b-0-66" v-for="(paragraph, index) in digitalPageCurrentLanguage.whatJerryDigital.sectionSportsBusinessConsultants.text" :key="index" v-html="paragraph"></p>
          </div>
        </div>
      </div>
      <picture class="obj-fit-cover">
        <source media="(min-width: 1025px)" :srcset="staticMediaSrcBase + 'images/' + digitalPage.imgWhatSportsBusinessConsultants">
        <source media="(min-width: 0px)" :srcset="staticMediaSrcBase + 'images/' + digitalPage.imgWhatSportsBusinessConsultantsResp4">
        <img class="obj-fit-cover" :src="staticMediaSrcBase + 'images/' + digitalPage.imgWhatSportsBusinessConsultants">
      </picture>
    </div>
    <div class="c-frame bg-black" id="show-cases" ref="switchVisibleAreaEnd">
      <div class="c-area c-area-m">
        <div class="col col-unit-10 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-t-12 pad-resp-4-t-10 pad-b-5 align-center">
          <h2 class="text-xl c-white" v-html="projectsCurrentLanguage.indexSectionHeadline"></h2>
        </div>
        <div class="col col-unit-12 pad-lr-0-75 pad-resp-2-lr-2-75 pad-resp-4-lr-0 pad-b-5" v-for="(project, index) in projectsCurrentLanguage.list" :key="index">
          <div class="col col-unit-12" v-if="index == 0">
            <div class="col col-unit-12 pad-lr-0-75 pad-resp-4-lr-0 pad-b-3">
              <div class="media-container media-container-show-cases w-per-100">
                <img class="obj-fit-cover" :src="staticMediaSrcBase + 'images/placeholders/' + project.indexImg">
              </div>
            </div>
            <div class="col col-unit-6 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-r-1-5 float-left">
              <h4 class="text-l c-white" v-html="project.title"></h4>
              <h5 class="text-xs c-grey-4 mar-resp-4-b-2" v-html="project.subline"></h5>
            </div>
            <div class="col col-unit-6 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-l-1-5 float-left">
              <p class="text-xs c-grey-4" v-html="project.teaser"></p>
              <nuxt-link class="text-xs c-grey-4 float-right mar-t-1" :to="( $i18n.locale == 'de' ? 'projekte/' : 'projects/' ) + project.url" v-html="projectsCurrentLanguage.linkTextMore"></nuxt-link>
            </div>
          </div>
          <div class="col col-unit-12" v-else>
            <div class="col col-unit-6 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-0 pad-r-1-5 pad-resp-4-b-3 float-left">
              <div class="media-container media-container-show-cases w-per-100">
                <img class="obj-fit-cover" :src="staticMediaSrcBase + 'images/' + project.indexImg">
              </div>
            </div>
            <div class="col col-unit-6 col-resp-4-unit-12 pad-lr-0-75 pad-resp-4-lr-1 pad-l-1-5 float-left">
              <h4 class="text-l c-white" v-html="project.title"></h4>
              <h5 class="text-xs c-grey-4 mar-b-2 mar-resp-4-b-2" v-html="project.subline"></h5>
              <p class="text-xs c-grey-4" v-html="project.teaser"></p>
              <nuxt-link class="text-xs c-grey-4 float-right mar-t-1" :to="( $i18n.locale == 'de' ? 'projekte/' : 'projects/' ) + project.url" v-html="projectsCurrentLanguage.linkTextMore"></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <contact></contact>
    <main-footer></main-footer>

    


  </section>
</template>

<script>

import Contact from '@/components/contact'
import MainFooter from '@/components/main-footer'

export default {
  head() {
    return {
      bodyAttrs: {
        class: !this.$store.state.splitScreenActiveState || this.$store.state.splitScreenAnimationState ? 'of-hidden bg-black' : 'bg-black',
      },
      title: 'Jerry Digital',
      meta: [
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
  components: { Contact, MainFooter },
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
      selectedResult: {},
      popUpIsActive: false

    }
  },
  methods: {
    openPopUp(result) {
      $nuxt.$emit('openPopUp', result)
    },
    closePopUp(result) {
      this.popUpIsActive = false
    },
    setSwitchState: function(){
      if( this.$refs.switchVisibleArea && this.scrollPositionY + this.windowHeight > this.$refs.switchVisibleArea.offsetTop && this.scrollPositionY + this.windowHeight < this.$refs.switchVisibleAreaEnd.offsetTop ) {
        $nuxt.$emit('setSwitchState', true)
      } else {
        $nuxt.$emit('setSwitchState', false)
      }
    }
  },
  created(){
    if (process.browser) { 
      window.addEventListener('scroll', ()=>{
        this.setSwitchState()
      })
    }
  },
  mounted() {
    window.addEventListener('resize', ()=>{
      this.setSwitchState()
    })
    this.setSwitchState()
  },
  destroyed () {
    if (process.browser) { 
      window.removeEventListener('scroll', this.setSwitchState, false);
      window.removeEventListener('resize', this.setSwitchState, false);
    }
  }
}

</script>

<style>

.media-container-diagram,
.media-container-show-cases {
  position: relative;
  display: inline-block;
}

.media-container-diagram:after,
.media-container-show-cases:after {
  content: ' ';
  position: relative;
  width: 100%;
  display: block;
}

.media-container-diagram-1:after  { padding-bottom: 33.333%; }
.media-container-diagram-2:after  { padding-bottom: 93.745%; }
.media-container-diagram-3:after  { padding-bottom: 50%; }
.media-container-diagram-4:after  { padding-bottom: 100%; }
.media-container-show-cases:after { padding-bottom: 56.25%; }



</style>
