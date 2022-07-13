<template>
  <div class="bkg">
    <div class="nav">
      <Menu />
    </div>
    <div class="content">
      <router-view></router-view>>
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
