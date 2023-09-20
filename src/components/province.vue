<template>
    <div class="parent md:h-screen md:grid md:grid-cols-6">
      <SideBarNav />
      <main class="main bg-gray-200 md:col-span-5">

        <TopBarNav />
        <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h1 class="text-3xl font-semibold mb-6">Tugas 2</h1>
  
         
            <div>
              <h2 class="text-xl font-semibold mb-4">Get Cities by Province ID</h2>
              <div class="flex space-x-4">
                <input
                  v-model="selectedProvinceId"
                  type="number"
                  class="rounded-full py-2 px-4 border-2 focus:outline-none focus:ring focus:ring-purple-400 flex-1"
                />
                <button @click="getCities" class="bg-purple-500 hover:bg-purple-600 text-white rounded-full py-2 px-4">
                  Get Cities
                </button>
              </div>
              <div v-if="cities.length" class="mt-4">
                <h3 class="text-lg font-semibold">Cities:</h3>
                <ul class="list-disc list-inside">
                  <li v-for="(city, index) in cities" :key="index">{{ city.name }}</li>
                </ul>
              </div>
            </div>
  
            <div class="mt-8">
              <h2 class="text-xl font-semibold mb-4">Get Province Name by City ID</h2>
              <div class="flex space-x-4">
                <input
                  v-model="selectedCityId"
                  type="number"
                  class="rounded-full py-2 px-4 border-2 focus:outline-none focus:ring focus:ring-pink-400 flex-1"
                />
                <button @click="getProvinceName" class="bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2 px-4">
                  Get Province Name
                </button>
              </div>
              <div v-if="provinceName" class="mt-4">
                <h3 class="text-lg font-semibold">Province Name:</h3>
                <p>{{ provinceName }}</p>
              </div>
            </div>
  
          
            <div class="mt-8">
              <h2 class="text-xl font-semibold mb-4">Sort Provinces</h2>
              <div class="flex space-x-4">
                <select
                  v-model="selectedSortProperty"
                  class="rounded-full py-2 px-4 border-2 focus:outline-none focus:ring focus:ring-red-400 flex-1"
                >
                  <option value="id">ID</option>
                  <option value="name">Name</option>
                </select>
                <select
                  v-model="selectedSortOrder"
                  class="rounded-full py-2 px-4 border-2 focus:outline-none focus:ring focus:ring-red-400 flex-1"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
                <button @click="sortProvinces" class="bg-red-500 hover:bg-red-600 text-white rounded-full py-2 px-4">
                  Sort
                </button>
              </div>
              <div v-if="sortedProvinces.length" class="mt-4">
                <h3 class="text-lg font-semibold">Sorted Provinces:</h3>
                <ul class="list-disc list-inside">
                  <li v-for="(province, index) in sortedProvinces" :key="index">{{ province.name }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import provinceData from '../assets/js/province.js';
  import cityData from '../assets/js/city.js';
  import SideBarView from '../views/sidebarview.vue';
  import TopBarView from '../views/topbarview.vue';
  
  export default {
    data() {
      return {
        provinces: provinceData,
        cities: [],
        selectedProvinceId: 1,
        selectedCityId: 1,
        selectedSortProperty: 'id',
        selectedSortOrder: 'asc',
        provinceName: '',
        sortedProvinces: [],
      };
    },
    components: {
      SideBarNav: SideBarView,
      TopBarNav: TopBarView,
    },
    methods: {
      getCities() {
        const provinceId = parseInt(this.selectedProvinceId);
        this.cities = cityData.filter(city => city.provinsi_id === provinceId);
      },
  
      getProvinceName() {
        const cityId = parseInt(this.selectedCityId);
        const city = cityData.find(city => city.id === cityId);
        if (city) {
          const province = this.provinces.find(province => province.id === city.provinsi_id);
          if (province) {
            this.provinceName = province.name;
          }
        } else {
          this.provinceName = 'Province not found';
        }
      },
  
      sortProvinces() {
        const property = this.selectedSortProperty;
        const order = this.selectedSortOrder;
        this.sortedProvinces = [...this.provinces].sort((a, b) => {
          if (property === 'name') {
            const nameA = a[property].toUpperCase();
            const nameB = b[property].toUpperCase();
            if (order === 'asc') {
              return nameA.localeCompare(nameB);
            } else {
              return nameB.localeCompare(nameA);
            }
          } else {
            if (order === 'asc') {
              return a[property] - b[property];
            } else {
              return b[property] - a[property];
            }
          }
        });
      },
    },
  };
  </script>
  