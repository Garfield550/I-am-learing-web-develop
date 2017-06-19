<template lang="pug">
  .content
    .top-row
      .left
        .atom
        p 内容浏览 >>
      p.right 当前位置:网站首页 > 公司新闻 > 内容浏览 
    .content-wapper
      .content-box
        p.title {{ postContent.title }}
        p.info 文章出处：{{ postContent.addr }} │ 网站编辑：{{ postContent.user }} │ 发表时间：{{ postContent.time }}
        img.pic(:href="postContent.pic")
        p.text {{ postContent.text }}
        .move-link
          p.up 上一篇：网站建设项目类所需提供的资料参考
          p.next 下一篇：网络营销传播的常见方式？
      .menu
        ul
          li(v-for="item in menuLinks")
            router-link(:to="item.link") {{ item.text }}
</template>

<script>
export default {
  name: 'gtContent',
  data() {
    return {
      postContent: {
        title: '济南SEO优化通过网站的长尾关键词',
        addr: '未知',
        user: 'admin',
        time: '2014-08-21 09:14',
        pic: '../assets/content.png',
        text: '在很多人看来，如果通过网络新闻进行产品营销，那就基本上等同于新闻软文，也就是我们在报纸上经常看见的那种被加了特别的外框或注明了产品信息的貌似新闻的小广告。如果仅仅如此，那么这样的营销或许在报纸上有用，在网络上是无能的。因为网络新闻具有跳跃性和挑选性，网民可以非常快速地从网站新闻中浏览一遍，对于这种仅仅是产品介绍的新闻式广告，直接忽略。我们要进行的新闻营销，其实就是以文字、文章形式的新闻报道将产品信息和品牌信息融合进去。特点是读者容易接受，传播广泛。如果运作得法，其效果是非常强的。我们继续用“封杀王老吉”这个比较有代表性的复合式网络新闻的重复性营销，来看看网络新闻的力量对品牌良好形象的树立之功。',
      },
      menuLinks: [
        { text: '济南SEO优化通过网站的长尾关键词进行分析...', link: '#' },
        { text: '网站建设项目类所需提供的资料参考', link: '#' },
        { text: '济南SEO优化通过网站的长尾关键词进行分析...', link: '#' },
        { text: '济南SEO优化通过网站的长尾关键词进行分析...', link: '#' },
        { text: '济南SEO优化通过网站的长尾关键词进行分析...', link: '#' },
        { text: '济南SEO优化通过网站的长尾关键词进行分析...', link: '#' },
        { text: '济南SEO优化通过网站的长尾关键词进行分析...', link: '#' },
        { text: '济南SEO优化通过网站的长尾关键词进行分析...', link: '#' },
        { text: '济南SEO优化通过网站的长尾关键词进行分析...', link: '#' },
        { text: '济南SEO优化通过网站的长尾关键词进行分析...', link: '#' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 60px auto;

  > .top-row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    .left {
      font-size: 18px;
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 10px;
    
      .atom {
        background-image: url(../assets/atom.svg);
        background-size: 48px;
        background-repeat: no-repeat;
        width: 48px;
        height: 48px;
        margin: 0 20px;
      }
    }

    .right {
      font-size: 14px;
      margin-right: 40px;
    }

    .right::before {
      content: "";
      background-image: url(../assets/dot.svg);
      background-size: 16px;
      background-repeat: no-repeat;
      padding-right: 20px;
      width: 16px;
      height: 16px;
    }
  }

  > .content-wapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .content-box {
      box-sizing: border-box;
      padding: 60px 40px;
      padding-bottom: 0;
      padding-top: 0;
      border-top: 2px solid #BBBBBB;
      border-right: 2px solid #BBBBBB;
      width: 65%;

      .title, .info, .pic {
        text-align: center;
      }

      .title {
        font-size: 24px;
        margin: 60px 0;
      }

      .info {
        font-style: italic;
      }

      .text {
        text-indent: 2rem;
        line-height: 400%;
        margin-bottom: 120px;
      }

      .move-link {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
      }
    }

    .menu {
      width: 35%;
      border-top: 10px solid #192975;
      padding-top: 20px;

      ul {
        list-style-type: none;
        padding: 0;

        li {
          padding-bottom: 10px;

          a {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            height: 48px;
            text-decoration: none;
            color: #3A3A3B;
            padding-left: 40px;
          }

          a::before {
            content: "";
            background-image: url(../assets/dot.svg);
            background-size: 16px;
            background-repeat: no-repeat;
            padding-right: 10px;
            width: 16px;
            height: 16px;
          }

          a:hover::before {
            background-image: none;
          }

          a:hover {
            background-color: #192975;
            color: #FFFFFF;
          }
        }
      }
    }
  }
}
</style>
