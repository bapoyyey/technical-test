<template>
    <div>
      <app-page></app-page>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import HeyLinkHome from "../components/heylink.vue";
  
  export default{
    name: "HeyLinkView",
    components: {
      "app-page": HeyLinkHome,
    },
  };
  </script>