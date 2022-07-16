import { RouteRecordRaw } from "vue-router";

const routerArr:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import("@/views/index.vue"),
    meta: {
      navName: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/antd',
        name: 'antd',
        component: () => import("@/views/empty.vue"),
        meta: {
          navName: 'antd练习'
        },
        children: [
          {
            path: '/antd/form',
            name: 'antdFrom',
            component: () => import("@/views/antd/form.vue"),
            meta: {
              navName: '表单',
              keepAlive: true
            },
          }
        ]
      }
    ]
  }
]
export default routerArr