<!--
 * @Description : 日期选择器
 * @Date        : 2022-07-18 19:30:08 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-07-18 22:17:22 +0800
 * @LastEditors : JackChou
-->
<template>
  <ul>
    <li class="item">1</li>
    <li class="item">2</li>
  </ul>
</template>
<script>
import { ref, reactive, watch, computed, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'DatePicker',
  props: {
    options: { default: {} },
  },
  setup(props, { emit, attrs, slots }) {
    const inputDOM = ref(null)
    onMounted(() => {})
    return {}
  },
})
</script>
<!-- <style src="./assets/pikaday.css"></style> -->
<style scoped lang="css">
.item {
  width: 100px;
  height: 100px;
  margin: 5px;
  background-color: #ccc;
}
</style>
