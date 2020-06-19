<template>
  <section class="container">
    <h1>{{ name }}</h1>
    <p>{{ text }}</p>
    <vue-flickity ref="flickity">
      <div class="carousel-cell">1</div>
      <div class="carousel-cell">2</div>
      <div class="carousel-cell">3</div>
      <div class="carousel-cell">4</div>
      <div class="carousel-cell">5</div>
    </vue-flickity>
    <div v-packery='{itemSelector: ".packery-item", percentPosition: true}'>
        <div v-packery-item class='packery-item'>1</div>
        <div v-packery-item class='packery-item'>2</div>
        <div v-packery-item class='packery-item'>3</div>
    </div>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  components: {  },
  asyncData ({ params }) {
    // return axios.get(process.env.restBaseEndpoint + 'about-page/')
    // .then((res) => {
    //   return { 
    //     name: res.data.name, 
    //     text: res.data.text 
    //   }
    // })
    // .catch((e) => {
    //   error({ statusCode: 404, message: 'Post not found' })
    // })


  },
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
      name: 'test',
      text: 'test'
    }
  }
}

</script>

<style>

</style>
