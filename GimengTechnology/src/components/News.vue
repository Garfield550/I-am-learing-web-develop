<template lang="pug">
  .news
    .row1
      .leftcol
        .icon
          span.black
          span.gray
        .title 公司新闻
      .links 您当前所在位置 > 首页 > 公司新闻
    .content-box
      .contents(v-for="content in contents")
        .icon
        a.content(href="#")
          .row
            p.title {{ content.title }}
            p.time {{ content.time }}
          .text {{ content.text }}
    .pages
      button.left <<
      ol.list
        li.active 1
        li(v-for="page in pages")
          a {{ page }}
      .allpages 共{{ maxPage(pages) }}页
      .goto 到
        input(type="text")
        span 页
        button 确定
      button.right >>
</template>

<script>
export default {
  name: 'gtNews',
  data() {
    return {
      contents: [
        { title: '企业网站营销推广过程中的常见问题及策略', time: '2016-10-6', text: '随着互联网经济的快速发展，企业网站已经是多如牛毛，怎样在网站推广过程中迅速增加流量以及增加客户群的黏度，成了广大企业所追求的重点。虽然现在每个企业至少有一个网站，但是由于企业缺乏一定专业水平的技术人员，以及缺乏相关人员对网站进行管理，导致这些企业所建的网站毫无用处，没有为公司带来一定的收益。面对这么一个信息爆炸的时代，网络上泛滥的信息让你眼花缭乱，因此相同或者类似的信息竞争非常大。现在几乎全部企业都在做网络推广，但由于竞争压力大，市场上相关经营单位都想在网络这个大环境中分一杯羹，由于各种因素的存在，企业在进行网站推广的时候往往遇到各种各样的问题。' },
        { title: '企业网站营销推广过程中的常见问题及策略', time: '2016-10-6', text: '随着互联网经济的快速发展，企业网站已经是多如牛毛，怎样在网站推广过程中迅速增加流量以及增加客户群的黏度，成了广大企业所追求的重点。虽然现在每个企业至少有一个网站，但是由于企业缺乏一定专业水平的技术人员，以及缺乏相关人员对网站进行管理，导致这些企业所建的网站毫无用处，没有为公司带来一定的收益。面对这么一个信息爆炸的时代，网络上泛滥的信息让你眼花缭乱，因此相同或者类似的信息竞争非常大。现在几乎全部企业都在做网络推广，但由于竞争压力大，市场上相关经营单位都想在网络这个大环境中分一杯羹，由于各种因素的存在，企业在进行网站推广的时候往往遇到各种各样的问题。' },
        { title: '企业网站营销推广过程中的常见问题及策略', time: '2016-10-6', text: '随着互联网经济的快速发展，企业网站已经是多如牛毛，怎样在网站推广过程中迅速增加流量以及增加客户群的黏度，成了广大企业所追求的重点。虽然现在每个企业至少有一个网站，但是由于企业缺乏一定专业水平的技术人员，以及缺乏相关人员对网站进行管理，导致这些企业所建的网站毫无用处，没有为公司带来一定的收益。面对这么一个信息爆炸的时代，网络上泛滥的信息让你眼花缭乱，因此相同或者类似的信息竞争非常大。现在几乎全部企业都在做网络推广，但由于竞争压力大，市场上相关经营单位都想在网络这个大环境中分一杯羹，由于各种因素的存在，企业在进行网站推广的时候往往遇到各种各样的问题。' },
        { title: '企业网站营销推广过程中的常见问题及策略', time: '2016-10-6', text: '随着互联网经济的快速发展，企业网站已经是多如牛毛，怎样在网站推广过程中迅速增加流量以及增加客户群的黏度，成了广大企业所追求的重点。虽然现在每个企业至少有一个网站，但是由于企业缺乏一定专业水平的技术人员，以及缺乏相关人员对网站进行管理，导致这些企业所建的网站毫无用处，没有为公司带来一定的收益。面对这么一个信息爆炸的时代，网络上泛滥的信息让你眼花缭乱，因此相同或者类似的信息竞争非常大。现在几乎全部企业都在做网络推广，但由于竞争压力大，市场上相关经营单位都想在网络这个大环境中分一杯羹，由于各种因素的存在，企业在进行网站推广的时候往往遇到各种各样的问题。' },
        { title: '企业网站营销推广过程中的常见问题及策略', time: '2016-10-6', text: '随着互联网经济的快速发展，企业网站已经是多如牛毛，怎样在网站推广过程中迅速增加流量以及增加客户群的黏度，成了广大企业所追求的重点。虽然现在每个企业至少有一个网站，但是由于企业缺乏一定专业水平的技术人员，以及缺乏相关人员对网站进行管理，导致这些企业所建的网站毫无用处，没有为公司带来一定的收益。面对这么一个信息爆炸的时代，网络上泛滥的信息让你眼花缭乱，因此相同或者类似的信息竞争非常大。现在几乎全部企业都在做网络推广，但由于竞争压力大，市场上相关经营单位都想在网络这个大环境中分一杯羹，由于各种因素的存在，企业在进行网站推广的时候往往遇到各种各样的问题。' },
        { title: '企业网站营销推广过程中的常见问题及策略', time: '2016-10-6', text: '随着互联网经济的快速发展，企业网站已经是多如牛毛，怎样在网站推广过程中迅速增加流量以及增加客户群的黏度，成了广大企业所追求的重点。虽然现在每个企业至少有一个网站，但是由于企业缺乏一定专业水平的技术人员，以及缺乏相关人员对网站进行管理，导致这些企业所建的网站毫无用处，没有为公司带来一定的收益。面对这么一个信息爆炸的时代，网络上泛滥的信息让你眼花缭乱，因此相同或者类似的信息竞争非常大。现在几乎全部企业都在做网络推广，但由于竞争压力大，市场上相关经营单位都想在网络这个大环境中分一杯羹，由于各种因素的存在，企业在进行网站推广的时候往往遇到各种各样的问题。' },
        { title: '企业网站营销推广过程中的常见问题及策略', time: '2016-10-6', text: '随着互联网经济的快速发展，企业网站已经是多如牛毛，怎样在网站推广过程中迅速增加流量以及增加客户群的黏度，成了广大企业所追求的重点。虽然现在每个企业至少有一个网站，但是由于企业缺乏一定专业水平的技术人员，以及缺乏相关人员对网站进行管理，导致这些企业所建的网站毫无用处，没有为公司带来一定的收益。面对这么一个信息爆炸的时代，网络上泛滥的信息让你眼花缭乱，因此相同或者类似的信息竞争非常大。现在几乎全部企业都在做网络推广，但由于竞争压力大，市场上相关经营单位都想在网络这个大环境中分一杯羹，由于各种因素的存在，企业在进行网站推广的时候往往遇到各种各样的问题。' },
      ],
      pages: [2, 3, 4, 5, 6],
    };
  },
  methods: {
    maxPage: number => Math.max.apply(null, number),
  },
};
</script>

<style lang="scss">
  .news {
    width: 1200px;
    margin: 40px auto;

    > .row1 {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .leftcol {
        display: flex;
        flex-flow: row nowrap;
      
        .icon {
          display: inline-block;

          .black, .gray {
            width: 15px;
            height: 24px;
            display: inline-block;
          }

          .black {
            background-color: #18191A;
          }

          .gray {
            background-color: #CBCFD1;
            margin-left: 5px;
          }
        }

        .title {
          display: inherit;
          font-size: 24px;
          letter-spacing: 10px;
          margin-left: 20px;
        }
      }
    }

    > .content-box {
      border: 3px solid #EAEAEB;
      padding: 20px;

      .contents {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin-bottom: 40px;

        .icon {
          border: 2px solid #6E7174;
          box-sizing: border-box;
          width: 38px;
          height: 50px;
          position: relative;
          margin-right: 20px;
        }

        .icon::after {
          content: "";
          display: block;
          border: 2px solid #6E7174;
          box-sizing: border-box;
          width: 38px;
          height: 50px;
          position: absolute;
          left: 5px;
          top: 5px;
        }

        .content {
          display: flex;
          flex-flow: column nowrap;
          width: 100%;
          text-decoration: none;

          .row {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            width: inherit;

            .title, .time {
              font-size: 20px;
              margin-top: 0;
              color: #161717;
              font-weight: bold;
            }

            .time {
              margin-right: 20px;
            }
          }

          .text {
            color: #525556;
          }
        }

        .content:hover {
          color: #3452B8;

          .title, .time, .text {
            color: inherit;
          } 
        }
      }

      .contents:last-child {
        margin-bottom: 0;
      }
    }

    > .pages {
      color: #959899;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      margin-bottom: 60px;

      .left, .list, .allpages, .goto, .right {
        margin-left: 20px;
        margin-right: 20px;
      }

      .left, .right {
        border: none;
        background-color: transparent;
        padding: 5px;
        cursor: pointer;
        color: inherit;
      }

      .list {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-flow: row nowrap;
      }

      .list li {
        padding: 5px;
        width: 16px;
        height: 16px;
        text-align: center;
      }

      .list .active {
        background-color: #006EAA;
        color: #FFFFFF;
      }

      .goto input {
        width: 40px;
      }

      .goto button {
        background-color: #006EAA;
        color: #FFFFFF;
        border: none;
        padding: 5px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
</style>
