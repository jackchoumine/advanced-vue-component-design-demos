<!--
 * @Description : 受控输入组件
 * @Date        : 2022-07-18 15:54:54 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-07-18 16:21:54 +0800
 * @LastEditors : JackChou
-->
<template>
  <div>
    <p>title</p>
    <input type="text" name="title" :value="title" @input="onInputTitle" />
    <p>content</p>
    <input type="text" name="my-input" :value="modelValue" @input="onInput" />
  </div>
</template>

<script>
import { ref, reactive, watch, computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'MyInput',
  // vue2 中 v-model 指令是 prop value + 自定义事件 input 的组合
  // 自定义 prop 名字和事件： model: { prop: 'toggled', event: 'toggle' },  this.$emit('toggle')

  // vue3 中 v-model 默认是 modelValue + 自定义事件 update:modelValue 的组合
  // 修改： v-model:propName  + update:propName
  props: ['modelValue', 'title'],
  setup(props, { emit, attrs, slots }) {
    // console.log(props.title)
    function onInput(event) {
      emit('update:modelValue', event.target.value)
    }
    function onInputTitle(event) {
      emit('update:title', event.target.value)
    }
    return { onInputTitle, onInput }
  },
})
</script>
<style scoped lang="scss"></style>
