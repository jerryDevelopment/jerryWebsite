<template>
  <div :class="'c-frame' + ( isIndex ? ' bg-white contact-index' : ' bg-black contact-digital')" id="contact">
    <div class="c-area c-area-m">
      <div class="col col-unit-12 pad-lr-0-75 pad-t-6-5 pad-b-3 align-center">
        <h2 :class="'text-xxl mar-b-0-33 ' + textColorClass" v-html="contactCurrentLanguage.headline"></h2>
      </div>
      <div class="col col-unit-12 col-resp-2-unit-7 col-resp-4-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-t-2 pad-b-9 align-center">
        <div :class="'col col-unit-4 col-resp-2-unit-12 pad-resp-2-b-4 pad-resp-4-b-6 float-left' + ( index == 1 ? ' align-center' : ( index == 0 ? ' align-left' : ' align-right' ) )" v-for="(partner, index) in contact.partners" :key="index">
          <div class="col auto-width col-resp-2-unit-12 inline-block align-center">
            <div class="media-container mar-b-2"><img :class="!isResp2 && !isResp3 && !isResp4 ? 'asset-picto' : 'inline'" :data-src="staticMediaSrcBase + 'images/' + partner.img" v-lazy-load></div>
            <p :class="'text-m text-resp-4-m mar-b-1 ' + textColorClass" v-html="partner.name"></p>
            <p :class="'text-s ' + textColorClass3" v-html="'T ' + partner.phone"></p>
            <p :class="'text-s mar-b-2 ' + textColorClass3" v-html="partner.email"></p>
            <button type="button" class="download-button"><a :href="staticMediaSrcBase + 'vcf/' + partner.vcf">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.17 16.84">
                <polygon :class="fillColorClass" points="13.11 7.12 11.74 5.85 9.02 8.79 9.02 0 7.15 0 7.15 8.79 4.43 5.85 3.06 7.12 8.08 12.52 13.11 7.12"/>
                <rect :class="fillColorClass" y="14.98" width="16.17" height="1.86"/>
              </svg>
              <p :class="'text-xs text-resp-4-xs mar-t-0-5 ' + textColorClass3" v-html="contactCurrentLanguage.downloadButtonText"></p></a>
            </button>
          </div>
        </div>
      </div>
      <div class="col col-unit-12 pad-lr-0-75 pad-b-12-5">
        <div class="col col-unit-4 col-resp-2-unit-12 pad-lr-0-75 pad-resp-2-lr-3-5 pad-resp-2-b-4 resp-2-align-center float-left">
          <p :class="'text-m mar-b-0-66 ' + textColorClass" v-html="contact.companyName"></p>
          <p :class="'text-s ' + textColorClass3" v-html="contact.address.street"></p>
          <p :class="'text-s ' + textColorClass3" v-html="contact.address.city"></p>
          <a :href="contact.address.gmapLink"><p :class="'text-s mar-b-1 ' + textColorClass3"><svg style="height: .75em;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.42 10.98"><polygon :class="fillColorClassSocial" points="7.93 0 6.62 1.32 9.86 4.56 0 4.56 0 6.42 9.86 6.42 6.62 9.66 7.93 10.98 13.42 5.49 7.93 0"/></svg> Google Maps</p></a>
          <a :href="'tel:' + contact.address.phone"><p :class="'text-s ' + textColorClass3" v-html="'T ' + contact.address.phone"></p></a>
          <a :href="'mailto:' + contact.address.email"><p :class="'text-s mar-b-2 ' + textColorClass3" v-html="contact.address.email"></p></a>
          <p :class="'text-s mar-b-1 ' + textColorClass3" v-html="contactCurrentLanguage.followUsText"></p>
          <a :href="navigation.socialLinks.facebook"><svg class="social-icon pad-tb-1 mar-r-1 mar-resp-2-lr-0-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path :class="fillColorClassSocial" d="M27.78,0H2.21A2.19,2.19,0,0,0,0,2.16V27.84A2.19,2.19,0,0,0,2.21,30H16.08V18.43H12.19V13.91h3.89V10.58c0-3.86,2.35-6,5.79-6a30.37,30.37,0,0,1,3.48.18v4H23c-1.87,0-2.24.89-2.24,2.2v2.88h4.48l-.58,4.52h-3.9V30h7A2.19,2.19,0,0,0,30,27.84V2.16A2.19,2.19,0,0,0,27.78,0Z"/>
          </svg></a>
          <a :href="navigation.socialLinks.instagram"><svg class="social-icon pad-tb-1 mar-r-1 mar-resp-2-lr-0-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path :class="fillColorClassSocial" d="M27.34,21.72a5.62,5.62,0,0,1-5.62,5.62H8.28a5.62,5.62,0,0,1-5.62-5.62V8.28A5.62,5.62,0,0,1,8.28,2.66H21.72a5.62,5.62,0,0,1,5.62,5.62ZM21.72,0H8.28A8.28,8.28,0,0,0,0,8.28V21.72A8.28,8.28,0,0,0,8.28,30H21.72A8.29,8.29,0,0,0,30,21.72V8.28A8.28,8.28,0,0,0,21.72,0"/>
            <path :class="fillColorClassSocial" d="M15,20.07A5.07,5.07,0,1,1,20.07,15,5.08,5.08,0,0,1,15,20.07m0-12.8A7.73,7.73,0,1,0,22.73,15,7.74,7.74,0,0,0,15,7.27"/>
            <path :class="fillColorClassSocial" d="M23.06,5a2,2,0,1,0,1.37.57A2,2,0,0,0,23.06,5"/>
          </svg></a>
          <a :href="navigation.socialLinks.linkedIn"><svg class="social-icon pad-tb-1 mar-r-1 mar-resp-2-lr-0-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path :class="fillColorClassSocial" d="M25.56,25.56H21.12v-7c0-1.66,0-3.8-2.32-3.8s-2.66,1.81-2.66,3.68v7.08H11.69V11.25H16V13.2H16a4.68,4.68,0,0,1,4.21-2.31c4.5,0,5.33,3,5.33,6.82ZM6.67,9.29A2.58,2.58,0,1,1,9.25,6.71,2.59,2.59,0,0,1,6.67,9.29h0M8.9,25.56H4.45V11.25H8.9ZM27.78,0H2.21A2.19,2.19,0,0,0,0,2.16V27.84A2.19,2.19,0,0,0,2.21,30H27.78A2.19,2.19,0,0,0,30,27.84V2.16A2.19,2.19,0,0,0,27.78,0"/>
          </svg></a>
        </div>
        <div class="col col-unit-8 col-resp-2-unit-12 pad-resp-2-lr-3-5 pad-resp-4-lr-0 resp-2-align-center float-left">
          <div class="col col-unit-12 pad-lr-0-75 mar-b-0-75">
            <svg class="instagram-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.46 32.58">
              <path :class="fillColorClassInstagram" d="M89,18.71A2.53,2.53,0,0,1,87.14,20c-.49,0-1.27-.94-1.44-1.59A11.69,11.69,0,0,1,86,11.31c.35-1,1-2,2.12-1.6a3.64,3.64,0,0,1,1.69,1.93A3.79,3.79,0,0,1,90,12.87l.25,1.32A32.84,32.84,0,0,1,89,18.71M65.63,29.65a1.82,1.82,0,0,1-2.45,1.46c-1.29-.54-1.12-1.64-.78-2.63A13,13,0,0,1,66,23.67l.47.14c-.27,2-.43,3.92-.85,5.84M65,18.57A2.71,2.71,0,0,1,63.1,20c-.47,0-1.3-1-1.5-1.68a10.57,10.57,0,0,1,.39-7c.4-1,1-1.86,2.27-1.7s1.38,1.15,1.56,2.08l.39,2.14A35,35,0,0,1,65,18.57m-13.77.11A2.46,2.46,0,0,1,49.41,20c-.57,0-1.32-1-1.53-1.68a11.29,11.29,0,0,1,.28-7c.34-1,1-1.79,2.12-1.7s1.52,1,1.73,1.95.19,1.66.28,2.49l.19.07a34.36,34.36,0,0,1-1.23,4.53M115,16.56a17.65,17.65,0,0,1-.78,2.12A9.73,9.73,0,0,1,113,20.1a7.22,7.22,0,0,1-1.2-1.53,5.09,5.09,0,0,1-.3-1.92c0-2.24,0-4.49,0-6.73,0-1.24-.8-2-2.35-2.31-1.19-.24-1.58.53-1.88,1.42l-1.89,5.77h-.37c0-1.71,0-3.42,0-5.13,0-1.33-.93-1.82-2.07-2.08s-1.52.46-1.84,1.29c-.49,1.29-1,2.58-1.45,3.86a30.62,30.62,0,0,1-.24-3.91c-.06-1.31-1.22-1.08-2-1.23-1-.17-.86.63-.87,1.21,0,2.34,0,4.68-.11,7A6,6,0,0,1,96,18.27c-.39.75-1.17,1.85-1.75,1.84C93,20.08,93,18.72,93,17.79c-.06-2.66,0-5.33,0-8,0-.75.14-1.54-.87-1.8s-1.75-.56-2.3.53C87.19,6.51,85,7,83.41,9.93c-1.28,2.37-1.27,4.93-1.11,7.52a4,4,0,0,1-.45,2.11,1.09,1.09,0,0,1-2.07-.09,5.32,5.32,0,0,1-.59-2.41c.13-2,.42-4.08.74-6.1.27-1.74-.38-2.5-2.16-2.24-.87.13-1.73.31-2.23.4-.61-.84-1-1.8-1.58-2a2.15,2.15,0,0,0-2,.78,5.59,5.59,0,0,0-.16,2.6c0,.28.46.59.41.83A18.7,18.7,0,0,1,69,18.17c0-3.05,0-5.76,0-8.46,0-.71.12-1.42-.82-1.69s-1.8-.55-2.39.53c-2.37-1.87-4.52-1.63-6,.7a6.69,6.69,0,0,0-1.12,2.54,49.15,49.15,0,0,0-.4,5.69c0,1.19-.74,2.75-1.54,2.71-1.46-.06-1.3-1.33-1.5-2.29a2.6,2.6,0,0,1,0-.56c0-2.52,0-5,0-7.57,0-.77.09-1.51-.91-1.77s-1.74-.53-2.27.55c-2.67-2-5-1.61-6.41,1.42-.76,1.65-.83,3.6-1.32,5.38A17.2,17.2,0,0,1,43,18.83a1.8,1.8,0,0,1-1.42.88,1.75,1.75,0,0,1-.94-1.36c-.08-3.76,0-7.52,0-11.42a23.62,23.62,0,0,0,3.4,0c.42-.07.74-.74,1.11-1.14-.35-.27-.67-.7-1-.76-1.09-.18-2.2-.2-3.26-.28V1.63C40.82.74,39.76.06,38.45,0c-1,0-.93.7-1,1.35-.08,1.05-.14,2.11-.21,3.14-3.79.12-3.88.17-3.5,2.2L37,6.94c.89,5.61.09,9.52-2.22,10.9.18-3.38-3-4.22-4.74-6.11.27-.41.52-.75.72-1.11a8.55,8.55,0,0,0,.6-1.26C31.84,8,31.2,7.18,29.72,7.3a3.31,3.31,0,0,0-2.67,4.47,1.91,1.91,0,0,1,.17,1.38c-.92,1.73-1.93,3.42-3,5.08a7.91,7.91,0,0,1-1.35,1.24,16.75,16.75,0,0,1-.33-2.19c0-2.29,0-4.58.14-6.87A2.38,2.38,0,0,0,21.15,7.9a2.2,2.2,0,0,0-2.94.44,36.28,36.28,0,0,0-2.6,4.27A10.26,10.26,0,0,0,15,14.29a29,29,0,0,1-.26-5.13c.05-1.49-1.09-1.46-2-1.56-1.11-.12-.78.82-.79,1.39,0,3.46-.05,6.92-.05,10.38A6.61,6.61,0,0,0,12,21a1.43,1.43,0,0,0,1.9,1c.41-.1.83-.74,1-1.22.75-2.3,1.29-4.68,2.13-6.94a25.24,25.24,0,0,1,2.18-3.79,26.79,26.79,0,0,1,.28,4.28,43.49,43.49,0,0,0,.25,5.72c.32,2.1,2,2.66,3.58,1.27a15.66,15.66,0,0,0,2.52-3c1-1.48,1.89-3,3-4.8a36.63,36.63,0,0,1,2.69,3.13,2.08,2.08,0,0,1-.26,2.83c-.85.78-1.69.23-2.4-.32-1-.75-1.61-.47-2.14.5s0,1.53.88,1.91a6.75,6.75,0,0,0,8-2.08c.56-.73,1-1.54,1.61-2.42.54,2,.71,4.27,3.12,4.82,2.57.59,3.21-1.78,4.43-3.34.67,1.85,1.59,3.29,3.62,3.45s3.25-1.09,4.42-2.62c.53,1.57,1.47,2.73,3,2.54C56.9,21.8,58,20.91,59.2,20.3c1.94,2.39,3.5,2.44,7,.05a3.46,3.46,0,0,1-.71,1.51c-1.61,1.76-3.5,3.3-4.84,5.24-1.72,2.5-.08,5.28,3,5.47a4.43,4.43,0,0,0,4.62-3.35,46.18,46.18,0,0,0,.74-7.06,5.16,5.16,0,0,1,.86-2.69,51.6,51.6,0,0,0,4-7c.67-1.5,1.5-1.63,2.93-1.38a9.87,9.87,0,0,0-.29,1.68,50.41,50.41,0,0,0,.21,6.51A3.35,3.35,0,0,0,79.61,22c1.47.28,2.38-.56,3.17-1.64.06-.09.19-.13.29-.2,2.48,2.77,4.21,2.62,7.47-.61,1.61,3.09,3.35,3.34,5.94.8a1.22,1.22,0,0,1,.12.37c.07,1.49,1.24,1.28,2.17,1.36,1.09.08,1.28-.61,1.29-1.53a27.59,27.59,0,0,1,.25-3.64,12.59,12.59,0,0,1,2-5.46,3.37,3.37,0,0,1,.22,1.12c.25,2.27.44,4.55.78,6.81a1.82,1.82,0,0,0,2.15,1.57c1.24-.09.92-1.07,1-1.81a22,22,0,0,1,2.1-7.83c.14,2.46.12,4.64.44,6.78a6.63,6.63,0,0,0,1.43,3.1,2.58,2.58,0,0,0,3.77.19c1.23-1.14,1.71-3.55.75-4.8"/>
              <path :class="fillColorClassInstagram" d="M89.76,11.64,90,12.87a3.79,3.79,0,0,0-.24-1.23"/>
              <path :class="fillColorClassInstagram" d="M6.1.09C2.8,1-.64,6.51.1,9.81A3.84,3.84,0,0,0,4,12.93,6.88,6.88,0,0,1,2.88,7.31,7.75,7.75,0,0,1,5.77,2.19c-.22,7.5.63,15-.33,22.69a14.12,14.12,0,0,0,2.14-1.76A7.72,7.72,0,0,0,9,18q.06-7.84.05-15.7A2.23,2.23,0,0,0,6.1.09"/>
            </svg>
          </div>
          <oneWaveInsta 
              token="IGQVJXT2pnU2U2VVFCS3ZAFUW5jbjZAfSVJUTDJZANFN6RW1lNFVmaWhreHo5dG10MWZAad1B1TkcwVkRMa3FBQjFMdGtYaGg2T05zV3pXYm4zSTluVklYbTVzcHFmTzJvWndUaGxEazdnd0YtMDRjSXcxWgZDZD"
              fields="media_url,media_type,caption,permalink"
              :mediatypes="['IMAGE']"
              :count="6"
          >
              <template v-slot:loading="props">
              <h1 v-if="props.loading" class="fancy-loading">
                  Loading, please wait...
              </h1>
              </template>

              <template v-slot:feeds="props">
              <div class="col col-unit-4 pad-lr-0-75 pad-resp-4-lr-0-5 pad-b-1-5 inline-block">
                <div class="col col-unit-12 instagram-post">
                  <a target="_blank" :href="props.feed.permalink"><img class="obj-fit-cover" :data-src="props.feed.media_url" v-lazy-load></a>
                </div>
              </div>
              </template>

              <template v-slot:error="props">
              <div class="fancy-alert">{{ props.error }}</div>
              </template>
          </oneWaveInsta>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import OneWaveInsta from '@/components/one-wave-insta'

export default {
  components: { OneWaveInsta },
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase
    }
  },
  computed: {
    isIndex: function(){
      return this.$route.name == 'index___de' || this.$route.name == 'index___en'
    },
    textColorClass: function(){
      return this.isIndex ? 'c-grey-1' : 'c-white'
    },
    textColorClass2: function(){
      return this.isIndex ? 'c-grey-1' : 'c-grey-4'
    },
    textColorClass3: function(){
      return this.isIndex ? 'c-grey-3' : 'c-grey-4'
    },
    fillColorClass: function(){
      return this.isIndex ? 'fill-yellow' : 'fill-blue'
    },
    fillColorClassSocial: function(){
      return this.isIndex ? 'fill-grey-3' : 'fill-grey-4'
    },
    fillColorClassInstagram: function(){
      return this.isIndex ? 'fill-grey-3' : 'fill-white'
    }
  }
}

</script>

<style>

</style>