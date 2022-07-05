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

<template>
  <div>
    {{count}}
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
