<template lang="pug">
  .bh-contact
    .bh-contact-main
      p.bh-main-title 联系我们
      .bh-main-content
        .bh-content-amap
          el-amap(vid="amapBeiHai" :zoom="zoom" :center="center")
            el-amap-marker(:position="position" :visible="visible" :draggable="draggable")
        .bh-content-contact
          p.bh-contact-title 北海琴社
          p.bh-contact-text
            |  潍坊市潍城区福寿街与和平路交叉口向西100米路南
            br
            |  联系电话：18765151169&nbsp;&nbsp;15063439645
            br
            |  微信平台：bhqs2012
            br
            |  新浪微博：@北海琴社
            br
            |  QQ交流群：130233085
            br
            |  邮箱：bhqs2012@163.com
            br
            |  公交27路、23路、环61路中国银行证券站
    .bh-contact-footer
      hr
      .bh-footer-wapper
        .bh-footer-qrcode
        p.bh-footer-text
          span 扫描二维码关注北海琴社微信公众号
          br
          |  我们不熬心灵鸡汤
          br
          |  也不转载你看了很多遍的帖子
          br
          |  我们只给你最原创的古琴文章
          br
          |  更新虽慢
          br
          |  但是耐看
</template>

<script>
export default {
  name: 'bhContact',
  data() {
    return {
      zoom: 16,
      center: [119.107867, 36.719145],
      position: [119.107867, 36.719145],
      visible: true,
      draggable: false,
    };
  },
};
</script>

<style lang="scss">
  .bh-contact {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    padding: 40px;

    .bh-contact-main {
      display: flex;
      flex-flow: column nowrap;
      margin-bottom: 60px;

      .bh-main-title {
        font-size: 20px;
        font-weight: bold;
        margin-top: 0;
      }

      .bh-main-content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
      }

      .bh-main-content .bh-content-contact {
        box-sizing: border-box;
        padding: 40px;
      }

      .bh-main-content .bh-content-contact .bh-contact-title {
        font-size: 20px;
        font-weight: bold;
        margin-top: 0;
      }

      .bh-main-content .bh-content-contact .bh-contact-text {
        line-height: 200%;
      }

      .bh-main-content .bh-content-amap {
        width: 385px;
        height: 385px;
      }
    }

    .bh-contact-footer {
      text-align: center;

      .bh-footer-wapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        margin-top: 40px;
      }

      .bh-footer-wapper .bh-footer-text span{
        font-weight: bold;
        display: block;
      }

      .bh-footer-wapper .bh-footer-qrcode {
        background-image: url(../assets/img/wechat-qr-code.png);
        background-size: 121px 121px;
        background-repeat: no-repeat;
        width: 121px;
        height: 121px;
        margin: 20px;
      }
    }
  }
</style>
