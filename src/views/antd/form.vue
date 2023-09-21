<template>
  <div>
    <div class="title">基本用法</div>
    <a-form 
    class="form"
    :model="formState" 
    autocomplete="off"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 16 }"
    @finish="onFinish"
    @finishFailed="onFinishFailed">
      <a-form-item label="用户名：" name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username"></a-input>
      </a-form-item>
      <a-form-item label="密码：" name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password"></a-input-password>
      </a-form-item>
      <a-form-item label=" " :colon="false" name="remember">
        <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
      </a-form-item>
      <a-form-item label=" " :colon="false">
        <a-button type="primary" html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
    <div class="title">设置label固定宽度</div>
    <a-form 
    class="form"
    :model="formState" 
    autocomplete="off"
    :label-col="{ style: { width: '80px' } }"
    :wrapper-col="{ span: 16 }"
    @finish="onFinish"
    @finishFailed="onFinishFailed">
      <a-form-item label="用户名：" name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username"></a-input>
      </a-form-item>
      <a-form-item label="密码：" name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password"></a-input-password>
      </a-form-item>
      <a-form-item label=" " :colon="false" name="remember">
        <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
      </a-form-item>
      <a-form-item label=" " :colon="false">
        <a-button type="primary" html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = ref<FormState>({
  username: '',
  password: '',
  remember: false
})

const onFinish = () => {
  console.log('onFinish')
}

const onFinishFailed = () => {
  console.log('onFinishFailed')
}
</script>

<style scoped lang='less'>
.title{
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
}
.form{
  width: 50%;
  min-width: 500px;
  margin-bottom: 50px;
}
</style>