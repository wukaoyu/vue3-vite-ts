<template>
  <div>
    <a-card title="按钮组件">
      <div class="handle">
        <p class="title">操作</p>
        <a-button @click="changeLoading">loading</a-button>
        <a-button @click="changeSize('large')">大</a-button>
        <a-button @click="changeSize('default')">中</a-button>
        <a-button @click="changeSize('small')">小</a-button>
        <a-button @click="changeDanger">危险按钮</a-button>
        <a-button @click="changeDisable">禁用按钮</a-button>
        <a-button @click="changeShape('default')" shape="default">默认形状</a-button>
        <a-button @click="changeShape('circle')" shape="circle">
          <template #icon><SearchOutlined /></template>
        </a-button>
        <a-button @click="changeShape('round')" shape="round">圆角</a-button>
      </div>
      <div class="content">
        <p class="title">不同type</p>
        <a-button type="primary"  :size="btnSize" :shape="btnShape" :danger="btnDanger" :loading="isLoading" :disabled="isDisabled">重要按钮（type:primary）</a-button>
        <a-button type="dashed" :size="btnSize" :shape="btnShape" :danger="btnDanger" :loading="isLoading" :disabled="isDisabled">虚线按钮（type:dashed）</a-button>
        <a-button type="text" :size="btnSize" :shape="btnShape" :danger="btnDanger" :loading="isLoading" :disabled="isDisabled">文字按钮（type:text）</a-button>
        <a-button type="link" :size="btnSize" :shape="btnShape" :danger="btnDanger" :loading="isLoading" :disabled="isDisabled">链接按钮（type:link）</a-button>
        <a-button :shape="btnShape" :size="btnSize" :danger="btnDanger" :loading="isLoading" :disabled="isDisabled">默认按钮</a-button>
      </div>
      <div class="content" :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
        <p class="title">幽灵模式ghost</p>
        <a-button ghost type="primary" :size="btnSize" :shape="btnShape" :danger="btnDanger" :loading="isLoading" :disabled="isDisabled">重要按钮（type:primary）</a-button>
        <a-button ghost type="dashed" :size="btnSize" :shape="btnShape" :danger="btnDanger" :loading="isLoading" :disabled="isDisabled">虚线按钮（type:dashed）</a-button>
        <a-button ghost :size="btnSize" :danger="btnDanger" :shape="btnShape" :loading="isLoading" :disabled="isDisabled">默认按钮</a-button>
      </div>
    </a-card>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue';
const btnSize = ref('default')
const isLoading = ref(false)
const btnDanger = ref(false)
const isDisabled = ref(false)
const btnShape = ref('default')

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

// 更改disable状态
const changeDisable = () => {
  isDisabled.value = !isDisabled.value
}

// 更改按钮形状
const changeShape = (type: string) => {
  btnShape.value = type
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