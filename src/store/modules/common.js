import api from '../../api/patientsApi';

export default {
  namespaced: true,

  state: {
    isOpened: true,
    isPending: true
  },

  mutations: {
    setPending (state, value) {
      state.isPending = value;
    },

    toggleSidebar (state) {
      state.isOpened = !state.isOpened;
    }
  },

  actions: {
    loadData ({ commit }) {
      commit('common/setPending', true, { root: true });
      api.getAllItems()
        .then((response) => {
          commit('navigation/init', response.navigation, { root: true });
          commit('patients/init', response.collections.patient, { root: true });
          commit('common/setPending', false, { root: true });
        })
        .catch((error) => {
          commit('common/setPending', false, { root: true });
          console.log(error);
        });
    }
  }
};
