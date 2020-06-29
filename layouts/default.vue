<template>
  <div>
  	<main-navigation></main-navigation>
    <nuxt/>
    <CookieControl locale="de"/>
  </div>
</template>

<script>

import MainNavigation from '@/components/main-navigation'

export default {
  components: { MainNavigation }
}

</script>

<style>
</style>
