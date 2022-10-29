<template>
  <div>
    <h2>受控组件</h2>
    <MyInput v-model="myInput" v-model:title="title" />
  </div>
  <div>
    <p>自定义 toggle 组件</p>
    <ToggleInput v-model="toggled" />
    <br />
    <a
      href="https://github.com/jackchoumine/advanced-vue-component-design-demos/blob/master/src/components/controlled-component/ToggleInput.vue"
      target="_blank"
    >
      github 代码
    </a>
  </div>
</template>

<script setup name="ControlledComponentDemo">
import { ref } from 'vue'
import { ToggleInput, MyInput } from './index'

const myInput = ref('我的输入')
const title = ref('title')
const toggled = ref(false)
</script>
