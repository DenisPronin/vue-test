<template>
  <div class="deposit-station-list-container">
    <div v-if="this.activeRoute.routeName === 'groupId'">
      <h2 class="group-title">{{list.label}}</h2>
    </div>
    <div role="tablist" class="deposit-station-list">
      <deposit-station-list-item
        v-for="id in list.ids"
        :item='allItems[id]'
        :isGroup='isGroup'
        :key='id'
      />
    </div>
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
        return data;
      },

      allItems  () {
        const activeId = this.activeRoute.routeName;
        const patients = this.$store.state.patients;
        let items = patients.all.items;
        if (activeId === 'group') {
          items = patients.group.items;
        }
        return items;
      }
    }

  };
</script>

<style scoped>
  .deposit-station-list-container {
    border: 1px solid #ccc;
    height: 100%;
    width: 400px;
  }

  .deposit-station-list {
    padding: 0;
    margin: 0;
  }

  .group-title {
    padding: 0 1.25rem;
  }
</style>
