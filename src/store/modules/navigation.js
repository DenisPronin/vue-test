const parseNavigation = (navigation) => {
  const items = {};
  const ids = navigation.map((item) => {
    const id = item.id;
    items[id] = item;
    return id;
  });
  return { ids, items };
};

export default {
  namespaced: true,
  state: {
    ids: [],
    items: {}
  },

  mutations: {
    init (state, payload) {
      const { ids, items } = parseNavigation(payload);
      state.ids = ids;
      state.items = items;
      if (ids.length > 0) {
        state.activeId = ids[0];
      }
    }
  },

  actions: {
  }
};
