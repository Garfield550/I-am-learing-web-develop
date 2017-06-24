<template lang="pug">
  .bh-index
    v-card
      swiper.bh-index-swiper
        swiper-slide.imgs.img1
        swiper-slide.imgs.img2
        swiper-slide.imgs.img3
        .swiper-pagination(slot="pagination")
        .swiper-button-prev(slot="button-prev")
        .swiper-button-next(slot="button-next")
    v-card.bh-index-card.mt-3
      v-card-row
        v-card-title 最新活动
      hr
      v-card-row(v-for="event in events" :key="event.title")
        .bh-event-column
          .bh-image-case
            img(:src="event.img")
          .bh-event-content
            p.bh-event-title {{ event.title }}
            p.bh-event-text {{ event.text }}
    v-card.bh-index-card.mt-3
      v-card-row
        v-card-title 北海琴社
      hr
      v-card-row
        .bh-club-column
          .bh-club-img
            img(src="../assets/bh-index-club-01.jpg")
          p.bh-club-content 北海琴社成立于2012年，在北京和潍坊开设了多个分馆，是潍坊首家专业教授古琴演奏的琴馆。亦是北京古琴学会理事单位之一，并被中国民族器乐学会和潍坊市委宣传部批准为“诸城派古琴艺术中心”及“潍坊市古琴传习中心”。
    v-card.bh-index-card.mt-3
      v-card-row
        v-card-title 北海琴社
        p.bh-people-title
          |  北海琴社社长|古琴青年演奏家
          br
          span  中国民族器乐学会理事
      hr
      v-card-row
        .bh-people-column
          .bh-people-img
            img(src="../assets/bh-index-people-01.jpg")
          p.bh-people-content 师从于着名古琴演奏家张子盛先生。演奏风格沉稳内敛，运指华美自如，内透诸城风骨。现任中国民族器乐学会理事、中国古琴学会理事兼办公室副主任、中国民族器乐学会诸城派古琴艺术中心常务副主任，北京经贸研修学院客座教授、潍坊市非物质文化遗产古琴艺术代表性传承人。
</template>

<script>
import event01 from '../assets/bh-index-event-01.jpg';
import event02 from '../assets/bh-index-event-02.jpg';
import event03 from '../assets/bh-index-event-03.jpg';
import event04 from '../assets/bh-index-event-04.jpg';

export default {
  name: 'bhIndex',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        loop: true,
        autoHeight: true,
      },
      events: [
        { img: event01, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event02, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event03, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event04, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
      ],
    };
  },
};
</script>

<style lang="stylus">
  make-card-space(arg)
    padding arg
    box-sizing border-box

  .bh-index
    .bh-index-swiper
      margin 0 10px
      padding 10px 0
      box-sizing border-box
      .imgs
        background-repeat no-repeat
        background-size cover
        background-position center
        height 300px
      .img1
        background-image url(../assets/bh-index-swiper-01.jpg)
      .img2
        background-image url(../assets/bh-index-swiper-02.jpg)
      .img3
        background-image url(../assets/bh-index-swiper-03.jpg)
    .bh-index-card
      make-card-space(10px)
      .bh-event-column
        display flex
        flex-flow row nowrap
        align-items center
        padding 10px
        border-bottom 3px solid #eee
        .bh-image-case
          min-width 108px
          min-height 84px
          margin-right 10px
          img
            width 108px
            height 84px
            border 1px solid gray
        .bh-event-content
          .bh-event-title
            font-weight bold
          .bh-event-text
            margin-bottom 0
      .bh-club-column
        .bh-club-img
          make-card-space(10px)
          float left
          img
            margin-right 10px
        .bh-club-content
          font-size 14px
      .bh-club-column::after
        content ""
        display block
        clear both
      .bh-people-title
        float right
      .bh-people-column
        .bh-people-img
          float right
          make-card-space(10px)
          width 160px
            img
              width 160px
</style>
