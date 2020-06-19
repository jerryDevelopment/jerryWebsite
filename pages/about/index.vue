<template>
  <section class="container">
    <h1>{{ name }}</h1>
    <p>{{ text }}</p>
    <vue-flickity ref="flickity" :options="flickityOptions">
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

export default {
  transition: 'fade',
  data() {
    return {
      staticMediaSrcBase: process.env.staticMediaSrcBase,
      name: 'test',
      text: 'test',
      flickityOptions: {
        wrapAround: true
      }
    }
  }
}

</script>

<style>

vue-flickity { display: block; }

.carousel-cell {
  width: 100vw;
}

</style>
