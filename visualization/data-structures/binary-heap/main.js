import * as d3 from 'd3';
import { BinaryHeap } from '../../../src/data-structures/binary-heap/binaryHeap.ts';
import { TreeVisualizer, arrayToTree } from '../../assets/common.js';

// Setup Heap
let isMinHeap = true;
const comparator = (a, b) => isMinHeap ? b - a : a - b;

let heap = new BinaryHeap([], comparator);
const visualizer = new TreeVisualizer('#tree-container');

function update() {
  const heapArray = JSON.parse(heap.toJson());

  if (heapArray.length === 0) {
    visualizer.update(null);
    return;
  }

  const root = arrayToTree(heapArray);
  visualizer.update(root);
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
