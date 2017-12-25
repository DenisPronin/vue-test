<template>
  <div class="deposit-station-navigation">

    <ul class="icons-list">
      <deposit-station-navigation-icon
        v-for="id in navigation.ids"
        :active-id='activeRoute.routeName'
        :item='navigation.items[id]'
        :key="id"
      />
    </ul>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import DepositStationNavigationIcon from './DepositStationNavigationIcon';

  export default {
    components: { DepositStationNavigationIcon },
    name: 'DepositStationNavigation',

    props: {
      activeRoute: {
        type: Object,
        required: true
      }
    },

    computed: mapState({
      navigation: state => state.navigation
    })

  };
</script>

<style scoped>
  .deposit-station-navigation {
    background-color: #565d7a;
    color: #ffffff;
    height: 100%;
    padding: 15px 0;
    width: 40px;
  }

  .icons-list {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
</style>
