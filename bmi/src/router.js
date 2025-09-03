import { createRouter, createWebHistory } from 'vue-router'
import bmi from './components/bmi.vue'
import WatchTest from './components/WatchTest.vue'
import WatchEffect from './components/WatchEffect.vue'
const routes = [
    { path: '/', name: 'home', component: bmi },
    { path: '/WatchTest', name: 'WatchTest', component: WatchTest },
    { path: '/WatchEffect', name: 'WatchEffect', component: WatchEffect }]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router