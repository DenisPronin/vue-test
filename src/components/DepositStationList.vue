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
  export default {
    name: 'DepositStationList',

    props: {
      activeRoute: {
        type: Object,
        required: true
      }
    },

    computed: {
      list () {
        const activeId = this.activeRoute.routeName;
        const patients = this.$store.state.patients;
        return patients[activeId];
      },

      allItems () {
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
</style>
