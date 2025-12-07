import * as d3 from 'd3';
import { RedBlackTree } from '../../../src/data-structures/red-black-tree/index.ts';
import { TreeVisualizer } from '../../assets/common.js';

const tree = new RedBlackTree();
const visualizer = new TreeVisualizer('#tree-container');

// Need to customize visualizer to handle colors
// We can extend TreeVisualizer or just patch the update method logic via CSS classes.
// The `hierarchy` object can carry data like 'color'.
// common.js `update` uses `d.data.value`. We can pass more info.

function convertToHierarchy(node, idCounter = { val: 0 }) {
  // Access private NIL if possible, or detect cycles / special sentinel
  // The implementation uses a shared NIL node.
  // We can detect it if value is null (impl sets value to null) or by checking children pointing to itself?
  // Actually, the `toJson` method filters NILs.
  // "if (key === 'parent' || value === this.NIL) return undefined;"
  // But we are accessing the live object `node`.

  if (!node) return null;

  // Detect NIL by checking if it's the NIL sentinel.
  // We don't have direct access to 'tree.NIL' (private).
  // But NIL nodes usually have `value: null` (as per source `value: null as any`).
  // And `left`, `right` point to itself or NIL.

  if (node.value === null) return null;

  const hierarchyNode = {
    value: node.value,
    color: node.color, // 'red' or 'black'
    id: idCounter.val++,
    children: []
  };

  if (node.left && node.left.value !== null) {
    hierarchyNode.children.push(convertToHierarchy(node.left, idCounter));
  }

  if (node.right && node.right.value !== null) {
    if ((!node.left || node.left.value === null)) {
        // dummy?
        hierarchyNode.children.push(convertToHierarchy(node.right, idCounter));
    } else {
        hierarchyNode.children.push(convertToHierarchy(node.right, idCounter));
    }
  }

  return hierarchyNode;
}

function update() {
    // Access root. Public property 'root'.
    const root = tree.root;

    // We need to know how RBT stores color.
    // Usually `color` property.

    const hierarchy = convertToHierarchy(root);

    visualizer.update(hierarchy);

    // Post-update style adjustment for colors
    // Select all nodes and update circle style based on data
    visualizer.svg.selectAll('g.node circle')
        .style('stroke', d => {
            const color = d.data.color;
            if (color === 'red') return '#e74c3c';
            return '#2c3e50'; // Black
        })
        .style('stroke-width', '3px');
}


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
        tree.delete(val); // RBT usually has delete
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

update();
