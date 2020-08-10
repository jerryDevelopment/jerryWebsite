<template>
  <div>
    <main-menu></main-menu>
    <main-interface></main-interface>
    <split-screen v-if="isIndexOrDigital"></split-screen>

    <nuxt/>
    <CookieControl :locale="$i18n.locale"/>
    <pop-up></pop-up>
  </div>
</template>

<script>

import MainMenu from '@/components/main-menu'
import MainInterface from '@/components/main-interface'
import SplitScreen from '@/components/split-screen'
import PopUp from '@/components/pop-up'

export default {
  components: { MainMenu, MainInterface, SplitScreen, PopUp },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { 'http-equiv': 'content-Language', content: this.$i18n.locale }
      ]
    }
  },
  computed: {
    isIndexOrDigital: function() {
      return this.$route.name == 'index___de' || this.$route.name == 'index___en' || this.$route.name == 'digital___de' || this.$route.name == 'digital___en'
    }
  }
}

</script>

<style>
</style>
