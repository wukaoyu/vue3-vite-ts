import { RouteRecordRaw } from "vue-router";

const routerArr:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import("@/views/index.vue"),
    meta: {
      navName: '首页'
    }
  }
]
export default routerArr