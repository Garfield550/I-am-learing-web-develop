// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import AMap from 'vue-amap';
import 'normalize.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'aef78700d74611fe8f4a2f3c787c53bc',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
