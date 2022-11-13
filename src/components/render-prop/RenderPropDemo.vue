<template>
  <h2>render函数的妙用</h2>
  <div>
    <h3>render-props --- 让组件更优雅更易扩展</h3>
    <FormTable title="使用例子" :data="data" :titleList="titleList" />
    <a
      href="https://github.com/jackchoumine/advanced-vue-component-design-demos/blob/master/src/components/render-prop/FormTable.vue"
      target="_blank"
    >
      github 代码
    </a>
  </div>
  <div>
    <h3>renderLess --- 实现共享逻辑的利器</h3>
    <h4>renderLess 实现 OnClickOutSide 组件</h4>
    <OnClickOutside :clickOutside="clickOutside">
      <div style="background-color: #ccc">
        <div>子组件</div>
        <p>hello</p>
        <p>点击外部，试试，按F12查看输出</p>
      </div>
    </OnClickOutside>
    <a
      href="https://github.com/jackchoumine/advanced-vue-component-design-demos/blob/master/src/components/render-prop/OnClickOutside.vue"
      target="_blank"
    >
      github 代码
    </a>
    <ElDivider />
    <!-- <h4>renderLess 封装请求方法，实现 FetchData 组件</h4>
    <FetchData url="https://api.github.com/users/jackchoumine">
      <template #default="{ userInfo, loading }">
        <p v-if="loading">正在加载...</p>
        <p v-else-if="userInfo.avatar_url">
          <img :src="userInfo.avatar_url" />
        </p>
        <div v-else>
          <h3>error</h3>
          <p>
            {{ userInfo.message }}
          </p>
        </div>
      </template>
    </FetchData>
    <a
      href="https://github.com/jackchoumine/advanced-vue-component-design-demos/blob/master/src/components/render-prop/FetchData.jsx"
      target="_blank"
    >
      github 代码
    </a>
    <ElDivider /> -->
    <TabContainerDemo />
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { FormTable, OnClickOutside, FetchData } from './index'
import { TabContainerDemo } from './TabContainer'
import { data, titleList } from './testData'
function clickOutside(ele) {
  console.log(ele)
}
</script>
