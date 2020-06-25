<template>
  <section class="container">
    <split-screen></split-screen>
  </section>
</template>

<script>

import SplitScreen from '@/components/split-screen'

export default {
  transition: 'fade',
  components: { SplitScreen },
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
    }
  },
  created() {
  }
}

</script>

<style>

</style>
