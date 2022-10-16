<template>
    <div id="app">
      <Hehe msg="Adjusted Version!!!" />
    </div>
  </template>
  
  <script>
  import Hehe from './components/Hehe.vue';
  export default {
    components: {
      Hehe,
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>