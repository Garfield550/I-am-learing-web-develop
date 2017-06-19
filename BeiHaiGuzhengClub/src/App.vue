<template>
  <div id="app">
    <bh-header></bh-header>
    <router-view></router-view>
  </div>
</template>

<script>
import bhHeader from '@/components/Header';

export default {
  name: 'app',
  components: {
    bhHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, STSong, NSimSun, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666666;
}
</style>
