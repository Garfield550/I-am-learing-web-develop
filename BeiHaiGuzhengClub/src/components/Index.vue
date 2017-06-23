<template lang="pug">
  .bh-index
    .bh-index-container
      .bh-index-banner
      .bh-index-wapper
        .bh-index-actrow
          p.bh-actrow-text 最新活动
          .bh-actrow-content
            .bh-content-text
              p.bh-text-row1 2015年古琴课程普及大课、小组课、1对1课程常年开课。
              p.bh-text-row2 琴社租售各地知名斫琴家及制琴坊的古琴
              p.bh-text-row3
                |  “相见欢”潍坊古琴冬月雅集
                br
                |  艺术节系列活动：北海调玉琴——中国古琴名家音乐会
                br
                |  名家古琴讲座：中国古琴学会秘书长张子盛《走进古琴艺术》
            .bh-content-video
        .bh-index-guzclub
          .bh-guzclub-wapper
            .bh-guzclub-bhclub
              p.bh-bhclub-text 北海琴社
              .bh-bhclub-content
                .bh-content-pic
          p.bh-guzclub-clubtext
            |  北海琴社成立于2012年，因潍坊古称北海而得名,是潍坊首家专业教授古琴演奏的琴馆，也是张子盛古琴艺术中心的分馆之一，同时亦是中国民族器乐学会诸城派古琴艺术中心所在地。
        .bh-index-master
          .bh-master-wapper
            .bh-master-info
              .bh-info-text
                p.bh-text-name 赵梓皓
                p.bh-text-content
                  |  北海琴社社长
                  br
                  |  古琴青年演奏家
                  br
                  |  中国民族器乐学会理事
              .bh-info-content
                .bh-info-pic
          p.bh-master-text
            |  师从于张子盛先生，为其入室弟子。在继承学习九嶷琴派演奏特点的基础上，同时研修诸城琴曲。演奏风格沉稳内敛，运指华美自如，内透诸城风骨，善弹《秋鸿》、《捣衣》等传统大曲，亦精于《三峡船歌》《胜利操》等当代新作。
      .bh-index-guzheng
        p.bh-guzheng-text 古琴欣赏
        swiper.bh-guzheng-swipe(:options="swiperOption")
          swiper-slide.bh-swipe-1
          swiper-slide.bh-swipe-2
          swiper-slide.bh-swipe-3
          swiper-slide.bh-swipe-4
          swiper-slide.bh-swipe-5
          .swiper-button-prev(slot="button-prev")
          .swiper-button-next(slot="button-next")
    .bh-index-footer
      hr
      .bh-footer-content
        p.bh-content-text
          |  Coypright © 北海琴社 2015-2016 鲁ICP备xxxxxx号
          br
          |  山东省潍坊市潍城区福寿街与和平路交叉口向西100米路南
          br
          |  电话：18765151169  15063439645
          br
          |  Powerby 蔚蓝工作室
        .bh-content-qrcode
          .bh-qrcode-text 关注微信公众号
          .bh-qrcode-pic
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'bhIndex',
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style lang="scss">
  .bh-index-container {
    width: 960px;
    margin-left: auto;
    margin-right: auto;

    .bh-index-banner {
      background-image: url(../assets/img/index-banner.png);
      background-size: 960px 301px;
      background-repeat: no-repeat;
      width: 960px;
      height: 301px;
      margin-top: 20px;
      margin-bottom: 40px;
    }

    .bh-index-wapper {
      box-sizing: border-box;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 40px;
      font-size: 14px;

      .bh-index-actrow,
      .bh-index-guzclub .bh-guzclub-wapper,
      .bh-index-master .bh-master-wapper {
        display: flex;
        flex-flow: row nowrap;
        margin-bottom: 40px;
      }

      .bh-index-actrow .bh-actrow-text,
      .bh-index-guzclub .bh-guzclub-wapper .bh-guzclub-bhclub .bh-bhclub-text,
      .bh-index-master .bh-master-wapper .bh-master-info .bh-info-text .bh-text-name, {
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
        margin-right: 20px;
      }

      .bh-index-actrow .bh-actrow-text::before,
      .bh-index-guzclub .bh-guzclub-wapper .bh-guzclub-bhclub .bh-bhclub-text::before,
      .bh-index-master .bh-master-wapper .bh-master-info .bh-info-text .bh-text-name::before, {
        content: "";
        background-image: url(../assets/img/icon.png);
        background-repeat: no-repeat;
        background-size: 15px 14px;
        width: 15px;
        height: 14px;
        margin-right: 10px;
        display: inline-block;
      }

      .bh-index-actrow .bh-actrow-content {
        border-left: 1px solid #333333;
        box-sizing: border-box;
        padding-left: 20px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
      }

      .bh-index-actrow .bh-actrow-content .bh-content-text .bh-text-row1 {
        color: #3c5e91;
      }

      .bh-index-actrow .bh-actrow-content .bh-content-text .bh-text-row2 {
        color: #e9650d;
      }

      .bh-index-actrow .bh-actrow-content .bh-content-text .bh-text-row3 {
        line-height: 200%;
        margin-right: 40px;
      }

      .bh-index-actrow .bh-actrow-content .bh-content-video {
        width: 301px;
        height: 169px;
        background-color: #000000;
      }

      .bh-index-guzclub {
        display: flex;
        flex-flow: column nowrap;
        width: 350px;
        float: left;
      }

      .bh-index-guzclub .bh-guzclub-wapper,
      .bh-index-master .bh-master-wapper {
        margin-bottom: 10px;
      }

      .bh-index-guzclub .bh-guzclub-wapper .bh-guzclub-bhclub,
      .bh-index-master .bh-master-wapper .bh-master-info {
        display: flex;
        flex-flow: row nowrap;
      }

      .bh-index-guzclub .bh-guzclub-wapper .bh-guzclub-bhclub .bh-bhclub-content,
      .bh-index-master .bh-master-wapper .bh-master-info .bh-info-content {
        border-left: 1px solid #333333;
        box-sizing: border-box;
        padding: 20px;
      }

      .bh-index-guzclub .bh-guzclub-wapper .bh-guzclub-bhclub .bh-bhclub-content .bh-content-pic {
        background-image: url(../assets/img/bh-club-logo.png);
        background-size: 132px 136px;
        background-repeat: no-repeat;
        width: 132px;
        height: 136px;
      }

      .bh-index-guzclub .bh-guzclub-clubtext,
      .bh-index-master .bh-master-text {
        line-height: 200%;
        text-indent: 2rem;
      }

      .bh-index-master {
        display: flex;
        flex-flow: column nowrap;
        width: 500px;
        float: right;
      }

      .bh-index-master .bh-master-wapper .bh-master-info .bh-info-content .bh-info-pic {
        background-image: url(../assets/img/bh-master-teacher.png);
        background-size: 214px 137px;
        background-repeat: no-repeat;
        width: 214px;
        height: 137px;
      }

      .bh-index-master .bh-master-wapper .bh-master-info .bh-info-text .bh-text-content {
        margin-right: 20px;
        font-weight: bold;
      }
    }

    .bh-index-wapper::after {
      content: "";
      display: block;
      clear: both;
    }

    .bh-index-guzheng {
      margin-bottom: 80px;

      .bh-guzheng-text {
        display: inline-block;
        font-size: 18px;
        font-weight: bold;
        margin-left: 40px;
      }

      .bh-guzheng-text::before {
        content: "";
        background-image: url(../assets/img/icon.png);
        background-repeat: no-repeat;
        background-size: 15px 14px;
        width: 15px;
        height: 14px;
        margin-right: 10px;
        display: inline-block;
      }

      .bh-guzheng-swipe {
        background-color: #cccccc;
      }

      .bh-guzheng-swipe .swiper-slide {
        display: flex;
        flex-flow: row nowrap;
        overflow: hidden;
        width: 166px;
        height: 250px;
      }

      .bh-guzheng-swipe *[class*="bh-swipe"] {
        margin-right: 10px;
        background-repeat: no-repeat;
        background-size: 166px 250px;
        width: 166px;
        height: 250px;
      }

      .bh-guzheng-swipe .bh-swipe-1 {
        background-image: url(../assets/img/index-fy2.png);
      }

      .bh-guzheng-swipe .bh-swipe-2 {
        background-image: url(../assets/img/index-hmqy2.png);
      }

      .bh-guzheng-swipe .bh-swipe-3 {
        background-image: url(../assets/img/index-hd3.png);
      }
      
      .bh-guzheng-swipe .bh-swipe-4 {
        background-image: url(../assets/img/index-jy2.png);
      }

      .bh-guzheng-swipe .bh-swipe-5 {
        background-image: url(../assets/img/index-lz.png);
      }
    }
  }

  .bh-index-footer {
    margin-bottom: 100px;

    hr {
      margin-bottom: 10px;
    }

    .bh-footer-content {
      width: 960px;
      margin-left: auto;
      margin-right: auto;
      text-align: right;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;

      .bh-content-text {
        line-height: 150%;
        margin-right: 40px;
      }

      .bh-content-qrcode {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        margin-right: 40px;
      }

      .bh-content-qrcode .bh-qrcode-pic {
        background-image: url(../assets/img/wechat-qr-code.png);
        background-size: 121px 121px;
        background-repeat: no-repeat;
        width: 121px;
        height: 121px;
      }
    }
  }
</style>
