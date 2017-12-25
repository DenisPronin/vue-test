import Vue from 'vue';
import Router from 'vue-router';
import DepositStation from '@/components/DepositStation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/AZ',
      name: 'AZ',
      component: DepositStation
    },
    {
      path: '/group',
      name: 'group',
      component: DepositStation
    },
    {
      path: '/group/:id',
      name: 'groupId',
      component: DepositStation
    },
    {
      path: '/archive',
      name: 'archive',
      component: DepositStation
    }
  ]
});
