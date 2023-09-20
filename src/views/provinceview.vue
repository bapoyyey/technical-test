<template>
    <div>
      <app-page></app-page>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import ProvinceHome from "../components/province.vue";
  
  export default{
    name: "ProvinceView",
    components: {
      "app-page": ProvinceHome,
    },
  };
  </script>