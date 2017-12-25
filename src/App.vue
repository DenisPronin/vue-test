<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'normalize.css';

  export default {
    name: 'app'
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
</style>
