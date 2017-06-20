<template lang="pug">
  .bh-purchase
    .bh-purchase-main
      .bh-main-title 古琴欣赏
      .bh-main-content
        p 此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明
        p 此处应有文字说明此处应有文字说明
        p 此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明此处应有文字说明
        p 此处应有文字说明此处应有文字说明
    .bh-purchase-guzheng
      .bh-guzheng-pics
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-fy.png")
          span 张玉新 伏羲
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-hmqy.png")
          span 范书生 鹤鸣秋月
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-hd.png")
          span 陶运成 混沌
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-lz.png")
          span 田泉 连珠
      .bh-guzheng-pics
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-jy.png")
          span 唐人御工坊 蕉叶
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-lw.png")
          span 南风古琴 潞王
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-lx.png")
          span 陶运成 落霞
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-lzh.png")
          span 罗苏里 正和
      .bh-guzheng-pics
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-qq.png")
          span 天津琴院 秦琴
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-sh.png")
          span 七星琴堂 神晖
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-sn.png")
          span 刘永发 神衣
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-zn.png")
          span 李朝阳 仲尼
      .bh-guzheng-pics
        .bh-pic-contanier
          img(src="../assets/img/bh-purchase-zh.png")
          span 叶遇仍 正和
</template>

<script>
export default {
  name: 'bhPurchase',
};
</script>

<style lang="scss">
  .bh-purchase {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;

    .bh-purchase-main {
      width: 840px;
      margin: 40px auto;

      .bh-main-title {
        font-size: 20px;
        font-weight: bold;
      }

      .bh-main-content {
        padding: 0 40px;
        font-size: 14px;
      }

      .bh-main-content p {
        line-height: 200%;
      }
    }

    .bh-purchase-guzheng {
      padding: 40px;

      .bh-guzheng-pics {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
      }

      .bh-guzheng-pics .bh-pic-contanier {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      }

      .bh-guzheng-pics .bh-pic-contanier img {
        border: 1px solid #9b9b9b;
      }

      .bh-guzheng-pics .bh-pic-contanier span {
        margin: 10px 0;
        font-size: 14px;
      }
    }
  }
</style>
