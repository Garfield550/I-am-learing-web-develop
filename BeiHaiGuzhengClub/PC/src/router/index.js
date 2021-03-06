import Vue from 'vue';
import Router from 'vue-router';
import bhIndex from '@/components/Index';
import bhContact from '@/components/Contact';
import bhIntro from '@/components/Intro';
import bhIntro2 from '@/components/Intro2';
import bhPurchase from '@/components/Purchase';
import bhEvent from '@/components/Event';
import bhLesson from '@/components/Lesson';
import bhTutor from '@/components/Tutor';

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
    {
      path: '/intro2',
      name: 'Intro2',
      component: bhIntro2,
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
    {
      path: '/lesson',
      name: 'Lesson',
      component: bhLesson,
    },
    {
      path: '/tutor',
      name: 'Tutor',
      component: bhTutor,
    },
  ],
});
