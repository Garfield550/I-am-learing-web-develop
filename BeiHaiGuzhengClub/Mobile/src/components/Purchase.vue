<template lang="pug">
  .bh-purchase
    v-card.bh-purchase-card
      v-card-row
        span 古琴欣赏
    v-card.bh-purchase-card.mt-3
      v-card-row
        v-card-title 寻琴记
      v-card-row
        v-card-column
          p 拥有一张属于自己的琴，是每个古琴初学者的愿望。然而，就像寻找心上人一样，遇到一张真正适合自己的琴，却并不是一件容易的事。
          p 每一张古琴，都是一件独一无二的，有着生命力的艺术品，她们有着优美的线条，灵动的身姿和令人沉迷的声音。众里寻琴千百度，哪一张会让你一见倾心？哪一张又会令你蓦然回首呢？
          p 做决定之前，不妨先好好欣赏一番古琴最本真的美。在此，我们精选了多位斫琴家不同样式的作品，可不要挑花了眼哦！
    v-card.bh-purchase-card.mt-3
      v-card-row
        .bh-purchase-case
          img(src="../assets/bh-purchase-lx.png")
          span 陶运成 落霞
        .bh-purchase-case
          img(src="../assets/bh-purchase-lzh.png")
          span 罗苏里 正和
        .bh-purchase-case
          img(src="../assets/bh-purchase-lz.png")
          span 田泉 连珠
      v-card-row
        .bh-purchase-case
          img(src="../assets/bh-purchase-jy.png")
          span 唐人御工坊 蕉叶
        .bh-purchase-case
          img(src="../assets/bh-purchase-zn.png")
          span 李朝阳 仲尼
        .bh-purchase-case
          img(src="../assets/bh-purchase-qq.png")
          span 天津琴院 秦琴
      v-card-row
        .bh-purchase-case
          img(src="../assets/bh-purchase-hmqy.png")
          span 范书生 鹤鸣秋月
        .bh-purchase-case
          img(src="../assets/bh-purchase-sh.png")
          span 七星琴堂 神晖
        .bh-purchase-case
          img(src="../assets/bh-purchase-sn.png")
          span 刘永发 神农
      v-card-row
        .bh-purchase-case
          img(src="../assets/bh-purchase-zh.png")
          span 叶遇仍 正和
</template>

<script>
export default {
  name: 'bhPurchase',
};
</script>

<style lang="stylus">
  make-card-space(arg)
    padding arg
    box-sizing border-box

  .bh-purchase
    .bh-purchase-card
      make-card-space(10px)
      .bh-purchase-case
        display flex
        flex-flow column nowrap
        align-items center
        img
          width 50%
          height 50%
</style>
