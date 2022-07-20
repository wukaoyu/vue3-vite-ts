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
        icon: 'MailOutlined',
        meta: {
          navName: 'antd练习',
          icon: 'MailOutlined', 
        },
        children: [
          {
            path: '/antd/commonly',
            name: 'antdCommonly',
            component: () => import("@/views/antd/commonly.vue"),
            meta: {
              navName: '常用组件',
              keepAlive: true
            },
          },
          {
            path: '/antd/form',
            name: 'antdFrom',
            component: () => import("@/views/antd/form.vue"),
            meta: {
              navName: '表单',
              keepAlive: true
            },
          },
          {
            path: '/antd/table',
            name: 'antdTable',
            component: () => import("@/views/antd/table.vue"),
            meta: {
              navName: '表格',
              keepAlive: true
            },
          }
        ]
      }
    ]
  }
]
export default routerArr