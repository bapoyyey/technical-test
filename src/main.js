import { createApp } from "vue";

import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import router from './router'



createApp(App).use(router).mount('#app')
