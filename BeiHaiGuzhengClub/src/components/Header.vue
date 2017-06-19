<template lang="pug">
  .bh-header
    .bh-header-wapper
      .bh-header-logo
      nav.bh-header-nav
        ul
          li(v-for="nav in bhHeaderNav")
            router-link.bh-header-navlink(:to="nav.link") {{ nav.name }}
    hr
</template>

<script>
export default {
  name: 'bhHeader',
  data() {
    return {
      bhHeaderNav: [
        { name: '首页', link: '/' },
        { name: '琴社介绍', link: '#' },
        { name: '古琴研习', link: '#' },
        { name: '古琴欣赏', link: '#' },
        { name: '琴社活动', link: '#' },
        { name: '联系我们', link: '#' },
      ],
    };
  },
};
</script>

<style lang="scss">
  .bh-header {
    width: 100%;
    
    .bh-header-wapper {
      width: 1000px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: flex-end;
      box-sizing: border-box;

      .bh-header-logo {
        background-image: url(../assets/img/logo.png);
        background-size: 37px 123px;
        background-repeat: no-repeat;
        width: 37px;
        height: 123px;
        margin-left: 40px;
      }

      .bh-header-nav {

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        ul li {
          float: left;
          margin-right: 40px;
        }

        ul li:last-child {
          margin-right: 0;
        }

        ul li .bh-header-navlink {
          text-decoration: none;
          color: inherit;
        }

        ul li .router-link-exact-active {
          font-weight: bold;
        }
      }
    }
  }
</style>
