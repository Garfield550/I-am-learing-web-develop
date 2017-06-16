<template lang="pug">
  .header
    router-link.logo(to="/")
    nav.nav-bar
      ul
        li(v-for="nav in navBars")
          router-link.link(:to="nav.navLink") {{ nav.navName }}
</template>

<script>
export default {
  name: 'gtHeader',
  data() {
    return {
      navBars: [
        { navName: '网站首页', navLink: '/' },
        { navName: '关于我们', navLink: '/about' },
        { navName: '公司新闻', navLink: '/news' },
        { navName: '服务案例', navLink: '/suport' },
        { navName: '招贤纳士', navLink: '/joinus' },
      ],
    };
  },
};
</script>

<style lang="scss">
$fonts-color: #182975 !default;

.header {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  > .logo {
    background-image: url(../assets/logo.png);
    background-repeat: no-repeat;
    width: 256px;
    height: 52px;
  }

  > .nav-bar {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    ul li {
      float: left;
      margin-right: 20px;
    }

    ul li:last-child {
      margin-right: 0;
    }

    ul li .link {
      box-sizing: border-box;
      border-bottom: 4px solid transparent;
      width: 130px;
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 24px;
      color: $fonts-color;
    }

    ul li .link:hover, ul li .router-link-exact-active {
      border-bottom: 4px solid $fonts-color;
    }
  }
}

@media screen and (min-width: 1000px) and (max-width: 1366px - 1) {
  .header {
    > .nav-bar {
      ul li .link {
        width: 100px;
        font-size: 20px;
      }
    }
  }
}
</style>
