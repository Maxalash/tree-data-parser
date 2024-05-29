<template>
  <li>
    <div @click="toggle">{{ node.title }}</div>
    <ul v-if="isOpen">
      <tree-node v-for="child in children" :key="child.id" :node="child" :nodes="nodes" />
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, computed, type PropType } from 'vue'

export default defineComponent({
  name: 'TreeNode',
  props: {
    node: {
      type: Object as PropType<{ id: string; parent_id: string | null; title: string }>,
      required: true
    },
    nodes: {
      type: Array as PropType<Array<{ id: string; parent_id: string | null; title: string }>>,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const isOpen = ref(false)

    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    const children = computed(() => {
      return props.nodes.filter((n) => n.parent_id === props.node.id)
    })

    return {
      isOpen,
      toggle,
      children,
      props
    }
  }
})
</script>
