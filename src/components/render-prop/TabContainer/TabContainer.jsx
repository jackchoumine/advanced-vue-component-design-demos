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
  render() {
    const propObj = {
      class: 'tab-container',
    }
    const _slots = this.$slots.default()

    const tabs = _slots
      .filter(item => item.type === TabHeader)
      .map(tab =>
        h(tab, {
          class: {
            tab: true,
            active: tab.props['tab-id'] === this.modelValue,
          },
          onClick: () => {
            this.$emit('update:modelValue', tab.props['tab-id'])
          },
        }),
      )

    const content = _slots.find(
      slot => slot.type === TabContent && slot.props['tab-id'] === this.modelValue,
    )

    return [h('div', propObj, tabs), h('div', content)]
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
