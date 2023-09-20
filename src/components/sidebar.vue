<template>
  <section class="sidebar bg-green-400 md:col-span-1">
    <aside class="flex flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2 h-full w-full" x-show="asideOpen">
      <a href="http://localhost:5173" class="flex items-center space-x-2 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
       
        <span class="text-3xl font-bold">heylink.</span>
      </a>

      <a href="http://localhost:5173/contact" class="flex items-center space-x-2 rounded-md px-4 py-3 hover:bg-gray-100 hover:text-blue-600">
        <img src="https://img.icons8.com/plasticine/2x/overview-pages-2.png" alt="Dashboard Icon" class="w-6 h-6" /> <!-- Dashboard Icon -->
        <span class="pl-2">Tugas 1</span>
      </a>

      <a href="http://localhost:5173/about" class="flex items-center space-x-2 rounded-md px-4 py-3 hover:bg-gray-100 hover:text-blue-600">
        <img src="https://img.icons8.com/plasticine/2x/overview-pages-2.png" alt="Overview Icon" class="w-6 h-6" /> <!-- Overview Icon -->
        <span class="pl-2">Tugas 2</span>
      </a>
    </aside>
  </section>
</template>



<script lang="ts">
export default {
  name: "SideBar"
}
</script>