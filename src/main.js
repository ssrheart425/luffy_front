import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import cookies from 'vue-cookies'
import settings from "./assets/js/settings";
import './assets/css/global.css'

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(ElementPlus).provide('$cookies', cookies).provide('$settings',settings).mount('#app')
