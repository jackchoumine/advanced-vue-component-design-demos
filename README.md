# advanced-vue-component-design --- vue 高级组件设计

总结实用（项目里能马上用到的）的 vue 组件设计方法，让封装组件更加容易，代码更加好维护。

> [demos 预览](https://jackchoumine.github.io/advanced-vue-component-design-demos/)

## 几个应该遵循的设计原则

1. 数据驱动模板

2.

## 受控组件 controlled component

受控组件：组件的状态完全由 vue 控制的组件。vue 和 react 中的受控组件和非受控组件的概念是一样的。

[vue 关于表单组件的详细介绍](https://vuejs.org/guide/essentials/forms.html)

[react 的受控组件](https://zh-hans.reactjs.org/docs/forms.html#controlled-components)

常见的表 input、select 等表单元素带有 value 属性，具有自己的状态，如果这些状态由 vue 控制，就就变受控组件。

vue 通过`v-model`来实现受控组件，自定义组件上使用 v-model 非常容易。

比如`MyInput`组件，vue3 中可这样使用。

```html
<MyInput v-model="myInput" v-model:title="title" />
```

MyInput 的实现：

```html
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
```

v-model 指令的原理：modelValue 绑定到 value 上和在 input 事件中触发`update:modelValue`自定义事件。

> 如何修改 prop 的名字和自定义事件呢？

`v-model:propName + update:propName`

默认情况下，v-model 不需要指定参数，修改 prop 的名字后，需要指定参数，比如上面的`v-mode:title`。

> 如何使用受控组件实现一个类似微信的 switch 组件？

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h4b8zda7bhj203y02iwea.jpg)

先看使用方式：

```html
<ToggleInput v-model="toggled" />
```

直接上代码：

```html
<template>
  <span
    class="toggle"
    tabindex="0"
    role="checkbox"
    :aria-checked="modelValue"
    @click="toggle"
    @keydown.space.prevent="toggle"
  ></span>
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
```

> tabindex="0" 的作用是什么？

元素是可聚焦的，并且可以通过键盘导航来聚焦到该元素。

> role="checkbox" 的作用是什么？

告诉屏幕阅读器，这是多选框。

> aria-checked 的作用是什么？

告诉屏幕阅读器，元素选中状态。ARIA (Accessible Rich Internet Applications) 是一组属性，用于定义使残障人士更容易访问 Web 内容和 Web 应用程序。

role aria-\* 都是为了实现无障碍访问添加的属性

实现的关键点：

1. 使用绝对定位放置圆形按钮，且使用伪元素。

2. 当状态改变时，移动元素按钮，同时改变组件的背景色。
