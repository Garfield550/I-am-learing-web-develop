<template>
  <div id="app">
    <gt-header></gt-header>
    <gt-banner></gt-banner>
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import gtHeader from '@/components/Header';
import gtBanner from '@/components/Banner';

export default {
  name: 'app',
  components: {
    gtHeader,
    gtBanner,
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

.router-view {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
