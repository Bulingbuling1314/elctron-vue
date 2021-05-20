import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/home/index.vue'

export const constantRouterMap = [
  {
    path: '/',
    name: '/',
    component: Home
  }
]

export default createRouter({
  history: createWebHashHistory(), //后端支持可开
  routes: constantRouterMap
})