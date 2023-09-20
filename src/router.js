import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/homepage.vue'
import HeyLinkView from '../src/views/heylink.vue'
import TestView from '../src/views/TestView.vue'
import ProvinceView from '../src/views/provinceview.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component:ProvinceView
    },
    {
      path: '/contact',
      component:TestView
    }
  ],
})
