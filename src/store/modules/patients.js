const parseData = (items) => {
  const all = {
    items: {}
  };

  const groups = {
    ids: [],
    items: {}
  };

  const activeIds = [];
  const archiveIds = [];

  items.forEach((item) => {
    const id = item.id;
    all.items[id] = item;

    const statusCollection = (item.status) ? activeIds : archiveIds;
    statusCollection.push(id);


    const groupTitle = item.group;
    if (groupTitle) {
      if (!groups.items[groupTitle]) {
        groups.ids.push(groupTitle);
        groups.items[groupTitle] = {
          label: groupTitle,
          ids: [],
          activeId: ''
        };
      }
      groups.items[groupTitle].ids.push(id);
    }
  });

  return { all, groups, activeIds, archiveIds };
};

export default {
  namespaced: true,
  state: {
    all: {
      items: {}
    },

    AZ: {
      ids: [],
      activeId: ''
    },

    archive: {
      ids: [],
      activeId: ''
    },

    group: {
      ids: [],
      items: {},
      activeId: ''
    },

    filter: {
      isOpened: false,
      search: '',
      isPending: false,
      ids: []
    }
  },

  mutations: {
    init (state, payload) {
      const { all, groups, activeIds, archiveIds } = parseData(payload);
      state.all = all;
      state.group = groups;
      state.AZ = {
        ids: activeIds,
        activeId: ''
      };
      state.archive = {
        ids: archiveIds,
        activeId: ''
      };
    }
  },

  actions: {
  }
};
