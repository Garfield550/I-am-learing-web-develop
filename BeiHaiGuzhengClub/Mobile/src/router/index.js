import Vue from 'vue';
import Router from 'vue-router';
import bhIndex from '@/components/Index';
import bhIntro from '@/components/Intro';
import bhPurchase from '@/components/Purchase';
import bhEvent from '@/components/Event';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    {
      path: '/purchase',
      name: 'Purchase',
      component: bhPurchase,
    },
    {
      path: '/event',
      name: 'Event',
      component: bhEvent,
    },
  ],
});
