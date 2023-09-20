<template>
    <div>
      <app-page></app-page>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import TopBar from "../components/topbar.vue";
  
  export default{
    name: "TopBarView",
    components: {
      "app-page": TopBar,
    },
  };
  </script>