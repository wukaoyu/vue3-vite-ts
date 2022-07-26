<template>
  <div>
    <router-view v-if="$route.meta.keepAlive" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.name"/>
      </keep-alive>
    </router-view>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
</script>

<style scoped lang='less'>
</style>