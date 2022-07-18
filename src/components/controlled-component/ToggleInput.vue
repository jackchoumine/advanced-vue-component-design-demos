<!--
 * @Description : 受控组件
 * @Date        : 2022-07-18 15:34:51 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-07-18 18:10:51 +0800
 * @LastEditors : JackChou
-->
<template>
  <span
    class="toggle"
    tabindex="0"
    role="checkbox"
    :aria-checked="modelValue"
    @click="toggle"
    @keydown.space.prevent="toggle"
  ></span>
  <!-- NOTE -->
  <!--  tabindex="0" 的作用：素是可聚焦的，并且可以通过键盘导航来聚焦到该元素 -->

  <!--  role="checkbox" 的作用：告诉屏幕阅读器，这是多选框 -->
  <!-- aria-checked 的作用：告诉屏幕阅读器，元素选中状态。ARIA (Accessible Rich Internet Applications) 是一组属性，用于定义使残障人士更容易访问 Web 内容和 Web 应用程序。 -->
  <!-- role aria-* 都是为了实现无障碍访问添加的属性 -->
</template>
<script>
import { ref, reactive, watch, computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'ToggleInput',
  props: ['modelValue'],
  setup(props, { emit, attrs, slots }) {
    function toggle() {
      console.log('点击', props.modelValue)
      emit('update:modelValue', !props.modelValue)
    }
    return { toggle }
  },
})
</script>
<style scoped lang="scss">
$border-radius: 9999px;
$toggle-width: 3rem;
$toggle-height: 1.5rem;

.toggle {
  /* background-color: red; */
  position: relative;
  display: inline-block;
  height: $toggle-height;
  width: $toggle-width;

  flex-shrink: 0;
  border-radius: $border-radius;
  cursor: pointer;

  /* 聚焦时样式 */
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(52, 144, 220, 0.5);
  }

  &:before {
    display: inline-block;
    border-radius: $border-radius;
    height: 100%;
    width: 100%;
    content: '';
    background-color: #dae1e7;
    /* background-color: red; */
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease;
  }
  /* 开启后背景颜色变为绿色 */
  &[aria-checked='true']:before {
    background-color: #04be02;
  }

  /* 移动的按钮，关闭时位于左侧，left:0 */
  &:after {
    position: absolute;
    top: 0;
    left: 0;

    height: $toggle-height;
    width: $toggle-height;
    background-color: #fff;

    border-radius: $border-radius;
    border-width: 1px;
    border-color: #dae1e7;

    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    content: '';

    transform: translateX(0);
    transition: transform 0.2s ease;
  }

  /* 开启后，向右移动 0.5 的 span 宽度 */
  &[aria-checked='true']:after {
    transform: translateX(#{$toggle-height});
  }
}
</style>
