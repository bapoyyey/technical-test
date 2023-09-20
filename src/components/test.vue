<template>
   

<div class="parent md:h-screen md:grid md:grid-cols-6">
  <SideBarNav/>

<main class="main bg-gray-200 md:col-span-5">

<TopBarNav/>
<div class="w-[95%] mx-auto py-4 ">
<div class="flex justify-center my-6">
  
        <div class="w-4/12 p-4 pl-0 relative">
         
          <div class="bg-white p-4 rounded shadow">
       
            <p>pending</p>
            <h1 class="font-bold text-2xl">2.480,30</h1>
          </div>
        
          <div class="absolute top-0 right-0 m-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </div>

          <div class="flex bg-gray-100 w-full p-4 justify-between">
            <p class="mb-0">Last Month</p>
            <h1 class="mb-0 ml-2">View More</h1>
           </div>

        </div>

      
        <div class="w-1/3 p-4  px-2 relative">
          <!-- Card 2 content here -->
          <div class="bg-white p-4 rounded shadow">
       
            <p>paid</p>
            <h1 class="font-bold text-2xl">84.310</h1>
          </div>
        
          <div class="absolute top-0 right-0 m-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </div>

          <div class="flex bg-gray-100 w-full p-4 justify-between">
            <p class="mb-0">Last Month</p>
            <h1 class="mb-0 ml-2">View More</h1>
           </div>
        </div>

        <div class="w-1/3 p-4 pr-0 relative">
      
          <div class="bg-white p-4 rounded shadow">
    
            <p>rejected</p>
            <h1 class="font-bold text-2xl">12.155</h1>
          </div>
        
          <div class="absolute top-0 right-0 m-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </div>

          <div class="flex bg-gray-100 w-full p-4 justify-between">
            <p class="mb-0">Last Month</p>
            <h1 class="mb-0 ml-2">View More</h1>
           </div>
        </div>
      </div>
    </div>




<div class="w-[95%] bg-white mx-auto py-4 border border-gray-300 border-4 border-sm rounded-lg shadow">
  <div class="pl-6 pb-6 font-bold text-2xl">
    UserList
  </div>
  <table class="w-full mx-auto">

  
  <thead>
      <tr class="bg-gray-100">
        <th class="p-2 py-6 text-cemter font-normal">Id</th>
        <th class="p-2  py-6 text-left font-normal">User</th>
        <th class="p-2 py-6 text-left font-normal">Date Of Birth</th>
        <th class="p-2 py-6 text-left font-normal">Email</th>
        <th class="p-2  py-6 text-left font-normal">Job</th>
        <th class="p-2 py-6 text-left font-normal">Country</th>
        <th class="p-2  py-6 text-left font-normal">Action</th>
      </tr>
    </thead>

    <tbody v-for="(tag, index) in article.users" :key="index">
      <tr>
        <td class="p-2 text-center">{{ tag.id }}</td>
        <td class="p-2 text-left">
          <div class="flex items-center">
            <img class="h-10 w-10 flex-shrink-0 rounded-full" :src="tag.profile_picture" alt="Profile Picture">
            <span class="pl-2 flex-shrink font-bold">{{ tag.first_name }} {{ tag.last_name }}</span>
          </div>
        </td>
        <td class="p-2 text-left">{{ new Date(tag.date_of_birth).toLocaleDateString('en-GB').split('/').join(' / ') }}</td>
        <td class="p-2 text-left font-bold">{{ tag.email }}</td>
        <td class="p-2 text-left">{{ tag.job }}</td>
        <td class="p-2 text-left font-bold">{{ tag.country }}</td>
        <td class="p-2 text-left">
          <button class="bg-white border hover:bg-gray-500 font-bold py-1 px-4 rounded" @click="ShowModal(tag)">View Detail</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<transition name="modal-fade">
<div v-if="showmodal" class="h-full">
  <div class="bg-slate-800 bg-opacity-10 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
    <div class="bg-white w-2/4 h-2/4 p-4 rounded-md text-center relative">
      <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-600" @click="StopModal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div class="h-full overflow-y-auto">
        <div class="flex items-center text-left"> <!-- Added text-left class here -->
          <img class="mx-auto rounded-full h-64 w-64 flex-shrink-0" v-bind:src="blabla.profile_picture">
          <div class="mx-auto px-2 flex-shrink">
            <span class="text-6xl">{{ blabla.first_name }} {{ blabla.last_name }}</span>
            <br><br>
            <h1 class="text-l">{{ blabla.email }}</h1>
            <h1 class="text-l">{{ blabla.phone }}</h1>
          </div>
        </div>
        <p class="text-lg mt-4 text-left">gender : {{ blabla.gender }}</p>
        <p class="text-lg mt-4 text-left">job : {{ blabla.job }}</p>
        <p class="text-lg mt-4 text-left">street : {{ blabla.street }}</p>
        <p class="text-lg mt-4 text-left">city: {{ blabla.city }}</p>
        <p class="text-lg mt-4 text-left">state : {{ blabla.state }}</p>
        <p class="text-lg mt-4 text-left">country : {{ blabla.country }}</p>
        <p class="text-lg mt-4 text-left">latitude : {{ blabla.latitude }}</p>
        <p class="text-lg mt-4 text-left">longitude : {{ blabla.longitude }}</p>
      </div>
    </div>
  </div>
</div>
</transition>




  </main>

</div>
   
  
</template>
  

<script lang="ts">
import axios from "axios";
import SideBarView from '../views/sidebarview.vue'
import TopBarView from '../views/topbarview.vue'
export default {
  name: "Test",
  data(){
    return{
      article:[],
      showmodal:false,
      blabla:null
    }
  },
  mounted(){
    axios
      .get("https://api.slingacademy.com/v1/sample-data/users")
      .then((response) => {
        this.article = response.data;
        // console.log(response.data)
      })
      .catch((error) => console.log(error));
  },
  components: {
      "SideBarNav": SideBarView,
      "TopBarNav": TopBarView,
    },
    methods: {
    ShowModal(user) {
      this.blabla = user;
      this.showmodal = true;
    },
    StopModal() {
      this.showmodal = false;
    }
}
}

</script>

<style>
/* Add your modal styles here */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.3s, visibility 0.3s;
  opacity: 0;
  visibility: hidden;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s, visibility 0.3s;
}

.modal-fade-enter, .modal-fade-leave-to /* .modal-fade-leave-active in <2.1.8 */ {
  opacity: 0;
  visibility: hidden;
}
</style>