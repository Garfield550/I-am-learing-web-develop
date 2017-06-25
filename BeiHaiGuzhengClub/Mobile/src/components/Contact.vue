<template lang="pug">
  .bh-contact
    v-card.bh-contact-card
      v-card-row
        v-card-title 北海琴社
      v-card-row
        p
          |  （潍坊馆）
          br
          |  潍坊市潍城区福寿街与和平路交叉口向西100米路南
          br
          |  联系电话：13605361459、15063439645
          br
          |  微信号：13605361459
          br
          |  QQ交流群：790216632
          br
          |  公交27路、23路、环61路中国银行证券站
      v-card-row
        p
          |  （北京馆）
          br
          |  北京市  海淀区  海淀中街16号  中关村公馆A座1209
          br
          |  联系电话：15210934090 、18618263746
          br
          |  微信平台：bhqs2012
          br
          |  新浪微博：@北海琴社
          br
          |  QQ交流群：130233085
          br
          |  邮箱：bhqs2012@163.com
    v-card.bh-contact-card.mt-3
      v-card-row
        .bh-content-amap
          el-amap(vid="amapBeiHai" :zoom="zoom" :center="center" :plugin="plugin")
            el-amap-marker(:position="position" :visible="visible" :draggable="draggable")
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
      plugin: [{
        pName: 'ToolBar',
      }],
    };
  },
};
</script>

<style lang="stylus">
  make-card-space(arg)
    padding arg
    box-sizing border-box
  .bh-contact-card
    make-card-space(10px)
    .bh-content-amap
      width 100%
      height 400px
</style>
