import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },  

  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/Home.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
