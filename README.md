Sure, here is the updated `README.md` documentation to reflect the changes regarding the `TreeComponent`:

# Tree Data Parser

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-green.svg)

Tree Data Parser is a Vue.js component for rendering hierarchical tree structures. It is designed to be flexible and easy to integrate into your Vue.js projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install Tree Data Parser using npm or yarn.

```bash
npm install tree-data-parser
```

or

```bash
yarn add tree-data-parser
```

## Usage

Here is a basic example of how to use the `TreeComponent` in your Vue.js application.

### Example

```vue
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import TreeComponent, { type ITreeData } from 'tree-data-parser'
import axios from 'axios'

export default defineComponent({
  name: 'AppComponent',
  components: { TreeComponent },
  setup() {
    const nodes = ref<ITreeData[]>([])

    const fetchData = async () => {
      const response = await axios.get('Some server side request')
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
```

## Props

The `TreeComponent` accepts the following props:

| Prop    | Type             | Required | Default | Description                                            |
|---------|------------------|----------|---------|--------------------------------------------------------|
| `nodes` | Array of Objects | Yes      | N/A     | The array of node objects representing the tree structure. Each node object should have `id`, `parent_id`, and `title`. |

## Events

The `TreeComponent` component emits the following events:

| Event   | Description                                   |
|---------|-----------------------------------------------|
| `toggle` | Emitted when a node is expanded or collapsed. |

## Development

To set up the development environment:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/tree_data_parser.git
    ```
2. Navigate to the project directory:
    ```bash
    cd tree_data_parser
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Run the development server:
    ```bash
    npm run dev
    ```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b my-feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of my feature"
    ```
4. Push to the branch:
    ```bash
    git push origin my-feature-branch
    ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
