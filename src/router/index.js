import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from "../views/AboutView.vue";
import FreeView from "../views/FreeView.vue";
import ActualView from "../views/ActualView.vue";
import LightView from "../views/LightView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/free',
        name: 'free',
        component: FreeView
    },
    {
        path: '/actual',
        name: 'actual',
        component: ActualView
    },
    {
        path: '/light',
        name: 'light',
        component: LightView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
