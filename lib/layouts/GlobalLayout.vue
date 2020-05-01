<template>
  <div id="vuepress-theme-meteorlxy">
    <TheHeader />

    <TheMain />

    <TheFooter />
    <!-- <ClientOnly>
      <TheCookie />
    </ClientOnly>-->
  </div>
</template>

<script>

import '@mdi/font/css/materialdesignicons.css'
import twemoji from 'twemoji'
import Vue from 'vue'
import TheHeader from '@theme/components/TheHeader.vue'
// import CookieLaw from 'vue-cookie-law'
import TheMain from '@theme/components/TheMain.vue'
import TheFooter from '@theme/components/TheFooter.vue'
// import ClientOnly from 'vue-client-only'
// import TheCookie from '@theme/components/TheCookie.vue'

// Vue.component('cookie-law', CookieLaw)

Vue.directive('twemoji', {
  inserted (el) {
    el.innerHTML = twemoji.parse(el.innerHTML)
  },
})

export default {
  name: 'ThemeMeteorlxy',

  components: {
    TheHeader,
    TheMain,
    TheFooter,
    // TheCookie,
    // ClientOnly,
  },
}
</script>

<style lang="stylus" src="@theme/styles/index.styl" />
