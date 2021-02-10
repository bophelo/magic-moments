<template>
  <div>
    <AppNav />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
export default {
  components: {
    AppNav,
    AppFooter,
  },
}
</script>

<style>
@import url('https://rsms.me/inter/inter.css');
html {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: 'Inter var', sans-serif;
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
