import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/newVehicle',
    name: 'newVehicle',
    meta: { newVehicleDialog: true },
    component: HomeView
  },
  {
    path: '/newToll',
    name: 'newToll',
    meta: { newTollDialog: true },
    component: HomeView
  },
  {
    path: '/tollLists',
    name: 'tollLists',
    meta: { tollLists: true },
    component: HomeView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
