import api from '../../api/patientsApi';

export default {
  namespaced: true,

  state: {
    isOpened: true,
    isPending: false
  },

  mutations: {
    toggleSidebar (state) {
      state.isOpened = !state.isOpened;
    }
  },

  actions: {
    loadData ({ commit }) {
      api.getAllItems()
        .then((response) => {
          commit('navigation/init', response.navigation, { root: true });
          commit('patients/init', response.collections.patient, { root: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
