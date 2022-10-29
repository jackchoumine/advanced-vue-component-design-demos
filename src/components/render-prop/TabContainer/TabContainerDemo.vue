<template>
  <h3>renderLess 组合组件 --- 实现 tab-container 组件</h3>
  <TabContainer v-model="activeTab">
    <TabHeader tab-id="1"> tab1 </TabHeader>
    <TabHeader tab-id="2"> tab2 </TabHeader>
    <TabHeader tab-id="3"> tab3 </TabHeader>

    <TabContent tab-id="1"> content 1 </TabContent>
    <TabContent tab-id="2"> content 2 </TabContent>
    <TabContent tab-id="3"> content 3 </TabContent>
  </TabContainer>
</template>

<script lang="ts">
import { TabContent, TabContainer, TabHeader } from './index'
import { ref, reactive, watch, computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'TabContainerDemo',
  components: {
    TabContent,
    TabContainer,
    TabHeader,
  },
  setup(props, { emit, attrs, slots }) {
    const activeTab = ref('1')
    return { activeTab }
  },
})
</script>
