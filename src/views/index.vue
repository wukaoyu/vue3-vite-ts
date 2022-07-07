<template>
  <div>
    <a-button>123</a-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

import { login } from "@/api/login";

const store = useStore()
const count = ref(store.state.count)
login({account: 'wukaoyu', password: '123456', identity: 1}).then(res => {
  console.log(res)
})
</script>

<style scoped lang="less">
</style>
