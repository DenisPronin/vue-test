<template>
  <b-card no-body class="deposit-station-list-item" v-on:click="clickItem">

    <b-card-header header-tag="header" class="deposit-station-list-item-header" role="tab">
      <b>{{item.label}}</b>
      <i :class="['fa', {'fa-caret-down': !isExpanded, 'fa-caret-up': isExpanded}]" />
    </b-card-header>

    <div v-if="!isGroup">
      <b-collapse :id="'collapse-item' + item.id" :visible="isExpanded" role="tabpanel">
        <b-card-body class="deposit-station-list-item-body">
          <div>Tel: {{item.details.tel}}</div>
          <div>Email: {{item.details.email}}</div>
        </b-card-body>
      </b-collapse>
    </div>

  </b-card>
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
    border: 0;
    border-bottom: 1px solid #ccc;
    list-style: none;
    padding: 0;
    width: 100%;
  }

  .deposit-station-list-item-header {
    align-items: center;
    background: #fff;
    border-bottom: 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .deposit-station-list-item-body {
    padding-top: 0;
  }
</style>
