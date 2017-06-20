import Vue from 'vue';
import Router from 'vue-router';
import bhIndex from '@/components/Index';
import bhContact from '@/components/Contact';
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
      path: '/contact',
      name: 'Contact',
      component: bhContact,
    },
    {
      path: '/intro',
      name: 'Intro',
      component: bhIntro,
    },
  ],
});
