import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'todoList',
    component: () => import("@/views/index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router