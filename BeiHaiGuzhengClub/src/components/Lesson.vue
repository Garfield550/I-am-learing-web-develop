<template lang="pug">
  .bh-lesson
    .bh-lesson-nav
      ul
        li.bh-nav-title 古琴研习
        li
          router-link.bh-nav.link(to="/lesson") 琴课
        li
          router-link.bh-nav.link(to="/tutor") 琴师
    .bh-lesson-right
      p 琴社常年开设古琴研习课程，包括普及大课、小组课、一对一等三种授课方式。在教学中贯彻以心取韵、心韵合一的理念，系统教授古琴演奏技巧，同时涉及琴学理论及历史，全面提高学员对传统文化的理解与鉴赏能力。
      img(src="../assets/img/bh-lesson-pic.png")
    .bh-lesson-content
      .bh-content-wapper
        .bh-content-icon.icon-red
          p 普及大课
        .bh-content-contanier.c-red
          p
            |  [授课方式]
            span 多人共同学习，时间固定，随到随学，结识不同的知音琴友。
            | [适合人群]
            span 喜欢向他人学习并帮助他人的学员；抱着试试看心态的学员；还不太了解古琴的学员；经济条件有限的学员。
            | [授课时间]
            span 2小时
      .bh-content-wapper
        .bh-content-icon.icon-green
          p 普及大课
        .bh-content-contanier.c-green
          p
            |  [授课方式]
            span 多人共同学习，时间固定，随到随学，结识不同的知音琴友。
            | [适合人群]
            span 喜欢向他人学习并帮助他人的学员；抱着试试看心态的学员；还不太了解古琴的学员；经济条件有限的学员。
            | [授课时间]
            span 2小时
      .bh-content-wapper
        .bh-content-icon.icon-blue
          p 普及大课
        .bh-content-contanier.c-blue
          p
            |  [授课方式]
            span 多人共同学习，时间固定，随到随学，结识不同的知音琴友。
            | [适合人群]
            span 喜欢向他人学习并帮助他人的学员；抱着试试看心态的学员；还不太了解古琴的学员；经济条件有限的学员。
            | [授课时间]
            span 2小时
    .bh-lesson-footer
      p.bh-footer-content
        |  以上课程常年开课,适合所有喜爱古琴艺术的朋友
        br
        |  琴社备有专业演奏古琴，供学员上课使用
        br
        |  咨询报名电话：15063439645
      img.bh-footer-pic
</template>

<script>
export default {
  name: 'bhLesson',
};
</script>

<style lang="scss">
  .bh-lesson {
    width: 960px;
    margin-left: auto;
    margin-right: auto;

    .bh-lesson-nav {
      margin-top: 40px;
      margin-bottom: 40px;

      ul {
        list-style-type: none;
        padding: 0;
      }

      ul::after {
        content: "";
        display: block;
        clear: both;
      }

      ul li {
        float: left;
        margin-right: 60px;
        font-size: 18px;
      }

      .bh-nav-title {
        font-weight: bold;
        font-size: 20px;
      }

      .bh-nav.link {
        text-decoration: none;
        color: inherit;
      }

      .router-link-exact-active {
        font-weight: bold;
      }

      .router-link-exact-active::before {
        content: "";
        background-image: url(../assets/img/icon.png);
        background-repeat: no-repeat;
        background-size: 15px 14px;
        width: 15px;
        height: 14px;
        margin-right: 10px;
        display: inline-block;
      }
    }

    .bh-lesson-right {
      width: 750px;
      float: right;
      margin-bottom: 20px;

      p {
        text-indent: 2rem;
        line-height: 200%;
        font-weight: bold;
        background-color: #efefef;
        padding: 0 10px;
      }

      img {
        float: right;
      }
    }

    .bh-lesson-content {
      clear: both;
      width: 960px;
      margin-left: auto;
      margin-left: auto;

      .bh-content-wapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;

        .bh-content-icon {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          text-align: center;

          p {
            color: #FFFFFF;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 10px;
            position: relative;
            left: 5px;
          }
        }

        .bh-content-contanier {
          width: 700px;
          margin: 40px 30px;
        }

        .bh-content-contanier p {
          font-size: 14px;
          font-weight: bold;
          line-height: 200%;
          width: 600px;
        }

        .bh-content-contanier p span {
          display: block;
          font-weight: normal;
          margin-bottom: 20px;
        }

        .icon-red {
          background-color: #cc3333;
        }

        .icon-green {
          background-color: #336666;
        }

        .icon-blue {
          background-color: #2578b5;
        }

        .c-red {
          border-top: 1px solid #cc3333;
        }

        .c-green {
          border-top: 1px solid #336666;
        }

        .c-blue {
          border-top: 1px solid #2578b5;
        }
      }
    }
    
    .bh-lesson-footer {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-end;
      margin-right: 80px;
      margin-bottom: 100px;

      .bh-footer-content {
        font-size: 14px;
        font-weight: bold;
        margin-right: 40px;
        text-align: right;
        line-height: 200%;
      }

      .bh-footer-pic {
        width: 90px;
        height: 90px;
        background-size: 90px 90px;
        background-repeat: no-repeat;
        background-image: url(../assets/img/bh-lesson-pic2.png);
        border-radius: 50%;
      }
    }
  }
</style>
