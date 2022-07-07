import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  css:{
    preprocessorOptions: {
      less:{
        javascriptEnabled: true
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  server: {
    proxy: { // 配置域名代理
      "/api": {
        target: "http://localhost:5000/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
})
