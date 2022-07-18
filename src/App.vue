<template>
  <h1>vue组件设计方法</h1>
  <h2>受控组件</h2>
  <MyInput v-model="myInput" v-model:title="title" />
  <p>自定义 toggle 组件</p>
  <ToggleInput v-model="toggled" />
  <!-- <h2>使用第三方库封装组件</h2> -->
  <!-- <DatePicker v-model="date" /> -->
</template>

<script setup>
import { ToggleInput, MyInput } from './components/controlled-component'
import { DatePicker } from './components/third-lib'
import { ref } from 'vue'

const myInput = ref('我的输入')
const title = ref('title')
const toggled = ref(false)
const date = ref('2022-07-18')
</script>
