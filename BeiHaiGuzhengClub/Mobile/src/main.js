import Vue from 'vue';
import Vuetify from 'vuetify';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App';
import router from './router';

Vue.use(Vuetify);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
