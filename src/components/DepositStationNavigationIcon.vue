<template>
  <li class="icons-list__item">
    <router-link :to="item.id" v-bind:class="classObject"></router-link>
  </li>
</template>

<script>
  export default {
    name: 'DepositStationNavigationIcon',

    props: {
      item: {
        type: Object,
        required: true
      },
      activeId: {
        type: String,
        required: true
      }
    },

    computed: {
      classObject () {
        const id = this.item.id;
        return ['icon', `icon-${id}`, {
          'icon-active': id === this.activeId,
          'fa fa-sort-alpha-asc': id === 'AZ',
          'fa fa-users': id === 'group',
          'fa fa-archive': id === 'archive'
        }];
      }
    }
  };
</script>

<style scoped>
  .icons-list__item {
    color: #ccc;
    cursor: pointer;
    font-size: 26px;
    display: flex;
    list-style: none;
    margin-bottom: 15px;
  }

  .icon {
    color: inherit;
  }

  .icons-list__item:hover,
  .icon-active {
    color: #ffffff;
  }
</style>
