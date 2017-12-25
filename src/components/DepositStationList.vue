<template>
  <div class="deposit-station-list-container">
    <ul class="deposit-station-list">
      <li
        v-for="id in list.ids"
      >
        {{allItems[id].label}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'DepositStationList',

    computed: mapState({
      list: (state) => {
        const activeId = state.navigation.activeId;
        const patients = state.patients;
        let data = patients.activePatients;
        if (activeId === 'archive') {
          data = patients.archivePatients;
        }
        if (activeId === 'group') {
          data = patients.groups;
        }
        return data;
      },

      allItems: (state) => {
        const activeId = state.navigation.activeId;
        const patients = state.patients;
        let items = patients.all.items;
        if (activeId === 'group') {
          items = patients.groups.items;
        }
        return items;
      }
    })

  };
</script>

<style scoped>
  .deposit-station-list-container {
    border: 1px solid #ccc;
    height: 100%;
    width: 400px;
  }
</style>
