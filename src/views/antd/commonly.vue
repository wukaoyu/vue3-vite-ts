<template>
  <div>
    <a-card class="card" title="按钮组件（button）" hoverable>
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
    <a-card class="card" title="输入框（input）" hoverable>
      <a-space direction="vertical" style="width: 100%">
        <a-input class="card-item" v-model:value="inputValue" placeholder="placeholder"/>
        <a-textarea class="card-item" v-model:value="inputValue" placeholder="textarea的input" :auto-size="{minRows: 2, maxRows: 5}"/>
        <a-input-search v-model:value="inputValue" placeholder="input search text"  @search="btnSearch"/>
        <a-input-search v-model:value="inputValue" enter-button placeholder="设置了enter-button"  @search="btnSearch"/>
        <a-input-search v-model:value="inputValue" enter-button="Search" placeholder="enter-button赋值按钮会变成文字" @search="btnSearch"/>
        <a-input-search v-model:value="inputValue" placeholder="自定义搜索按钮" @search="btnSearch">
            <template #enterButton>
              <a-button>Custom</a-button>
            </template>
        </a-input-search>
        <a-input v-model:value="inputValue" addon-before="Http://" addon-after=".com" placeholder="配置固定组合"/>
        <a-input v-model:value="inputValue">
          <template #addonBefore>
            <a-select v-model:value="inputBeforeValue">
              <a-select-option value="Http://">Http://</a-select-option>
              <a-select-option value="Https://">Https://</a-select-option>
            </a-select>
          </template>
          <template #addonAfter>
            <a-select v-model:value="inputAfterValue">
              <a-select-option value=".com/">.com</a-select-option>
              <a-select-option value=".jp/">.jp</a-select-option>
              <a-select-option value=".cn/">.cn</a-select-option>
              <a-select-option value=".org/">.org</a-select-option>
            </a-select>
          </template>
        </a-input>
        <a-input v-model:value="inputValue" show-count :maxlength="20" placeholder="显示文字数量/上限"/>
        <a-input-password v-model:value="inputValue" placeholder="密码框"/>
        <a-input v-model:value="inputValue" allow-clear placeholder="icon清除输入框内容"/>
      </a-space>
    </a-card>
    <a-card class="card" title="数字输入框（inputNumber）" hoverable>
      <a-space direction="vertical" style="width: 100%">
        <a-input-number v-model:value="inputNumber"></a-input-number>
        <a-input-number v-model:value="inputNumber" addon-after="$" addon-before="+"></a-input-number>
        <a-input-number v-model:value="inputNumber">
          <template #addonBefore>
            <a-select v-model:value="inputNumberSelectBefore" style="width: 60px">
              <a-select-option value="add">+</a-select-option>
              <a-select-option value="minus">-</a-select-option>
            </a-select>
          </template>
          <template #addonAfter>
            <a-select v-model:value="inputNumberSelectAfter" style="width: 60px;">
              <a-select-option value="USD">$</a-select-option>
              <a-select-option value="EUR">€</a-select-option>
              <a-select-option value="GBP">£</a-select-option>
              <a-select-option value="CNY">¥</a-select-option>
            </a-select>
          </template>
        </a-input-number>
      </a-space>
    </a-card>
    <a-card class="card" title="单选框（radio）" hoverable>
      <a-space>
        <a-radio v-model:checked="radioChecked">基本用法</a-radio>
        <a-radio-group v-model:value="radioGroupChoose" :button-style="radioGroupChoose === 'd' ? 'solid' : ''">
          <a-radio-button value="a">radio按钮选择a</a-radio-button>
          <a-radio-button value="b" disabled>radio按钮选择b</a-radio-button>
          <a-radio-button value="c">radio按钮选择c</a-radio-button>
          <a-radio-button value="d">实低选择风格</a-radio-button>
        </a-radio-group>
      </a-space>
      <a-space direction="vertical" style="width: 100%; margin-top: 10px;">
        <a-radio-group v-model:value="redioOptionValue1" :options="plainOptions" />
        <a-radio-group v-model:value="redioOptionValue2" :options="optionsWithDisabled" />
        <a-radio-group v-model:value="redioOptionValue3" :options="optionsWithDisabled" disabled/>
        <a-radio-group v-model:value="redioOptionValue1" option-type="button" :options="plainOptions" />
        <a-radio-group v-model:value="redioOptionValue2" option-type="button" :options="optionsWithDisabled" button-style="solid"/>
        <a-radio-group v-model:value="redioOptionValue3" option-type="button" :options="optionsWithDisabled" disabled/>
      </a-space>
    </a-card>
    <a-card class="card" title="多选框（checked）" hoverable>
      <a-space direction="vertical">
        <a-space>
          <a-checkbox v-model:checked="checkAll" :indeterminate="checkIndeterminate" @change="chooseAllChecked">check all</a-checkbox>
          <a-checkbox-group @change="checkedChange" v-model:value="checkedList" :options="plainOptions"></a-checkbox-group>
        </a-space>
        <a-space direction="vertical">
          <a-checkbox-group v-model:value="checkedValue1" :options="plainOptions"></a-checkbox-group>
          <a-checkbox-group v-model:value="checkedValue2" :options="optionsWithDisabled"></a-checkbox-group>
          <a-checkbox-group v-model:value="checkedValue3" :options="optionsWithDisabled" disabled></a-checkbox-group>
        </a-space>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue';
import { RadioGroupProps } from 'ant-design-vue';

const btnSize = ref<string>('default')
const isLoading = ref<boolean>(false)
const btnDanger = ref<boolean>(false)
const isDisabled = ref<boolean>(false)
const btnShape = ref<string>('default')

const inputValue = ref<string>('')
const inputBeforeValue = ref<string>('Http://')
const inputAfterValue = ref<string>('.com')

const inputNumber = ref<number>(0)
const inputNumberSelectBefore = ref<string>('add')
const inputNumberSelectAfter = ref<string>('CNY')

const radioChecked = ref<boolean>(false)
const radioGroupChoose = ref<string>('')
const redioOptionValue1 = ref<string>('Apple')
const redioOptionValue2 = ref<string>('Apple')
const redioOptionValue3 = ref<string>('Apple')

const plainOptions = ref<Array<string>>(['Apple', 'Pear', 'Orange'])
const optionsWithDisabled = ref<RadioGroupProps['options']>([
  { value: 'Apple', label: 'Apple' },
  { value: 'Pear', label: 'Pear', disabled: true },
  { value: 'Orange', label: 'Orange' }
])

const checkAll = ref<boolean>(false)
const checkIndeterminate = ref<boolean>(false)
const checkedList = ref<Array<string>>([])
const checkedValue1 = ref<Array<string>>([])
const checkedValue2 = ref<Array<string>>([])
const checkedValue3 = ref<Array<string>>([])

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

// input-search点击事件
const btnSearch = () => {
  console.log('搜索按钮点击')
  console.log(inputValue.value)
}

// 全选按钮
const chooseAllChecked = (e:any) => {
  checkIndeterminate.value = false
  checkedList.value = e.target.checked ? plainOptions.value : []
}

// 改变选项
const checkedChange = (data: Array<string>) => {
  if (data.length === plainOptions.value.length) {
    checkAll.value = true
    checkIndeterminate.value = false
  } else if (data.length === 0) {
    checkAll.value = false
    checkIndeterminate.value = false
  } else {
    checkAll.value = false
    checkIndeterminate.value = true
  }
}

</script>

<style scoped lang='less'>
.handle{
  margin-bottom: 10px;
}
.card{
  margin-bottom: 20px;
}
.content{
  margin-bottom: 20px;
}
.title{
  margin-bottom: 10px;
  font-weight: 500;
}
</style>