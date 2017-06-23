<template lang="pug">
  .bh-event
    nav.bh-event-nav
      ul
        li.bh-nav-title 琴社活动
        li
          router-link.bh-nav-link(to="#") 古琴雅集
        li
          router-link.bh-nav-link(to="#") 专题讲座
        li
          router-link.bh-nav-link(to="#") 音乐会
        li
          router-link.bh-nav-link(to="#") 艺术节
    .bh-event-right
      p 琴社每月举办潍坊古琴雅集，面向社会公众开放，知音雅士，少长咸集。听琴、抚琴、品茶、聊天……在高山流水的世界中，邀您寻找自己心灵的知音
    .bh-event-content
      .bh-event-box
        .bh-box-left
          img(src="../assets/img/bh-event-img.png")
          .bh-left-text
            p.bh-text-title 庆祝古琴申遗十周年 “北海之春”古琴专场音乐会	
            p 此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容
        .bh-box-right
          p 音乐会
      .bh-event-box
        .bh-box-left
          img(src="../assets/img/bh-event-img.png")
          .bh-left-text
            p.bh-text-title 庆祝古琴申遗十周年 “北海之春”古琴专场音乐会	
            p 此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容
        .bh-box-right
          p 音乐会
      .bh-event-box
        .bh-box-left
          img(src="../assets/img/bh-event-img.png")
          .bh-left-text
            p.bh-text-title 庆祝古琴申遗十周年 “北海之春”古琴专场音乐会	
            p 此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容
        .bh-box-right
          p 音乐会
      .bh-event-box
        .bh-box-left
          img(src="../assets/img/bh-event-img.png")
          .bh-left-text
            p.bh-text-title 庆祝古琴申遗十周年 “北海之春”古琴专场音乐会	
            p 此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容
        .bh-box-right
          p 音乐会
      .bh-event-box
        .bh-box-left
          img(src="../assets/img/bh-event-img.png")
          .bh-left-text
            p.bh-text-title 庆祝古琴申遗十周年 “北海之春”古琴专场音乐会	
            p 此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容
        .bh-box-right
          p 音乐会
      .bh-event-box
        .bh-box-left
          img(src="../assets/img/bh-event-img.png")
          .bh-left-text
            p.bh-text-title 庆祝古琴申遗十周年 “北海之春”古琴专场音乐会	
            p 此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容此处应有文本内容
        .bh-box-right
          p 音乐会
    .bh-event-pagenav
      button <<
      button <
      ol
        li(v-for="page in pageNav")
          router-link(to="#") {{ page }}
      button >
      button >>
</template>

<script>
export default {
  name: 'bhEvent',
  data() {
    return {
      pageNav: [1, 2, 3, 4, 5, 6, 7],
    };
  },
};
</script>

<style lang="scss">
  .bh-event {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;

    .bh-event-nav {
      margin-bottom: 20px;
      margin-top: 40px;

      ul {
        list-style-type: none;
        padding: 0;
        margin-left: 40px;
      }

      ul::after {
        content: "";
        display: block;
        clear: both;
      }

      ul li {
        float: left;
        margin-right: 60px;
      }

      .bh-nav-title {
        font-size: 20px;
        font-weight: bold;
      }

      .bh-nav-link {
        text-decoration: none;
        color: inherit;
        font-size: 18px;
      }
    }

    .bh-event-nav::after {
      content: "";
      display: block;
      clear: both;
    }

    .bh-event-right {
      width: 750px;
      background-color: #efefef;
      padding: 0 10px;
      float: right;
      margin-bottom: 60px;

      p {
        font-size: 14px;
        text-indent: 2rem;
        line-height: 200%;
      }
    }

    .bh-event-content {
      width: 800px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 60px;
      border-top: 1px solid black;
      clear: both;

      .bh-event-box {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        .bh-box-left {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #cccccc;
        }

        .bh-box-left img {
          width: 84px;
          height: 84px;
        }

        .bh-box-left .bh-left-text {
          font-size: 14px;
          padding-left: 20px;
          width: 500px;
        }

        .bh-box-right {
          width: 110px;
          text-align: center;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #cccccc;
        }
      }
    }

    .bh-event-pagenav {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-end;
      margin-right: 80px;

      ol {
        list-style-type: none;
        padding: 0;
        margin: 0 10px;
      }

      ol li {
        float: left;
        padding: 5px;
      }

      ol li a {
        text-decoration: none;
        color: inherit;
      }

      button {
        border: none;
        background-color: transparent;
        color: inherit;
        cursor: pointer;
        margin-right: 5px;
      }

      button:last-child {
        margin-right: 0;
      }
    }
  }
</style>
