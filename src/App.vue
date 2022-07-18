<template>
  <h1>vue组件设计方法</h1>
  <h2>受控组件</h2>
  <MyInput v-model="myInput" v-model:title="title" />
  <p>自定义 toggle 组件</p>
  <ToggleInput v-model="toggled" />
</template>

<script setup>
import { ToggleInput, MyInput } from './components/controlled-component'
import { ref } from 'vue'

const myInput = ref('我的输入')
const title = ref('title')
const toggled = ref(false)
</script>
