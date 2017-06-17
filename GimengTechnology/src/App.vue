<template>
  <div id="app">
    <gt-header></gt-header>
    <gt-banner></gt-banner>
    <router-view></router-view>
    <gt-footer></gt-footer>
  </div>
</template>

<script>
import gtHeader from '@/components/Header';
import gtBanner from '@/components/Banner';
import gtFooter from '@/components/Footer';

export default {
  name: 'app',
  components: {
    gtHeader,
    gtBanner,
    gtFooter,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
