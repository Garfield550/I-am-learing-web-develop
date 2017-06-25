<template lang="pug">
  .bh-event
    v-card
      v-card-row.bh-event-nav
        ul
          li(v-for="nav in navgation") {{ nav.name }}
    v-card.bh-event-card.mt-3
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
      v-card-row.bh-card-page
        v-pagination(:length.number="4" v-model="page")
</template>

<script>
import event01 from '../assets/bh-index-event-01.jpg';
import event02 from '../assets/bh-index-event-02.jpg';
import event03 from '../assets/bh-index-event-03.jpg';
import event04 from '../assets/bh-index-event-04.jpg';
import event05 from '../assets/bh-event-event-05.jpg';
import event06 from '../assets/bh-event-event-06.png';
import event07 from '../assets/bh-event-event-07.jpg';
import event08 from '../assets/bh-event-event-08.jpg';
import event09 from '../assets/bh-event-event-09.jpg';
import event10 from '../assets/bh-event-event-10.png';

export default {
  name: 'bhEvent',
  data() {
    return {
      navgation: [
        { name: '古琴雅集' },
        { name: '专题讲座' },
        { name: '音乐会' },
        { name: '艺术节' },
        { name: '琴人逸话' },
        { name: '琴社课程' },
      ],
      events: [
        { img: event01, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event02, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event03, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event04, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event05, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event06, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event07, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event08, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event09, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
        { img: event10, title: '北海琴社社长赵梓皓：听君抚琴，能醉天涯万里人', text: '“若言琴上有琴声，放在匣中何不鸣？若言声在指头上，何不于君指上听?"...' },
      ],
      page: 1,
    };
  },
};
</script>

<style lang="stylus">
  make-card-space(arg)
    padding arg
    box-sizing border-box
  .bh-event-card,
  .bh-event-nav
    make-card-space(10px)
    ul
      list-style-type none
      margin 0
      padding 0
      li
        margin-right 30px
        float left
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
    .bh-card-page
      clear both
      ul
        width 100%
        li
          margin-right 10px
</style>
