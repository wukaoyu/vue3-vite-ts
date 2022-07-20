<template>
  <div>
    <a-card title="按钮组件">
      <div class="handle">
        <p class="title">操作</p>
        <a-button @click="changeLoading">loading</a-button>
        <a-button @click="changeSize('large')">大</a-button>
        <a-button @click="changeSize('default')">中</a-button>
        <a-button @click="changeSize('small')">小</a-button>
        <a-button @click="changeDanger()">危险按钮</a-button>
      </div>
      <div class="content">
        <p class="title">不同type</p>
        <a-button type="primary" :size="btnSize" :danger="btnDanger" :loading="isLoading">重要按钮（type:primary）</a-button>
        <a-button type="dashed" :size="btnSize" :danger="btnDanger" :loading="isLoading">虚线按钮（type:dashed）</a-button>
        <a-button type="text" :size="btnSize" :danger="btnDanger" :loading="isLoading">文字按钮（type:text）</a-button>
        <a-button type="link" :size="btnSize" :danger="btnDanger" :loading="isLoading">链接按钮（type:link）</a-button>
        <a-button :size="btnSize" :danger="btnDanger" :loading="isLoading">默认按钮</a-button>
      </div>
      <div class="content" :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
        <p class="title">幽灵模式ghost</p>
        <a-button ghost type="primary" :size="btnSize" :danger="btnDanger" :loading="isLoading">重要按钮（type:primary）</a-button>
        <a-button ghost type="dashed" :size="btnSize" :danger="btnDanger" :loading="isLoading">虚线按钮（type:dashed）</a-button>
        <a-button ghost :size="btnSize" :danger="btnDanger" :loading="isLoading">默认按钮</a-button>
      </div>
    </a-card>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const btnSize = ref('default')
const isLoading = ref(false)
const btnDanger = ref(false)

// 更改按钮loading状态
const changeLoading = () => {
  isLoading.value = !isLoading.value
}
// 更该按钮大小
const changeSize = (type: string) => {
  btnSize.value = type
}

// 更改按钮危险状态
const changeDanger = () => {
  btnDanger.value = !btnDanger.value
}
</script>

<style scoped lang='less'>
.handle{
  margin-bottom: 10px;
}
.content{
  margin-bottom: 20px;
}
.title{
  margin-bottom: 10px;
  font-weight: 500;
}
</style>