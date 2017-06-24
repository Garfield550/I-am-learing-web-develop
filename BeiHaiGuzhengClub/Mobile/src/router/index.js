import Vue from 'vue';
import Router from 'vue-router';
import bhIndex from '@/components/Index';
import bhIntro from '@/components/Intro';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: bhIndex,
    },
    {
      path: '/intro',
      name: 'Intro',
      component: bhIntro,
    },
  ],
});
