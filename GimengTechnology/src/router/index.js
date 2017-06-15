import Vue from 'vue';
import Router from 'vue-router';
import gtIndex from '@/components/Index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: gtIndex,
    },
  ],
});
