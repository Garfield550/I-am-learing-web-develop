<template lang="pug">
  v-app
    v-navigation-drawer(persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer")
      v-list
        .bh-list-title 导航
        v-list-item(v-for="(item, i) in items" :key="i")
          v-list-tile(value="true" :to="item.to")
            v-list-tile-action
              v-icon(light v-html="item.icon")
            v-list-tile-content
              v-list-tile-title(v-text="item.title")
    v-toolbar
      v-toolbar-side-icon(@click.native.stop="drawer = !drawer" light)
      v-toolbar-title.bh-app-title(v-text="title")
      v-spacer
    main
      v-container(fluid)
        v-slide-y-transition(mode="out-in")
          router-view
    v-footer(:fixed="fixed")
      span &copy; 2017 北海琴社
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { to: '/', icon: '', title: '首页' },
          { to: '/#/intro', icon: '', title: '琴社介绍' },
          { to: '/', icon: '', title: '古琴研习' },
          { to: '/#/purchase', icon: '', title: '古琴欣赏' },
          { to: '/#/event', icon: '', title: '琴社活动' },
          { to: '/#/contact', icon: '', title: '联系我们' },
        ],
        miniVariant: false,
        title: '北海琴社',
      };
    },
  };
</script>

<style lang="stylus">
  @import './stylus/main'

  main
    background-color #efeff4

  .bh-app-title
    color #FFFFFF !important
    font-weight bold

  .bh-list-title
    font-size 24px
    color #FFFFFF
    text-align right
    margin-right 40px
    margin-left 40px
    padding-top 20px
    padding-bottom 20px
    border-bottom 1px solid #FFF
</style>
