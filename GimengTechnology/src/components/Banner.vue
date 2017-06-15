<template lang="pug">
  .wapper
    .banner
      .slogan
        p.t1 {{ slogan1 }}
        h1 {{ slogan2 }}
        p.t2 {{ slogan3 }}
        p.t3 {{ slogan4 }}
      .monitors
</template>

<script>
export default {
  name: 'gtBanner',
  data() {
    return {
      slogan1: '还在花大钱定制微网站和PC站吗? 你已经OUT了!',
      slogan2: '一个后台，多个终端',
      slogan3: '"三个平台" 同步信息!',
      slogan4: '简单几步，即可拥有三站合一!',
    };
  },
};
</script>

<style lang="scss" scoped>
  .wapper {
    width: 100%;
    background: linear-gradient(135deg, #182975, #9D1BB2);
  }

  .banner {
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    > .slogan {
      color: #FFF;
      padding-top: 40px;
      padding-bottom: 40px;

      h1 {
        font-size: 60px;
      }
      .t1, .t2, .t3 {
        font-family: 'Avenir', Helvetica, Arial, "YouYuan", sans-serif;
      }

      .t2 {
        padding-left: 40px;
        font-size: 24px;
      }
    }

    > .monitors {
      background-image: url(../assets/monitors.png);
      background-repeat: no-repeat;
      width: 581px;
      height: 272px;
    }
  }

  @media screen and (min-width: 1000px) and (max-width: 1366px - 1) {
    .banner {
      > .slogan {
        h1 {
          font-size: 36px;
        }

        .t2 {
          font-size: 20px;
        }
      }
    }
  }
</style>
