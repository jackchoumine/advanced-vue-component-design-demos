import { h } from 'vue'
import './TabContainer.scss'

const TabContainer = {
  name: 'TabContainer',
  // emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  // BUG 不会重新执行
  // setup(props, { emit, slots }) {
  //   const defaultSlots = slots.default()
  //   const Tabs = defaultSlots
  //     .filter(slot => slot.type === TabHeader)
  //     .map(Tab =>
  //       h(Tab, {
  //         class: {
  //           tab: true,
  //           active: Tab.props['tab-id'] === props.modelValue,
  //         },
  //         onClick: () => {
  //           emit('update:modelValue', Tab.props['tab-id'])
  //         },
  //       }),
  //     )
  //   const Content = defaultSlots.find(
  //     slot => slot.type === TabContent && slot.props['tab-id'] === props.modelValue,
  //   )
  //   return () => [h(() => h('div', { class: 'tab-container' }, Tabs)), h(() => h('div', Content))]
  // },
  render() {
    const slots = this.$slots.default()
    // NOTE 如何限制子组件类型?
    // 检查子组件类型
    const existNonValidSubCom = slots.some(slot => ![TabHeader, TabContent].includes(slot.type))
    if (existNonValidSubCom) {
      const message = 'TabContainer的子组件必须是 TabHeader 和 TabContent'
      // throw new Error(message)
      return h('div', message)
    }
    const Tabs = slots
      .filter(item => item.type === TabHeader)
      .map(Tab =>
        h(Tab, {
          class: {
            tab: true,
            active: Tab.props['tab-id'] === this.modelValue,
          },
          onClick: () => {
            this.$emit('update:modelValue', Tab.props['tab-id'])
          },
        }),
      )
    const content = slots.find(
      slot => slot.type === TabContent && slot.props['tab-id'] === this.modelValue,
    )
    return [h('div', { class: 'tab-container' }, Tabs), h('div', content)]
  },
}

export default TabContainer
export const TabHeader = TabItem({ name: 'TabHeader' })
export const TabContent = TabItem({ name: 'TabContent' })

function TabItem(options) {
  return {
    ...options,
    props: {
      tabId: {
        type: String,
        required: true,
      },
    },
    render() {
      return h('div', null, this.$slots.default())
    },
  }
}
