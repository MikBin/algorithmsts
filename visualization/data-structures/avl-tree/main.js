import * as d3 from 'd3';
import { AVLTree } from '../../../src/data-structures/avl-tree/index.ts';
import { TreeVisualizer } from '../../assets/common.js';

const tree = new AVLTree();
const visualizer = new TreeVisualizer('#tree-container');

// AVLTree has public root property "root"

function convertToHierarchy(node, idCounter = { val: 0 }) {
  if (!node) return null;

  const hierarchyNode = {
    value: node.value,
    id: idCounter.val++,
    children: []
  };

  if (node.left) {
    hierarchyNode.children.push(convertToHierarchy(node.left, idCounter));
  }

  if (node.right) {
      if (!node.left) {
          // Keep structure consistent (right child on right)
          // We can't really force D3 tree to skip a slot easily without dummy nodes.
          // But TreeVisualizer uses generic d3.tree which just centers children.
          // For now, we just push.
          hierarchyNode.children.push(convertToHierarchy(node.right, idCounter));
      } else {
          hierarchyNode.children.push(convertToHierarchy(node.right, idCounter));
      }
  }

  return hierarchyNode;
}

function update() {
    const root = tree.root;
    const hierarchy = convertToHierarchy(root);
    visualizer.update(hierarchy);
}

// Bind controls
d3.select('#add-node').on('click', () => {
  const val = parseInt(d3.select('#node-value').property('value'));
  if (!isNaN(val)) {
    tree.insert(val);
    update();
    d3.select('#node-value').property('value', '');
  }
});

d3.select('#remove-node').on('click', () => {
    const val = parseInt(d3.select('#node-value').property('value'));
    if (!isNaN(val)) {
      tree.delete(val);
      update();
      d3.select('#node-value').property('value', '');
    }
});

d3.select('#random-node').on('click', () => {
    const val = Math.floor(Math.random() * 100);
    tree.insert(val);
    update();
});

d3.select('#clear-node').on('click', () => {
    tree.clear();
    update();
});

// Initial
update();
