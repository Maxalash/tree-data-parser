<template>
  <li
    @click="toggle"
    :style="{
      paddingLeft: props.depth * 20 + 20 + 'px',
      cursor: children?.length > 0 ? 'pointer' : 'default'
    }"
    :class="props.depth == 0 ? 'root' : ''"
  >
    <p>
      <span style="width: 20px; display: inline-block">
        <template v-if="flag === 'line'"> &ndash; </template>
        <template v-else-if="flag === 'closed'"> <ArrowRight /> </template>
        <template v-else> <ArrowDown /> </template>
      </span>
      <span> {{ node.title }}</span>
    </p>
  </li>
  <template v-if="isOpen">
    <tree-node
      v-for="child in children"
      :key="child.id"
      :node="child"
      :nodes="nodes"
      :depth="depth + 1"
    />
  </template>
</template>

<script lang="ts">
import { defineComponent, ref, computed, type PropType } from 'vue'
import ArrowRight from './icons/ArrowRight.vue'
import ArrowDown from './icons/ArrowDown.vue'
import type { ITreeData } from './TreeComponent.vue'

export default defineComponent({
  name: 'TreeNode',
  props: {
    node: {
      type: Object as PropType<ITreeData>,
      required: true
    },
    nodes: {
      type: Array as PropType<ITreeData[]>,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  components: { ArrowRight, ArrowDown },
  setup(props) {
    const isOpen = ref(false)

    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    const children = computed(() => {
      return props.nodes.filter((n) => n.parent_id === props.node.id)
    })

    const flag = computed(() => {
      if (children.value.length > 0) {
        return isOpen.value ? 'open' : 'closed'
      } else {
        return 'line'
      }
    })

    return {
      isOpen,
      toggle,
      children,
      props,
      flag
    }
  }
})
</script>

<style scoped>
li {
  list-style: none;
  min-width: 200px;
}
.root {
  font-weight: 600;
  background-color: #e4e4e8;
}
</style>
