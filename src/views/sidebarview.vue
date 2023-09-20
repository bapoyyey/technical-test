<template>
    <div>
      <app-page></app-page>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import SideBar from "../components/sidebar.vue";
  
  export default{
    name: "SideBarView",
    components: {
      "app-page": SideBar,
    },
  };
  </script>