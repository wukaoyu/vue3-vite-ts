<template>
  <div class="bkg">
    <div class="glass">
      <img class="logo" src="@/assets/vite.png" alt="vite" srcset=""/>
      <a-form class="form" :model="formData" :label-col="{span: 3}" :wrapperCol="{span: 18}" ref="formRef"> 
        <a-form-item
        label="用户名"
        name="account"
        :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input class="input" v-model:value="formData.account" />
        </a-form-item>
        <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password class="input" v-model:value="formData.password" @keyup.enter.native="funLogin"/>
        </a-form-item>
        <a-form-item
        label="身份"
        name="identity"
        :rules="[{ required: true, message: 'Please choose your identity!' }]">
          <a-radio-group class="input" v-model:value="formData.identity">
            <a-radio :value="1">管理员</a-radio>
            <a-radio :value="2">教师</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item 
        label=" "
        :colon="false">
          <a-button class="button" type="primary" @click="funLogin">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { login } from "@/api/login";

const router = useRouter();
const formData = ref<{account: string, password: string, identity: number}>({
  account: '',
  password: '',
  identity: 1
})
const formRef = ref()

// 登录
const funLogin = () => {
  formRef.value.validate().then(() => {
    login(formData.value).then(res => {
      if (res.errno === 0) {
        message.success('登录成功')
        window.localStorage.setItem('user', JSON.stringify(res.data))
        router.push({
          path:'/'
        })
      }
    })
  })
}
</script>

<style scoped lang='less'>
.bkg{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-size: 100% auto;
  // background: #0ff;
}
.glass{
  padding: 20px 50px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, .7);
  border-radius: 10px;
  border: 1px solid #fff;
}
.logo{
  width: 500px;
}
.form{
  width: 500px;
}
.input{
  margin-left: 10px;
}
.button{
  width: 100%;
  margin-left: 10px;
}
</style>