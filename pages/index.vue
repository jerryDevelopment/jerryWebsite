<template>
  <section class="container">
    <split-screen></split-screen>
      <vue-instagram token="6810925241.807e101.95fb98a717a34a9383cbaa4c048eeb04" :count="8">
        <template slot="feeds" slot-scope="props">
          <li class="fancy-list"><img :src="props.feed.images.standard_resolution.url"></li>
        </template>
        <template slot="error" slot-scope="props">
          <div class="fancy-alert"> {{ props.error.error_message }} </div>
        </template>
      </vue-instagram>
      <div v-html="frontPage"></div>
  </section>
</template>

<script>

import frontPage from '../content/front-page.md'
import SplitScreen from '@/components/split-screen'

export default {
  transition: 'fade',
  components: { SplitScreen },
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
    }
  },
  computed: {
    frontPage() {
      return frontPage
    }
  },
  created() {
  }
}

</script>

<style>

</style>
