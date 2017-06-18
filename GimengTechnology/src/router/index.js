import Vue from 'vue';
import Router from 'vue-router';
import gtIndex from '@/components/Index';
import gtNews from '@/components/News';
import gtContent from '@/components/Content';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: gtIndex,
    },
    {
      path: '/news',
      name: 'News',
      component: gtNews,
    },
    {
      path: '/content',
      name: 'Content',
      component: gtContent,
    },
  ],
});
