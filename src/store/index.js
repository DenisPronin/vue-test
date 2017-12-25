import Vue from 'vue';
import Vuex from 'vuex';
import common from './modules/common';
import navigation from './modules/navigation';
import patients from './modules/patients';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    common,
    navigation,
    patients
  }
});

export default store;
