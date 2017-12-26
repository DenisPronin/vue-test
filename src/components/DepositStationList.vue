<template>
  <div class="deposit-station-list-container">

    <div class="group-header" v-if="isGroupId">
      <h3>{{list.label}}</h3>
      <a href="#" v-on:click="goBack">Back</a>
    </div>

    <div role="tablist" :class="['deposit-station-list', {'deposit-station-list--groupId': isGroupId}]">
      <deposit-station-list-item
        v-for="id in list.ids"
        :item='allItems[id]'
        :isGroup='isGroup'
        :key='id'
      />
    </div>

    <b-pagination class="deposit-station-list-pagination" size="md" :total-rows="list.total" v-model="list.page" :per-page="list.pageSize" v-on:change="changePage">
    </b-pagination>

  </div>
</template>

<script>
  import DepositStationListItem from './DepositStationListItem';

  export default {
    components: { DepositStationListItem },
    name: 'DepositStationList',

    props: {
      activeRoute: {
        type: Object,
        required: true
      }
    },

    computed: {
      isGroupId () {
        return this.activeRoute.routeName === 'groupId';
      },

      isGroup () {
        return this.activeRoute.routeName === 'group';
      },

      list () {
        const { routeName, routeParams } = this.activeRoute;
        const patients = this.$store.state.patients;
        let data = patients[routeName];
        if (routeName === 'groupId') {
          const groupId = routeParams.id;
          data = patients.group.items[groupId];
        }
        const start = (data.page - 1) * data.pageSize;
        let end = start + data.pageSize;
        end = end > data.ids.length ? data.ids.length : end;
        return { ...data, ids: data.ids.slice(start, end) };
      },

      allItems  () {
        const routeName = this.activeRoute.routeName;
        const patients = this.$store.state.patients;
        let items = patients.all.items;
        if (routeName === 'group') {
          items = patients.group.items;
        }
        return items;
      }
    },

    methods: {
      goBack () {
        this.$router.go(-1);
      },

      changePage (page) {
        const { routeName, routeParams } = this.activeRoute;
        this.$store.commit('patients/changePage', {
          page,
          listId: routeName,
          groupId: routeParams.id
        });
      }
    }

  };
</script>

<style scoped>
  .deposit-station-list-container {
    border: 1px solid #ccc;
    height: 100%;
    overflow: hidden;
    width: 400px;
  }

  .deposit-station-list {
    padding: 0;
    margin: 0;
    overflow: auto;
    max-height: calc(100vh - 62px);
  }

  .deposit-station-list--groupId {
    max-height: calc(100vh - 103px);
  }

  .deposit-station-list-pagination {
    padding-left: 12px;
    padding-top: 12px;
  }

  .group-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 1.25rem;
  }
</style>
<style>
  .page-link,
  .page-item.disabled .page-link {
    border-color: #ccc;
    color: #565d7a;
  }

  .page-item.active .page-link,
  .page-item.active .page-link:active {
    background-color: #565d7a;
    border-color: #565d7a;
    box-shadow: none;
    outline: none;
  }
</style>
