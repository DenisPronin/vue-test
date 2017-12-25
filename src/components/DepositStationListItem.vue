<template>
  <li class="deposit-station-list-item" v-on:click="clickItem">
    {{item.label}}
  </li>
</template>

<script>
  export default {
    name: 'DepositStationListItem',

    props: {
      item: {
        type: Object,
        required: true
      },
      isGroup: {
        type: Boolean,
        required: true
      }
    },

    methods: {
      clickItem () {
        if (this.isGroup) {
          this.$router.push(`/group/${this.item.label}`);
        }
      }
    }

  };
</script>

<style scoped>
  .deposit-station-list-item {
  }
</style>
