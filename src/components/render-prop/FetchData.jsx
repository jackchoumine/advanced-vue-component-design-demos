/*
 * @Description : renderLess 封装公共行为
 * @Date        : 2022-07-19 03:25:16 +0800
 * @Author      : JackChou
 * @LastEditTime: 2022-07-19 04:21:27 +0800
 * @LastEditors : JackChou
 */

import { defineComponent, onMounted, ref } from 'vue'

// export const FetchData = (props, { slots }) => {
//   const data = { name: 'JackChou' }
//   return [slots.left(data), slots.default(), slots.right()]
// }

export const FetchData = defineComponent({
  props: ['url'],
  setup(props, { slots }) {
    const userInfo = ref({})
    const loading = ref(true)
    onMounted(() => {
      fetch(props.url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          userInfo.value = data
          loading.value = false
        })
    })
    return () => slots.default({ userInfo: userInfo.value, loading: loading.value })
  },
})
