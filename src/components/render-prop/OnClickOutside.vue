<script>
import { getCurrentInstance, onMounted, onBeforeUnmount, ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'OnClickOutside',
  props: ['clickOutside'],
  setup(props, { emit, attrs, slots }) {
    const vm = getCurrentInstance()
    const listener = event => {
      const isClickInside = vm.subTree.children.some(element => {
        const el = element.el
        return event.target === el || el.contains(event.target)
      })
      if (isClickInside) {
        console.log('clickInside')
        return
      }
      props.clickOutside && props.clickOutside(event.target)
    }
    onMounted(() => {
      document.addEventListener('click', listener)
    })
    onBeforeUnmount(() => {
      document.removeEventListener('click', listener)
    })
    return () => slots.default()
  },
})
</script>
