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
          page: 1
        };
      }
      groups.items[groupTitle].ids.push(id);
    }
  });

  // add pagination for groups
  groups.page = 1;
  groups.pageSize = 25;
  groups.total = groups.ids.length;

  groups.ids.forEach((groupId) => {
    const group = groups.items[groupId];
    group.page = 1;
    group.pageSize = 25;
    group.total = group.ids.length;
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
      page: 1,
      pageSize: 25,
      total: 0
    },

    archive: {
      ids: [],
      page: 1,
      pageSize: 25,
      total: 0
    },

    group: {
      ids: [],
      items: {},
      page: 1,
      pageSize: 25,
      total: 0
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
        ...state.AZ,
        ids: activeIds,
        total: activeIds.length,
        page: 1
      };
      state.archive = {
        ...state.archive,
        ids: archiveIds,
        total: archiveIds.length,
        page: 1
      };
    },

    changePage (state, payload) {
      const { page, listId, groupId } = payload;
      if (listId === 'groupId') {
        state.group.items[groupId].page = page;
      } else {
        state[listId].page = page;
      }
    }
  },

  actions: {
  }
};
