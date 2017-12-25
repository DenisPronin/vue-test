<template>
  <li class="deposit-station-list-item" v-on:click="clickItem">
    <div class='item-main'>
      <b>{{item.label}}</b>
      <i class='fa fa-caret-down' />
    </div>
    <div class='item-detail' v-if="isExpanded ">
      <div>Tel: {{item.details.tel}}</div>
      <div>Email: {{item.details.email}}</div>
    </div>
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

    data () {
      return {
        isExpanded: false
      };
    },

    methods: {
      clickItem () {
        if (this.isGroup) {
          this.$router.push(`/group/${this.item.label}`);
        } else {
          this.isExpanded = !this.isExpanded;
        }
      }
    }

  };
</script>

<style scoped>
  .deposit-station-list-item {
    border-bottom: 1px solid #ccc;
    list-style: none;
    padding: 15px;
    width: 100%;
  }

  .item-main {
    display: flex;
    justify-content: space-between;
  }

  .item-detail {

  }
</style>
