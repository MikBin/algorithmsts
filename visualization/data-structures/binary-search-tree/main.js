import * as d3 from 'd3';
import { BinarySearchTree } from '../../../src/data-structures/binary-search-tree/index.js';
import { TreeVisualizer } from '../../assets/common.js';

const tree = new BinarySearchTree();
const visualizer = new TreeVisualizer('#tree-container');

// Convert BST to Hierarchy for TreeVisualizer
function convertToHierarchy(node, idCounter = { val: 0 }) {
  if (!node) return null;

  const hierarchyNode = {
    value: node.value,
    id: idCounter.val++,
    children: []
  };

  if (node.left) {
    hierarchyNode.children.push(convertToHierarchy(node.left, idCounter));
  } else if (node.right) {
      // Dummy to force right child to right side if using simple tree logic
      // But TreeVisualizer is generic.
      // For proper BST visualization, we should push null/dummy?
      // TreeVisualizer logic doesn't support null children explicitly for layout.
      // But let's just push existing children.
  }

  // Re-eval: existing simple push logic
  if (node.right) {
    hierarchyNode.children.push(convertToHierarchy(node.right, idCounter));
  }

  return hierarchyNode;
}

function update() {
    // Access root.
    const root = tree.root;
    const hierarchy = convertToHierarchy(root);
    visualizer.update(hierarchy);
}

d3.select('#add-node').on('click', () => {
  const value = d3.select('#node-value').property('value');
  if (value && !isNaN(value)) {
    tree.insert(parseInt(value, 10));
    update();
  }
});

d3.select('#remove-node').on('click', () => {
  const value = d3.select('#node-value').property('value');
  if (value && !isNaN(value)) {
    tree.remove(parseInt(value, 10));
    update();
  }
});
