<template>
  <router-view/>
</template>

<style lang="scss">
@import "../src/styles/main";
@import "./assets/fonts/font/stylesheet.css";
</style>
<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'App',
    data () {
      return {
        scrolled: null
      };
    },
    methods: {
      ...mapMutations(['setScroll']),
      handleScroll () {
        this.scrolled = window.scrollY
        this.setScroll(this.scrolled)
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
      this.setScroll(window.scrollY)
    }
  }
</script>
