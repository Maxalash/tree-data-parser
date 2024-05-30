<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import TreeComponent, { type ITreeData } from './components/TreeComponent.vue'
import axios from 'axios'

export default defineComponent({
  name: 'AppController',
  components: { TreeComponent },
  setup() {
    const nodes = ref<ITreeData[]>([])

    const fetchData = async () => {
      const response = await axios.get('https://64b4c8450efb99d862694609.mockapi.io/tree/items')
      nodes.value = response.data
    }

    onMounted(() => {
      fetchData()
    })

    return {
      nodes
    }
  }
})
</script>

<template>
  <TreeComponent :nodes="nodes" />
</template>
