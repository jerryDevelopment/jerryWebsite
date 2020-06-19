<template>
  <section class="container">
    <h1>{{ name }}</h1>
    <p>{{ text }}</p>
    <div class="c-frame">
      <div class="c-area c-area-unit-10 mar-b-unit-1 mar-t-unit-1">
        <div class="col col-100 pad-a-0-75">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-2.jpg'">
          </div>
        </div>
      </div>
      <div class="c-area c-area-unit-8 mar-b-unit-1">
        <div class="col col-50 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
        <div class="col col-50 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
      </div>
      <div class="c-area c-area-unit-8 mar-b-unit-1">
        <div class="col col-25 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
        <div class="col col-25 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
        <div class="col col-25 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
        <div class="col col-25 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
        <div class="col col-25 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
        <div class="col col-25 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
        <div class="col col-25 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
        <div class="col col-25 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
      </div>
      <div class="c-area c-area-unit-8 mar-b-unit-1">
        <div class="col col-50 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
        <div class="col col-50 pad-a-0-75 float-left">
          <div class="media-container">
            <img class="inline" :src="staticMediaSrcBase + 'images/placeholders/placeholder-3-4.jpg'">
          </div>
        </div>
      </div>
      <div class="c-area c-area-unit-4 mar-b-unit-1">
        <div class="col col-100 pad-a-0-75 float-left">
          <p class="text-s">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  asyncData ({ params }) {
    // return axios.get(process.env.restBaseEndpoint + 'front-page/')
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
      staticMediaSrcBase: process.env.staticMediaSrcBase
    }
  },
  created() {
  }
}

</script>

<style>

</style>
