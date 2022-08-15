<template>
  <div>
    <!-- <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.name"/>
      </keep-alive>
      <component :is="Component" :key="route.name" v-if="!route.meta.keepAlive" />
    </router-view> -->
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
</script>

<style scoped lang='less'>
</style>