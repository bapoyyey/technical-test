<template>
    <div>
      <app-page></app-page>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import Test from "../components/test.vue";
  
  export default{
    name: "TestView",
    components: {
      "app-page": Test,
    },
  };
  </script>