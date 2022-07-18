<template>
  <div>
   <div v-for="(item, index) in menuList">
      <a-sub-menu :key="item.name" v-if="item.children">
        <template #icon>
          <component v-if="item.icon" :is="globalProperties.$antIcons[item.icon]"></component>
        </template>
        <template #title>{{item.meta?.navName}}</template>
        <MenuList :menuList="item.children"></MenuList>
      </a-sub-menu>
      <a-menu-item :key="`${item.name?.toString() + '_' + index}`" v-else>
        <router-link :to="item.path">{{item.meta?.navName}}</router-link>
      </a-menu-item>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, getCurrentInstance, ComponentInternalInstance } from 'vue'
import { RouteRecordRaw } from "vue-router";
import MenuList from './menuList.vue'
// 加载全局变量
const { appContext: { config: { globalProperties }} }  =  getCurrentInstance() as ComponentInternalInstance;

const props = defineProps<{ menuList: Array<RouteRecordRaw> }>()
const menuList = ref(props.menuList)
</script>

<style scoped lang='less'>
</style>