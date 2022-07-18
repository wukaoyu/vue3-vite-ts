import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import store from "./store/index";

import * as antIcons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
// 添加到全局
app.config.globalProperties.$antIcons = antIcons
app.use(router)
app.use(store)
app.mount('#app')
