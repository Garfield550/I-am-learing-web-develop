<template lang="pug">
  .bh-tutor
    .bh-tutor-nav
      ul
        li.bh-nav-title 古琴研习
        li
          router-link.bh-nav.link(to="/lesson") 琴课
        li
          router-link.bh-nav.link(to="/tutor") 琴师
    ul.bh-tutor-title
      li 张子盛（顾问指导）
      li 赵梓皓
      li 丁国秀
      li 张杰
    .bh-tutor-content
      .bh-content-pic.pic-zzs
      .bh-content-main
        p.bh-main-title 张子盛
          span 顾问指导
        .bh-main-text
          p 著名古琴演奏家、教育家，现任中国民族器乐学会副秘书长、中国古琴学会秘书长、天津琴院院长。古琴开蒙自津门已故九嶷派琴家高仲钧先生，后又受到刘丽、吴文光、龚一、李祥霆等诸多名家悉心指教，并请益于梅曰强、李允中等琴界前辈。
          p 1999创办了国内首家职业琴馆---张子盛古琴艺术中心，现已在全国各地开设分馆。著作《琴学门径》，已成为畅销多年的古琴普及教材，在古琴教育方面影响深远。张子盛老师定期莅临北海琴社，为学员带来公益讲座及免费辅导等福利。
          img(src="../assets/img/bh-tutor-zzs-big.png")
    .bh-tutor-content
      .bh-content-pic.pic-zzh
      .bh-content-main
        p.bh-main-title 赵梓皓
          span
        .bh-main-text
          p 古琴青年演奏家，北海琴社社長，师从于张子盛先生，为其入室弟子。在继承学习九嶷琴派演奏特点的基础上，同时研修诸城琴曲。演奏风格沉稳内敛，运指华美自如，内透诸城风骨，善弹《秋鸿》《捣衣》等传统大曲，亦精于《三峡船歌》《胜利操》等当代新作。
          p 现任中国民族器乐学会理事、诸城派古琴艺术中心常务副主任、中国古琴学会教师、天津琴院教师、潍坊市音乐家协会古琴专业委员会副会长等职务。曾获中国民族器乐艺术节古琴职业青年组金奖、全国古琴中级师资认证，应邀参加各地大型古琴音乐会几十余场。
          img(src="../assets/img/bh-tutor-zzh-big.png")
    .bh-tutor-content
      .bh-content-pic.pic-dgx
      .bh-content-main
        p.bh-main-title 丁国秀
          span
        .bh-main-text
          p 师从赵梓皓，中国古琴学会会员，优秀指导老师，北海琴社、昌乐营陵琴社教师。
          img(src="../assets/img/bh-tutor-dgx-big.png")
    .bh-tutor-content
      .bh-content-pic.pic-zzh
      .bh-content-main
        p.bh-main-title 张杰
          span
        .bh-main-text
          p 师从赵梓皓，中国古琴学会会员，优秀指导老师，北海琴社教师。
          img(src="../assets/img/bh-tutor-zj-big.png")
</template>

<script>
export default {
  name: 'bhTutor',
};
</script>

<style lang="scss">
  .bh-tutor {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 140px;

    .bh-tutor-nav {
      margin-top: 40px;
      margin-bottom: 40px;

      ul {
        list-style-type: none;
        padding: 0;
      }

      ul::after {
        content: "";
        display: block;
        clear: both;
      }

      ul li {
        float: left;
        margin-right: 60px;
        font-size: 18px;
      }

      .bh-nav-title {
        font-weight: bold;
        font-size: 20px;
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

    .bh-tutor-title {
      list-style-type: none;
      margin: 0;
      padding: 10px 20px;
      background-color: #e9e9e9;
      float: right;
      margin-bottom: 40px;

      li {
        float: left;
        margin-right: 20px;
      }

      li:first-child {
        margin-left: 40px;
      }

      li:last-child {
        margin-right: 0;
      }

      li::after {
        content: "|";
        display: inline;
        margin-left: 15px;
      }

      li:last-child::after {
        content: "";
        margin-left: 0;
      }
    }

    .bh-tutor-title::after {
      content: "";
      clear: both;
      display: block;
    }

    .bh-tutor-content {
      width: 870px;
      margin-left: auto;
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;

      .bh-content-pic {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: 160px;
      }

      .bh-content-main {
        margin-top: 80px;
        display: flex;
        flex-flow: column nowrap;
        width: 660px;
        border-top: 1px solid #cc3333;
      }

      .bh-content-main .bh-main-title {
        font-size: 20px;
        font-weight: bold;
      }

      .bh-content-main .bh-main-title span {
        font-size: 16px;
        margin-left: 20px;
      }

      .bh-content-main .bh-main-text {
        font-size: 14px;
        line-height: 200%;
        text-indent: 2em;
        display: flex;
        flex-flow: column nowrap;
      }

      .bh-content-main .bh-main-text img {
        align-self: center;
      }

      .pic-zzs {
        background-image: url(../assets/img/bh-tutor-zzs.png);
      }

      .pic-zzh {
        background-image: url(../assets/img/bh-tutor-zzh.png);
      }

      .pic-dgx {
        background-image: url(../assets/img/bh-tutor-dgx.png);
      }
    }
  }
</style>
