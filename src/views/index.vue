<template>
  <div class="bkg">
    <div class="nav">
      <Menu />
    </div>
    <div class="content">
      <router-view v-if="$route.meta.keepAlive" v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

import Menu from '@/components/menu.vue'

</script>

<style scoped lang="less">
.bkg{
  display: flex;
}
</style>
