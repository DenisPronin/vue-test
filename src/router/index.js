import Vue from 'vue';
import Router from 'vue-router';
import DepositStation from '@/components/DepositStation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: DepositStation
    }
  ]
});
