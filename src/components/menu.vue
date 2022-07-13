<template>
  <div class="menu">
    <div class="menu-head" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="collapsed" class="icon" />
      <MenuFoldOutlined v-else class="icon"/>
    </div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed">
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>Option 1</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';

const collapsed = ref(false)

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<style scoped lang='less'>
.menu{
  height: 100vh;
  overflow: auto;
  background-color: #001529;
  .menu-head{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 40px;
    .icon{
      color: #fff;
      font-size: 16px;
      text-align:center;
    }
  }
}
.ant-menu{
  width: 256px;
}
.ant-menu.ant-menu-inline-collapsed{
  width: 80px;
}
</style>