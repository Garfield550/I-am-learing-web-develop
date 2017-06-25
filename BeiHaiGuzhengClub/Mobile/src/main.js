import Vue from 'vue';
import Vuetify from 'vuetify';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import AMap from 'vue-amap';
import App from './App';
import router from './router';

Vue.use(Vuetify);
Vue.use(VueAwesomeSwiper);
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'aef78700d74611fe8f4a2f3c787c53bc',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
