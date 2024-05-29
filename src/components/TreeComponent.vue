<template>
  <div>
    <ul>
      <tree-node v-for="item in rootNodes" :key="item.id" :node="item" :nodes="nodes" :depth="0" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType, watchEffect } from 'vue'
import TreeNode from './TreeNode.vue'

export interface ITreeData {
  id: string
  parent_id: string | null
  title: string
}

export default defineComponent({
  name: 'TreeComponent',
  props: {
    nodes: {
      type: Array as PropType<ITreeData[]>,
      required: true
    }
  },
  components: { TreeNode },
  setup(props) {
    const rootNodes = ref<ITreeData[]>([])

    watchEffect(() => {
      if (props.nodes) {
        rootNodes.value = props.nodes?.filter((node) => node.parent_id === null)
      }
    })

    return {
      props,
      rootNodes
    }
  }
})
</script>

<style>
ul {
  padding-left: 0;
}
ul li:nth-child(odd) {
  background-color: #f6f6f7;
}
</style>
