<template lang="pug">
  .bh-intro
    .bh-intro-nav
      ul
        li.bh-nav-title 琴社介绍
        li
          router-link.bh-nav.link(to="/intro") 关于古琴
        li
          router-link.bh-nav.link(to="/intro2") 关于琴社
    article.bh-intro-content
      h1 丝桐合为琴，中有太古声。
      p.bh-content-bold 古琴，又名七弦琴，是中国最古老的弹拨乐器，至今已有超过三千年的历史。
      p.bh-content-text 在中华文明发展的长河中，作为“琴棋书画”四艺之首的古琴，一直以来都享有极为崇高的地位，甚至被称为“君子之器”，成为文人、士大夫等阶层风雅生活不可或缺的一部分。
      p 古琴的音色沉郁而厚重，散音、泛音与极具特色的走手音（按音），千百年来拨动了无数人的心弦。一首首古老的琴曲，不仅是宝贵的音乐遗产，更有着丰富的历史人文意义。《高山流水》感人的知音之情、《凤求凰》所歌颂的的爱情、《广陵散》的魏晋风骨……在一代代琴人的指尖下流淌至今。
      p 古琴的造型优美而典雅，一张制作精美的琴，不仅是用来演奏的乐器，同时也是一件值得珍藏的艺术品。九霄环佩、一池波、玉壶冰、太古遗音……从这些富有意趣的名字中，便可以窥见历代琴人对古琴的热爱之情。
      p 2003年，古琴艺术被联合国教科文组织列入人类非物质文化遗产代表作名录，使古琴的艺术魅力得到了更为广泛的传播，同时也对古琴文化的保护、传承与发展提供了更广阔的平台。
      p 如今，古琴艺术已经焕发出新的生机，越来越多的人们开始欣赏与学习古琴，以此修身养性，在泠泠七弦之声中寻找心灵的宁静。
      .bh-content-img
        img(src="../assets/img/bh-intro-jpf.png")
        p 古琴特有的记谱法：减字谱
    .bh-intro-pic
      .bh-pic-guzheng
      .bh-pic-text 亦乐斋 陶运成制 混沌
</template>

<script>
export default {
  name: 'bhIntro',
};
</script>

<style lang="scss">
  .bh-intro {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;

    .bh-intro-nav {
      margin-top: 40px;
      margin-bottom: 60px;

      ul {
        list-style-type: none;
        padding: 0;
      }

      ul li {
        float: left;
        margin-right: 60px;
        font-size: 20px;
      }

      .bh-nav-title {
        font-weight: bold;
      }

      .bh-nav.link {
        text-decoration: none;
        color: inherit;
      }

      .router-link-exact-active {
        font-weight: bold;
      }

      .router-link-exact-active::before {
        content: "";
        background-image: url(../assets/img/icon.png);
        background-repeat: no-repeat;
        background-size: 15px 14px;
        width: 15px;
        height: 14px;
        margin-right: 10px;
        display: inline-block;
      }
    }

    .bh-intro-nav::after {
      content: "";
      display: block;
      clear: both;
    }

    .bh-intro-content {
      width: 600px;
      float: left;

      h1 {
        font-size: 18px;
      }

      p {
        line-height: 200%;
        text-indent: 2rem;
        font-size: 14px;
      }

      .bh-content-bold {
        font-weight: bold;
      }

      .bh-content-bold, .bh-content-text {
        text-indent: 0;
        width: 500px;
      }

      .bh-content-text {
        margin-bottom: 60px;
      }

      .bh-content-img {
        margin: 60px 0;
        width: 402px;
        text-align: center;
      }
    }

    .bh-intro-pic {
      float: right;
      display: flex;
      flex-flow: row nowrap;

      .bh-pic-guzheng {
        background-image: url(../assets/img/intro-hd.png);
        background-size: 76px 494px;
        background-repeat: no-repeat;
        width: 76px;
        height: 494px;
        margin-right: 20px;
      }

      .bh-pic-text {
        writing-mode: vertical-rl;
        text-align: center;
      }
    }
  }

  .bh-intro::after {
    content: "";
    display: block;
    clear: both;
  }
</style>
