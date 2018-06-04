<template>
  <section class="container">
    <h1>{{ name }}</h1>
    <p>{{ text }}</p>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  components: {  },
  asyncData ({ params }) {
    // return axios.get('http://localhost/playground/nuxtjs/rest-api/front-page/')
    // .then((res) => {
      // return { 
      //   name: res.data.name,
      //   text: res.data.text
      // }
    // })
    // .catch((e) => {
    //   error({ statusCode: 404, message: 'Post not found' })
    // })
      return { 
        name: 'Home',
        text: 'This is the home page.'
      }

  }
}

</script>

<style>

</style>
