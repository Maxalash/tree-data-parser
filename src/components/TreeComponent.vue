<template>
  <div>
    <ul>
      <tree-node v-for="item in rootNodes" :key="item.id" :node="item" :nodes="nodes" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import TreeNode from './TreeNode.vue'

export interface ITreeData {
  id: string
  parent_id: string | null
  title: string
}

export default defineComponent({
  name: 'TreeComponent',
  components: { TreeNode },
  setup() {
    const nodes = ref<ITreeData[]>([])
    const rootNodes = ref<ITreeData[]>([])

    const fetchData = async () => {
      const response = await axios.get('https://64b4c8450efb99d862694609.mockapi.io/tree/items')
      nodes.value = response.data
      rootNodes.value = nodes.value.filter((node) => node.parent_id === null)
    }

    onMounted(() => {
      fetchData()
    })

    return {
      nodes,
      rootNodes
    }
  }
})
</script>
