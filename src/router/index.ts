import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import routerArr from "./data";

const routes:Array<RouteRecordRaw> = [
  ...routerArr,
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/login.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router