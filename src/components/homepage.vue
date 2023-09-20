<template>
<div class="parent md:h-screen md:grid md:grid-cols-6">
<SideBarNav/>

<main class="main bg-gray-200 md:col-span-5">
<!-- component -->
<TopBarNav/>
</main>
</div>

</template>
      
    
<script lang="ts">

import SideBarView from '../views/sidebarview.vue'
import TopBarView from '../views/topbarview.vue'
export default {
    name: "HomePage",
    data(){
    return{
    
    }
    },
    
    components: {
        "SideBarNav": SideBarView,
        "TopBarNav": TopBarView,
    },
    
}
</script>