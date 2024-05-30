import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TreeComponent from '../TreeComponent.vue'

describe('TreeComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(TreeComponent, {
      props: { nodes: [{ id: '0', parent_id: null, title: 'Initial title' }] }
    })
    expect(wrapper.text()).toContain('Initial title')
  })
})
