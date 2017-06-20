<template lang="pug">
  .bh-intro
    .bh-intro-nav
      ul
        li.bh-nav-title 琴社介绍
        li
          router-link.bh-nav.link(to="/intro") 关于古琴
        li
          router-link.bh-nav.link(to="/intro2") 关于琴社
    article.bh-intro2-content2
      .bh-content2-title
        h1 北海琴社——潍坊首家职业古琴馆
        img(src="../assets/img/bh-intro2-club.png")
      .bh-content2-main
        p 北海琴社成立于2012年，因潍坊古称北海而得名，是潍坊首家专业教授古琴演奏的琴馆，也是张子盛古琴艺术中心的分馆之一，同时亦是中国民族器乐学会诸城派古琴艺术中心所在地。琴社以弘扬中国古典文化，传播古琴艺术为本，使学员在掌握古琴演奏技巧的同时，于博大精深的传统文化中品味古趣，提高修养，陶冶性情。
        p 琴社立足于潍坊，现已在多地开设分支机构，并于潍坊市各区设置教学点，便于各地琴友知音学习交流。琴社成立至今，已受到潍坊电视台、潍坊电台、《潍坊日报》及《潍坊文化》等多家媒体的专访及专题报道。
        p 今天，繁忙的现代生活总是让我们满心疲倦，却又无处释怀。此时，来琴社抚一首古曲，或是聆听一曲他人的演奏，在那些穿越千年的琴曲中，暂时忘却烦恼，倾听自己内心深处的共鸣。苏轼曾这样描写古琴：神闲意定，万籁收声天地静。来吧，在这喧嚣的都市中，让我们一同体验古人的慢生活吧。
        .bh-content2-pic
          img(src="../assets/img/bh-intro2-qsyj1.png")
          img(src="../assets/img/bh-intro2-qsyj2.png")
</template>

<script>
export default {
  name: 'bhIntro2',
};
</script>

<style lang="scss">
  .bh-intro {

    .bh-intro2-content2 {

      .bh-content2-title {
        text-align: center;
      }

      .bh-content2-title h1 {
        font-size: 18px;
      }

      .bh-content2-title img {
        margin-bottom: 40px;
      }

      .bh-content2-main {
        width: 780px;
        margin-left: auto;
        margin-right: auto;
      }

      .bh-content2-main p {
        font-size: 14px;
        line-height: 200%;
        text-indent: 2rem;
      }

      .bh-content2-main .bh-content2-pic {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      }

      .bh-content2-main .bh-content2-pic img {
        margin-top: 60px;
        display: block;
      }
    }
  }
</style>
