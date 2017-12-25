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
          title: groupTitle,
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

    activePatients: {
      ids: [],
      activeId: ''
    },

    archivePatients: {
      ids: [],
      activeId: ''
    },

    groups: {
      ids: [],
      items: {},
      activeId: ''
    },

    filter: {
      search: '',
      isPending: false,
      ids: []
    }
  },

  mutations: {
    init (state, payload) {
      const { all, groups, activeIds, archiveIds } = parseData(payload);
      state.all = all;
      state.groups = groups;
      state.activePatients = {
        ids: activeIds,
        activeId: ''
      };
      state.archivePatients = {
        ids: archiveIds,
        activeId: ''
      };
    }
  },

  actions: {
  }
};
