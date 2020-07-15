<template>
  <section class="container">
    <div class="c-frame bg-black">
      <div class="c-area pad-t-4 pad-b-6 pad-resp-2-b-1">
        <div class="media-container">
          <img v-if="projectCurrentLanguage.introMedia.type == 'img'" class="inline" :src="staticMediaSrcBase + 'images/' + projectCurrentLanguage.introMedia.src">
          <video-player v-else class="vjs-custom-skin vjs-big-play-centered inline" ref="videoPlayer" :options="videoOptions(projectCurrentLanguage.introMedia)"></video-player>
        </div>
      </div>
      <div class="c-area">
        <div class="c-area c-area-m">
          <div class="col col-unit-12 pad-resp-2-lr-2-75 pad-resp-4-lr-0 pad-b-5 pad-resp-2-b-4">
            <div class="col col-unit-6 pad-b-6 col-resp-2-unit-12 pad-lr-0-75 pad-resp-4-lr-1 float-left" v-if="isResp2 || isResp3 || isResp4">
              <h1 class="text-s c-white">{{ projectCurrentLanguage.title }}</h1>
              <h2 class="text-s c-grey-4">{{ projectCurrentLanguage.subline }}</h2>
            </div>
            <div class="col col-unit-6 col-resp-2-unit-12 pad-lr-0-75 pad-resp-4-lr-1 float-left">
              <h1 class="text-xl c-white">{{ projectCurrentLanguage.headline }}</h1>
            </div>
          </div>
        </div>
        <div class="col col-notch float-left" v-if="!isResp2 && !isResp3 && !isResp4">
          <h1 class="text-s c-white">{{ projectCurrentLanguage.title }}</h1>
          <h2 class="text-s c-grey-4">{{ projectCurrentLanguage.subline }}</h2>
        </div>
      </div>
      <div class="c-area pad-b-14">
        <div class="c-area c-area-m">
          <div class="col col-unit-6 col-resp-2-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-4-lr-0 float-left">
            <div class="col col-unit-12 pad-resp-4-lr-1" v-for="(text, index) in projectCurrentLanguage.infoText" :key="index">
              <h3 class="text-s c-white mar-b-1" v-html="text.headline"></h3>
              <p class="text-s c-grey-4 mar-b-3" v-html="textFormated(text.text)"></p>
            </div>
            <div class="col col-unit-12 pad-t-2 pad-b-4 float-left" v-if="isResp2 || isResp3 || isResp4">
              <div v-for="(image, index) in projectCurrentLanguage.images" :key="index">
                <div class="media-container">
                  <img v-if="media.type == 'img'" class="inline" :src="staticMediaSrcBase + 'images/' + media.src">
                  <video v-else :autoplay="media.settings.autoplay" :loop="media.settings.loop" :muted="media.settings.muted" :controls="media.settings.controls" playinline class="inline">
                    <source :src="staticMediaSrcBase + 'images/' + media.src"/>
                  </video>
                </div>
                <div class="col col-unit-12 pad-resp-4-lr-1">
                  <p class="text-xs c-grey-4 mar-t-0-5 mar-b-1" v-html="image.subline ? image.subline : '&nbsp;'"></p>
                </div>
              </div>
            </div>
            <div class="col col-unit-12 pad-resp-4-lr-1 pad-t-2" v-if="projectCurrentLanguage.clients.length > 0">
              <h4 class="text-xs c-white" v-html="projectsCurrentLanguage.clientsHeadline"></h4>
              <p class="text-xs c-grey-4 mar-b-1" v-html="projectCurrentLanguage.clients.join(', ')"></p>
            </div>
            <div class="col col-unit-12 pad-resp-4-lr-1 " v-if="projectCurrentLanguage.partners.length > 0">
              <h4 class="text-xs c-white" v-html="projectsCurrentLanguage.partnersHeadline"></h4>
              <p class="text-xs c-grey-4 mar-b-1" v-html="projectCurrentLanguage.partners.join(', ')"></p>
            </div>
          </div>
        </div>
        <div class="col col-notch float-left" v-if="!isResp2 && !isResp3 && !isResp4">
          <div v-for="(media, index) in projectCurrentLanguage.media" :key="index">
            <div class="media-container">
              <img v-if="media.type == 'img'" class="inline" :src="staticMediaSrcBase + 'images/' + media.src">
              <video v-else :autoplay="media.settings.autoplay" :loop="media.settings.loop" :muted="media.settings.muted" :controls="media.settings.controls" playinline class="inline">
                <source :src="staticMediaSrcBase + 'images/' + media.src"/>
              </video>
            </div>
            <p class="text-xs c-grey-4 mar-t-0-5 mar-b-1" v-html="media.subline ? media.subline : '&nbsp;'"></p>
          </div>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </section>
</template>

<script>

import MainFooter from '@/components/main-footer'

export default {
  head() {
    return {
      bodyAttrs: {
        class: 'bg-black',
      }
    }
  },
  // transition (to, from) {
  //   if(from.name == 'digital___de' || from.name == 'digital___en'){
  //     return {
  //       name: 'fast-fade',
  //       mode: 'out-in'
  //     }
  //   } else if(to.name == 'digital___de' || to.name == 'digital___en'){
  //     return {
  //       name: 'fast-fade',
  //       mode: 'out-in'
  //     }
  //   } else {
  //     return {
  //       name: 'fast-fade',
  //       mode: 'out-in'
  //     }
  //   }
  // },
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
        playinline: true,
        fluid: true,
        sources: [{
          type: "video/mp4",
          src: this.staticMediaSrcBase + 'images/' + media.src
        }],
        poster: this.staticMediaSrcBase + 'images/' + media.posterSrc
      }
    },
    textFormated(text) {
      let formattedText = text.split('<ul>').join('<ul class="pad-l-1" style="list-style: disc; list-style-position: outside;">')
      formattedText = formattedText.split('<li>').join('<li class="text-s">')

      return formattedText
    }
  },
  created() {
  }
}

</script>

<style>

.col-notch {
  position: absolute; 
  right: 0; 
  top: 0; 
  max-width: 32.5em;
}

</style>
