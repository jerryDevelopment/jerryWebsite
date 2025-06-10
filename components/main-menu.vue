<template>
  <div :class="'screen bg-black-trans' + ( !$store.state.mainMenuActiveState ? ' top-out' : '' ) + ' main-menu ' + ( isIndex ? ' main-menu-index' : ' main-menu-digital' )" style="z-index: 3;" v-if="isNotLegal">
    <div class="cor-tr">
      <ul class="pad-lr-2 pad-tb-7 align-right">
        <li @click="closeMenu();" v-scroll-to="'#why'" class="menu-link text-menu mar-b-0-25 c-white pointer" v-html="navigationCurrentLanguage.menuLinks.about"></li>
        <ul>
          <li @click="closeMenu();" v-scroll-to="'#why'" class="menu-link text-m mar-b-0-25 c-white pointer" v-html="isIndex ? navigationCurrentLanguage.menuLinks.whoJerry : navigationCurrentLanguage.menuLinks.whoJerryDigital"></li>
          <li @click="closeMenu();" v-scroll-to="'#why'" class="menu-link text-m mar-b-0-25 c-white pointer" v-html="isIndex ? navigationCurrentLanguage.menuLinks.whyJerry : navigationCurrentLanguage.menuLinks.whyJerryDigital"></li>
          <li @click="closeMenu();" v-scroll-to="'#how'" class="menu-link text-m mar-b-0-25 c-white pointer" v-html="isIndex ? navigationCurrentLanguage.menuLinks.howJerry : navigationCurrentLanguage.menuLinks.howJerryDigital"></li>
          <li @click="closeMenu();" v-scroll-to="'#what'" class="menu-link text-m mar-b-0-5 c-white pointer" v-html="isIndex ? navigationCurrentLanguage.menuLinks.whatJerry : navigationCurrentLanguage.menuLinks.whatJerryDigital"></li>
        </ul>
        <li @click="closeMenu();" class="menu-link text-menu mar-b-0-25 c-white pointer" v-if="isIndex">
          <nuxt-link :to="localePath('digital')" v-html="navigation.menuLinks.jerryDigital"></nuxt-link>
        </li>
        <li @click="closeMenu();" v-scroll-to="'#references'" class="menu-link text-menu mar-b-0-25 c-white pointer" v-html="navigationCurrentLanguage.menuLinks.references" v-if="isIndex"></li>
        <li @click="closeMenu();" v-scroll-to="'#show-cases'" class="menu-link text-menu mar-b-0-25 c-white pointer" v-html="navigation.menuLinks.showCases" v-if="!isIndex"></li>
        <li @click="closeMenu();" class="menu-link text-menu mar-b-0-25 c-white pointer" v-if="!isIndex">
          <nuxt-link :to="localePath('index')" v-html="navigation.menuLinks.jerryConsulting"></nuxt-link>
        </li>
        <li class="menu-link text-menu mar-b-0-25 c-white pointer" v-if="!isIndex"><a href="https://xrupgrade.digital/" target="blank_" v-html="navigation.menuLinks.xrupgrade"></a></li>
        <li @click="closeMenu();" v-scroll-to="'#contact'" class="menu-link text-menu mar-b-0-25 c-white pointer" v-html="navigationCurrentLanguage.menuLinks.contact"></li>
        <li class="mar-t-5">
          <a :href="navigation.socialLinks.facebook"><svg class="social-icon mar-l-0-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path class="fill-white" d="M27.78,0H2.21A2.19,2.19,0,0,0,0,2.16V27.84A2.19,2.19,0,0,0,2.21,30H16.08V18.43H12.19V13.91h3.89V10.58c0-3.86,2.35-6,5.79-6a30.37,30.37,0,0,1,3.48.18v4H23c-1.87,0-2.24.89-2.24,2.2v2.88h4.48l-.58,4.52h-3.9V30h7A2.19,2.19,0,0,0,30,27.84V2.16A2.19,2.19,0,0,0,27.78,0Z"/>
          </svg></a>
          <a :href="navigation.socialLinks.instagram"><svg class="social-icon mar-l-0-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path class="fill-white" d="M27.34,21.72a5.62,5.62,0,0,1-5.62,5.62H8.28a5.62,5.62,0,0,1-5.62-5.62V8.28A5.62,5.62,0,0,1,8.28,2.66H21.72a5.62,5.62,0,0,1,5.62,5.62ZM21.72,0H8.28A8.28,8.28,0,0,0,0,8.28V21.72A8.28,8.28,0,0,0,8.28,30H21.72A8.29,8.29,0,0,0,30,21.72V8.28A8.28,8.28,0,0,0,21.72,0"/>
            <path class="fill-white" d="M15,20.07A5.07,5.07,0,1,1,20.07,15,5.08,5.08,0,0,1,15,20.07m0-12.8A7.73,7.73,0,1,0,22.73,15,7.74,7.74,0,0,0,15,7.27"/>
            <path class="fill-white" d="M23.06,5a2,2,0,1,0,1.37.57A2,2,0,0,0,23.06,5"/>
          </svg></a>
          <a :href="navigation.socialLinks.linkedIn"><svg class="social-icon mar-l-0-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path class="fill-white" d="M25.56,25.56H21.12v-7c0-1.66,0-3.8-2.32-3.8s-2.66,1.81-2.66,3.68v7.08H11.69V11.25H16V13.2H16a4.68,4.68,0,0,1,4.21-2.31c4.5,0,5.33,3,5.33,6.82ZM6.67,9.29A2.58,2.58,0,1,1,9.25,6.71,2.59,2.59,0,0,1,6.67,9.29h0M8.9,25.56H4.45V11.25H8.9ZM27.78,0H2.21A2.19,2.19,0,0,0,0,2.16V27.84A2.19,2.19,0,0,0,2.21,30H27.78A2.19,2.19,0,0,0,30,27.84V2.16A2.19,2.19,0,0,0,27.78,0"/>
          </svg></a>
        </li>
      </ul>     
    </div>
    <div class="cor-br">
      <ul class="pad-a-2">
        <li @click="closeMenu()" class="text-m c-white pointer"><nuxt-link class="lang-link" :to="localeDeLinkOptions">de</nuxt-link> | <nuxt-link class="lang-link" :to="localeEnLinkOptions">en</nuxt-link></li>
      </ul>
    </div>

  </div>
</template>

<script>


export default {
  computed: {
    isIndex: function(){
      if (!this.$route.name) return true
      return this.$route.name == 'index___de' || this.$route.name == 'index___en'
    },
    isNotLegal: function() {
      if (!this.$route.name) return true
      return this.$route.name != 'imprint___de' && this.$route.name != 'imprint___en' && this.$route.name != 'privacy-policy___de' && this.$route.name != 'privacy-policy___en'
    },
    localeDeLinkOptions: function(){
      if (!this.$route.name) return { name: 'index___de' }

      let localeDeLinkOptions = {
        name: (this.$route.name.split('___')[0] + '___de')
      }

      return localeDeLinkOptions
    },
    localeEnLinkOptions: function(){
      if (!this.$route.name) return { name: 'index___en' }

      let localeEnLinkOptions = {
        name: (this.$route.name.split('___')[0] + '___en')
      }

      return localeEnLinkOptions
    }
  },  
  methods: {
    closeMenu() {
      this.$store.commit('deactivateMainMenu')
    },
    changeSplitScreen(type) {
      $nuxt.$emit('changeSplitScreen', type)
    }
  },
}

</script>

<style>
  .main-menu {
    transition: transform .5s;
  }
</style>