<template lang="pug">
  .footer
    .telicon
    .telnum
      p 0760-86283555
      span 全国服务热线
    .vline
    .copyaddr
      p 版权所有：山东信息职业技术学院
      span 公司地址：潍坊市山东信息职业技术学院
      span 备案：粤备ICP14011927号
</template>

<script>
export default {
  name: 'gtFooter',
};
</script>

<style lang="scss">
$footercolor: #006EAA !default;
$rightmargin: 10px !default;

.footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: $footercolor;
  color: #FFFFFF;

  > .telicon {
    width: 60px;
    height: 60px;
    background-image: url(../assets/tel.svg);
    background-repeat: no-repeat;
    background-size: 60px;
    margin-right: $rightmargin;
  }

  > .telnum {
    margin-right: $rightmargin;

    p {
      font-weight: bold;
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 5px;
    }

    span {
      margin-left: 10px;
      font-size: 12px;
    }
  }

  > .vline {
    border-right: 1px solid #FFFFFF;
    height: 50px;
    margin-right: $rightmargin;
  }

  > .copyaddr {
    p, span {
      font-size: 14px;
    }
    
    p {
      margin-top: 10px;
      margin-bottom: 5px;
    }

    span {
      margin-right: 20px;
    }

    span:last-child {
      margin-right: 0;
    }
  }
}
</style>
