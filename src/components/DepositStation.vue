<template>
  <div>test</div>
</template>

<script>
  export default {
    name: 'DepositStation',

    created () {
      this.$store.dispatch('common/loadData');
    }
  };
</script>

<style scoped>

</style>
