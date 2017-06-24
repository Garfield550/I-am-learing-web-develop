<template lang="pug">
  .bh-intro
    v-card.bh-intro-nav
      v-card-row
        span 关于古琴
        span 关于琴社
    v-card.bh-intro-article.mt-3
      v-card-row
        v-card-column
          .bh-article-wapper
            p.bh-article-title 丝桐合为琴，中有太古声。
            p.bh-article-title 古琴， 又名七弦琴，是中国最古老的弹拨乐器，至今已有超过三千年的历史。
            p.bh-article-content 在中华文明发展的长河中，作为“琴棋书画”四艺之首的古琴，一直以来都享有极为崇高的地位，甚至被称为“君子之器”，成为文人 、士大夫等阶层风雅生活不可或缺的一部分。
            p.bh-article-content 古琴的音色沉郁而厚重，散音、泛音与极具特色的走手音（按音），千百年来拨动了无数人的心弦。一首首古老的琴曲，不仅是宝贵的音乐遗产，更有着丰富的历史人文意义。《高山流水》感人的知音之情、《凤求凰》所歌颂的的爱情、《广陵散》的魏晋风骨……在一代代琴人的指尖下流淌至今。
            p.bh-article-content 古琴的造型优美而典雅，一张制作精美的琴，不仅是用来演奏的乐器，同时也是一件值得珍藏的艺术品。九霄环佩、一池波、玉壶冰、太古遗音……从这些富有意趣的名字中，便可以窥见历代琴人对古琴的热爱之情。
            p.bh-article-content 2003年，古琴艺术被联合国教科文组织列入人类非物质文化遗产代表作名录，使古琴的艺术魅力得到了更为广泛的传播，同时也对古琴文化的保护、传承与发展提供了更广阔的平台。
            p.bh-article-content 如今，古琴艺术已经焕发出新的生机，越来越多的人们开始欣赏与学习古琴，以此修身养性，在泠泠七弦之声中寻找心灵的宁静。
          .bh-article-img
            img(src="../assets/bh-intro-guzheng-01.jpg")
      v-card-row
        v-card-column
          img.bh-article-jzp(src="../assets/bh-intro-jzp-02.jpg")
          p.bh-jzp-alt 古琴特有的记谱法：减字谱
</template>

<script>
export default {
  name: 'bhIntro',
};
</script>

<style lang="stylus">
  make-card-space(arg)
    padding arg
    box-sizing border-box

  .bh-intro
    .bh-intro-nav
      span
        margin-left 20px
    .bh-intro-article
      make-card-space(10px)
    .bh-article-title
      font-weight bold
    .bh-article-img
      img
        height 30%
        width 30%
        float right
    .bh-article-jzp
      width 100%
      height 100%
    .bh-jzp-alt
      text-align center
</style>
