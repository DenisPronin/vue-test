<template>
  <div class="deposit-station">
    <div v-if="isReady" class="deposit-station__ready">
      <deposit-station-navigation />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import DepositStationNavigation from './DepositStationNavigation';

  export default {
    components: { DepositStationNavigation },
    name: 'DepositStation',

    created () {
      this.$store.dispatch('common/loadData');
    },

    computed: mapState({
      isReady: state => !state.common.isPending
    })
  };
</script>

<style scoped>
  .deposit-station {
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
  }

  .deposit-station__ready {
    height: 100%;
  }
</style>
