import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count += 1;
    },

    decrement (state, payload) {
      state.count -= payload;
    }
  },

  actions: {
    increment ({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 500);
    }
  }
});

export default store;
