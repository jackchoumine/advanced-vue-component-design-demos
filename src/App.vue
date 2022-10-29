<template>
  <h1>vue组件设计方法</h1>
  <ControlledComponentDemo />
  <ElDivider />
  <RenderPropDemo />
  <!-- <h2>使用第三方库封装组件</h2> -->
  <!-- <DatePicker v-model="date" /> -->
</template>

<script setup name="App">
import { ControlledComponentDemo, RenderPropDemo } from '@c'
</script>
