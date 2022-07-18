<template>
  <h1>vue组件设计方法</h1>

  <div>
    <h2>受控组件</h2>
    <MyInput v-model="myInput" v-model:title="title" />
  </div>

  <div>
    <p>自定义 toggle 组件</p>
    <ToggleInput v-model="toggled" />
  </div>

  <!-- <h2>使用第三方库封装组件</h2> -->
  <!-- <DatePicker v-model="date" /> -->
  <div>
    <h2>render-props</h2>
    <FormTable title="使用例子" :data="data" :titleList="titleList" />
  </div>
  <div>
    <h2>render 实现共享逻辑</h2>
    <OnClickOutside :clickOutside="clickOutside">
      <div style="background-color: #ccc">
        <div>子组件</div>
        <p>hello</p>
        <p>点击外部</p>
      </div>
    </OnClickOutside>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ToggleInput, MyInput } from './components/controlled-component'
import { DatePicker } from './components/third-lib'
import { FormTable, OnClickOutside } from './components/render-prop'

const myInput = ref('我的输入')
const title = ref('title')
const toggled = ref(false)
const date = ref('2022-07-18')
function clickOutside(ele) {
  console.log(ele)
}
const img = 'https://tva1.sinaimg.cn/large/008i3skNgy1gu9gco1hdbj605k05kgll02.jpg'

const data = ref({
  name: 'LiHei',
  image: img,
  job: 'web dev',
  salary: '3000',
  address: '四川省成都市成华区十里店寺庙',
  education: '本科',
  isGood: 1,
})

const titleList = ref([
  { title: '姓名', prop: 'name', enableCopy: true },
  {
    title: '头像',
    // 自定义 title 属性值
    titleTips: data => {
      return (data.image && '生成图，点击放大') || '暂无头像'
    },
    prop: data => {
      return (
        <div style={{ width: '150px', height: '150px' }}>
          <img src={data.image} alt='我的头像：超级无敌美丽' />
        </div>
      )
    },
  },
  {
    title: '职业',
    prop: 'job',
  },
  {
    title: '月薪',
    prop: data => {
      return <span>{data.salary + '$'}</span>
    },
  },
  {
    title: '住址',
    prop: 'address',
    span: 2,
    enableCopy: true,
  },
  {
    title: '学历',
    prop: 'education',
    span: 1,
  },
  {
    title: '是否统招',
    prop: data => {
      const map = { 0: '否', 1: '是' }
      return <span>{map[data.isGood]}</span>
    },
    span: 2,
  },
])
</script>
