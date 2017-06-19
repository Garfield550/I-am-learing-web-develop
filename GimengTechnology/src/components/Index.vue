<template lang="pug">
  .index
    .boardBar
      .board
        .circle
          .icon.iconmsg
        p 了解您的意愿
      .board
        .circle
          .icon.icontud
        p 急速建设网站
      .board
        .circle
          .icon.iconmnt
        p 成品网站上线
      .board
        .circle
          .icon.iconkey
        p 网站后期维护
    .sercyc
      .wapper
        .text
          p 服务周期
          span SERVICE CYCLE
        .paras
          .para
            .time 2
              span 个月
            .content 相关规划+
          .para
            .time 4
              span 个月
            .content 相关实施+
          .para
            .time 6
              span 个月
            .content 运营支撑+
    .lists
      .leftlist
        .pic
          .opacity
        .newslist
          ul.leftnews
            li(v-for="news in leftNews")
              router-link(to="/content") {{ news.news }}
          ul.rightnews
            li(v-for="news in rightNews")
              router-link(to="/content") {{ news.news }}
      .rightlist
        a.listitem(href="#" v-for="listItem in rightLists")
          .number {{ listItem.id }}
          .title {{ listItem.title }}
          .content {{ listItem.content }}
</template>

<script>
export default {
  name: 'gtIndex',
  data() {
    return {
      leftNews: [
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
      ],
      rightNews: [
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
        { news: '济南SEO优化通过网站的长尾关键词进行分析...' },
      ],
      rightLists: [
        { id: '01', title: '最吸引人的标题', content: '济南微信营销：微信或成美国应用的学习...机网民日益增多 移动互联安全研究迫."电渡船 很快或被淘汰...支付宝明天开始提现收费 银行“背锅济南微信营销：微信或成美国应用的学习...' },
        { id: '02', title: '最吸引人的标题', content: '济南微信营销：微信或成美国应用的学习...机网民日益增多 移动互联安全研究迫."电渡船 很快或被淘汰...支付宝明天开始提现收费 银行“背锅济南微信营销：微信或成美国应用的学习...' },
        { id: '03', title: '最吸引人的标题', content: '济南微信营销：微信或成美国应用的学习...机网民日益增多 移动互联安全研究迫."电渡船 很快或被淘汰...支付宝明天开始提现收费 银行“背锅济南微信营销：微信或成美国应用的学习...' },
        { id: '04', title: '最吸引人的标题', content: '济南微信营销：微信或成美国应用的学习...机网民日益增多 移动互联安全研究迫."电渡船 很快或被淘汰...支付宝明天开始提现收费 银行“背锅济南微信营销：微信或成美国应用的学习...' },
      ],
    };
  },
};
</script>

<style lang="scss">
$iconsize: 60px !default;
$circlesize: 150px !default;
$indexcolor: #006EAA !default;
$indexpadding: 60px !default;

  .index {
    > .boardBar {
      width: 1200px;
      margin-left: auto;
      margin-right: auto;
      padding: $indexpadding 0;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;

      .board {
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      }

      .circle {
        width: $circlesize;
        height: $circlesize;
        border-radius: 50%;
        background-color: $indexcolor;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
      }

      .circle .icon {
        width: $iconsize;
        height: $iconsize;
        background-repeat: no-repeat;
        background-size: $iconsize;
      }

      .circle .iconmsg {
        background-image: url(../assets/msg.svg);
      }

      .circle .icontud {
        background-image: url(../assets/tud.svg);
      }

      .circle .iconmnt {
        background-image: url(../assets/mnt.svg);
      }

      .circle .iconkey {
        background-image: url(../assets/key.svg);
      }

      p {
        font-size: 30px;
        margin-bottom: 0;
      }
    }

    > .sercyc {
      height: 100px;
      background-color: $indexcolor;
      color: #FFFFFF;

      .wapper {
        width: 90%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
      }

      .text {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: inherit;
        margin-left: 60px;
      }

      .text p {
        font-size: 24px;
        font-weight: bold;
      }

      .text span {
        font-size: 20px;
        margin-left: 10px;
      }

      .paras {
        display: flex;
        flex-flow: row nowrap;
        margin-right: 60px;
        height: inherit;

        .para {
          height: inherit;
          width: 180px;
          border-left: 1px solid #FFF;
          transform: skewX(-22deg);
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: center;

          .time, .content {
            transform: skewX(22deg);
          }

          .time {
            font-size: 45px;
            color: #FFB31F;
          }

          .time span {
            color: #FFFFFF;
            font-size: 14px;
          }

          .content {
            font-size: 20px;
          }
        }

        .para:last-child {
          border-right: 1px solid #FFF;
        }
      }
    }

    > .lists {
      padding-top: $indexpadding;
      padding-bottom: $indexpadding;
      width: 90%;
      margin-left: auto;
      margin-right: auto;

      .leftlist {
        width: 600px;
        float: left;

        .pic {
          background-image: url(../assets/peoples.png);
          background-repeat: no-repeat;
          width: 597px;
          height: 202px;
          position: relative;
          margin-bottom: 40px;
        }

        .pic::after {
          content: "";
          background-color: $indexcolor;
          position: absolute;
          bottom: 0px;
          height: 20px;
          width: 100%;
        }

        .pic .opacity {
          background-color: #000000;
          width: 100%;
          height: 100%;
          opacity: 0.25;
        }

        .newslist {
          ul {
            margin: 0;
            padding-left: 20px;
            list-style-type:square;
            font-size: 12px;

            li {
              margin-bottom: 20px;
            }

            li a {
              text-decoration: none;
              color: #282829;
            }

            li a:hover {
              color: #182975;
            }
          }

          .leftnews {
            float: left;
          }

          .rightnews {
            float: right;
          }
        }

        .newslist::after {
          content: "";
          display: block;
          clear: both;
        }
      }

      .rightlist {
        width: 600px;
        float: right;
        padding-left: 40px;
        box-sizing: border-box;

        .listitem {
          padding-bottom: 20px;
          display: block;
          color: #282829;
          text-decoration: none;
        }

        .listitem .number {
          font-size: 60px;
          font-weight: bold;
          float: left;
          padding: 0 10px;
          color: $indexcolor;
        }

        .listitem .title {
          margin-top: 10px;
          margin-bottom: 10px;
          font-size: 24px;
        }

        .listitem .content {
          line-height: 150%;
        }

        .listitem::after {
          content: "";
          display: block;
          clear: both;
        }

        .listitem:hover {
          .title, .content {
            color: #182975;
          }
        }
      }
    }

    > .lists::after {
      clear: both;
      display: block;
      content: "";
    }
  }
</style>
