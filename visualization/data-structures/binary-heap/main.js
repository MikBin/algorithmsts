import * as d3 from 'd3';
import { BinaryHeap } from '../../../src/data-structures/binary-heap/binaryHeap.ts';
import { initSvg, diagonal, arrayToTree } from '../../assets/common.js';

// Setup Heap
let isMinHeap = true;
const comparator = (a, b) => isMinHeap ? b - a : a - b; // Min heap: b > a (parent smaller); Max heap: a > b
// Wait, BinaryHeap implementation uses comparator(child, parent) > 0 to swap up?
// Let's check BinaryHeap source again.
// _bubbleUp: comparator(current, parent) > 0 => swap.
// If we want Min Heap (parent < child), we want to STOP if child > parent.
// Or rather, we want to swap if child < parent.
// If comparator(child, parent) > 0 means "child has higher priority than parent".
// For Min Heap, smaller value = higher priority.
// So if child < parent, we want comparator(child, parent) > 0.
// So (a, b) => b - a. If a (child) < b (parent), then b - a > 0. Correct.

let heap = new BinaryHeap([], comparator);

// Setup SVG
const margin = { top: 40, right: 90, bottom: 50, left: 90 };
const width = 960;
const height = 500;
const { svg } = initSvg('#tree-container', margin, width, height);

const duration = 750;
const treemap = d3.tree().size([height - margin.top - margin.bottom, width - margin.left - margin.right]);

let rootNode; // Data hierarchy

function update() {
  // 1. Convert Heap array to Tree hierarchy
  // Access private _heap using a trick (or relying on JS looseness if not strict private)
  // But Typescript 'private' is just compile time. In JS it's accessible.
  // However, we can use toJson() which returns stringified array, parse it back.
  const heapArray = JSON.parse(heap.toJson());

  if (heapArray.length === 0) {
    svg.selectAll('*').remove();
    return;
  }

  const data = arrayToTree(heapArray);

  // 2. Compute Layout
  const root = d3.hierarchy(data, d => d.children);

  // Assign x,y coordinates
  const treeData = treemap(root);

  // Compute the new tree layout.
  const nodes = treeData.descendants();
  const links = treeData.descendants().slice(1);

  // Normalize for fixed-depth (horizontal tree layout typically)
  // But heaps are usually visualized vertically.
  // BST example used vertical (d.x, d.y swapped in transform?)
  // BST code: `d.y = d.depth * 180` and `translate(d.y, d.x)`. This is Horizontal (Root at left).
  // Heaps are often better as Vertical (Root at top).
  // Let's try Vertical first.

  // Vertical Layout:
  // x is horizontal position, y is depth.
  // d3.tree() returns x in [0, width], y in [0, height] (or reversed depending on size arg).
  // size([width, height]) -> x maps to width.

  // Let's check BST again.
  // `size([height, width])` -> x is height-axis, y is width-axis.
  // `d.y = d.depth * 180`.
  // `translate(d.y, d.x)` -> x-coord is d.y (depth), y-coord is d.x (vertical position).
  // So BST is Horizontal.

  // Let's do Vertical for Heap.
  // We need to re-create treemap with size([width, height]).
  const vTreemap = d3.tree().size([width - margin.left - margin.right, height - margin.top - margin.bottom]);
  const vTreeData = vTreemap(root);
  const vNodes = vTreeData.descendants();
  const vLinks = vTreeData.descendants().slice(1);

  vNodes.forEach(d => { d.y = d.depth * 80; }); // Adjust vertical spacing

  // Update Nodes
  const node = svg.selectAll('g.node')
    .data(vNodes, d => d.data.id);

  const nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.x},${d.y})`);

  nodeEnter.append('circle')
    .attr('r', 10);

  nodeEnter.append('text')
    .attr('dy', '.35em')
    .attr('text-anchor', 'middle')
    .text(d => d.data.value);

  const nodeUpdate = nodeEnter.merge(node);

  nodeUpdate.transition()
    .duration(duration)
    .attr('transform', d => `translate(${d.x},${d.y})`);

  nodeUpdate.select('text')
    .text(d => d.data.value);

  const nodeExit = node.exit()
    .transition()
    .duration(duration)
    .remove();

  // Update Links
  const link = svg.selectAll('path.link')
    .data(vLinks, d => d.data.id);

  // For vertical, we need a vertical diagonal function
  const verticalDiagonal = (s, d) => {
    return `M ${s.x} ${s.y}
            C ${s.x} ${(s.y + d.y) / 2},
              ${d.x} ${(s.y + d.y) / 2},
              ${d.x} ${d.y}`;
  };

  // We need stashed positions for smooth transitions (entering from parent's old pos)
  // For now, simple transition.

  const linkEnter = link.enter().insert('path', 'g')
    .attr('class', 'link')
    .attr('d', d => {
        // Start from parent's current position if possible, else self
        return verticalDiagonal({x: d.parent.x, y: d.parent.y}, {x: d.parent.x, y: d.parent.y});
    });

  linkEnter.merge(link)
    .transition()
    .duration(duration)
    .attr('d', d => verticalDiagonal(d.parent, d));

  link.exit().remove();
}

// Controls
d3.select('#add-node').on('click', () => {
  const input = d3.select('#node-value');
  const value = parseInt(input.property('value'));
  if (!isNaN(value)) {
    heap.add(value);
    update();
    input.property('value', '');
  }
});

d3.select('#poll-node').on('click', () => {
  heap.poll();
  update();
});

d3.select('#random-node').on('click', () => {
  const val = Math.floor(Math.random() * 100);
  heap.add(val);
  update();
});

d3.select('#clear-node').on('click', () => {
  heap.clear();
  update();
});

d3.select('#min-heap-toggle').on('change', function() {
  isMinHeap = this.checked;
  // Re-create heap with new comparator and existing items
  const currentItems = JSON.parse(heap.toJson());
  const newComparator = (a, b) => isMinHeap ? b - a : a - b;
  heap = new BinaryHeap([], newComparator);
  currentItems.forEach(i => heap.add(i));
  update();
});

// Initial draw
update();
