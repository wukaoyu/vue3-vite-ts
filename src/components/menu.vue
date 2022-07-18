<template>
  <div class="menu">
    <div class="menu-head" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="collapsed" class="icon" />
      <MenuFoldOutlined v-else class="icon"/>
    </div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed">
      <MenuList :menuList="navData"></MenuList>
      <!-- <div v-for="item in navData">
        <a-sub-menu v-if="item.children">
          <template #icon>
            <component v-if="item.icon" :is="globalProperties.$antIcons[item.icon]"></component>
          </template>
          <template #title>{{item.meta?.navName}}</template>
          <div v-for="childItem in item.children">
            <a-menu-item >
              <router-link :to="childItem.path">{{childItem.meta?.navName}}</router-link>
            </a-menu-item>
          </div>
        </a-sub-menu>
        <a-menu-item v-else>
          <router-link :to="item.path">{{item.meta?.navName}}</router-link>
        </a-menu-item>
      </div> -->
    </a-menu>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import routerArr  from "@/router/data";

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const collapsed = ref(false)
const navData = ref(routerArr[0].children)
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<style scoped lang='less'>
.menu{
  height: 100vh;
  overflow: auto;
  background-color: #001529;
  .menu-head{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 40px;
    .icon{
      color: #fff;
      font-size: 16px;
      text-align:center;
    }
  }
}
.ant-menu{
  width: 256px;
}
.ant-menu.ant-menu-inline-collapsed{
  width: 80px;
}
</style>