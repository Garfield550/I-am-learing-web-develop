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
</template>

<script>
export default {
  name: 'gtIndex',
};
</script>

<style lang="scss">
$iconsize: 60px !default;
$circlesize: 150px !default;
$indexcolor: #006EAA !default;

  .index {
    > .boardBar {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      padding: 60px 0;
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
    }
  }
</style>
