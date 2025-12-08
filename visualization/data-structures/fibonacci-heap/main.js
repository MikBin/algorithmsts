import * as d3 from 'd3';
import { FibonacciHeap } from '../../../src/data-structures/fibonacci-heap/fibonacciHeap.ts';
import { TreeVisualizer } from '../../assets/common.js';

const compare = (a, b) => a - b;
const heap = new FibonacciHeap(compare);
const visualizer = new TreeVisualizer('#tree-container');

// Fibonacci Heap structure
// min: Node (internal private but accessible in JS)
// Node structure: { value, degree, parent, child, left, right, mark }

function convertToHierarchy(heapInstance, idCounter = { val: 0 }) {
    if (heapInstance.isEmpty()) return null;

    const minNode = heapInstance.min; // accessing private property

    if (!minNode) return null;

    // Traverse root list
    const roots = [];
    let current = minNode;
    // Circular list traversal
    do {
        roots.push(current);
        current = current.right;
    } while (current !== minNode && current !== null);

    const virtualRoot = {
        value: 'ROOT',
        id: 'virtual-root',
        children: []
    };

    roots.forEach(root => {
        virtualRoot.children.push(convertNode(root, idCounter));
    });

    return virtualRoot;
}

function convertNode(node, idCounter) {
    const hierarchyNode = {
        value: node.value,
        id: idCounter.val++,
        children: []
    };

    if (node.child) {
        let current = node.child;
        const start = current;
        // Circular list traversal for children
        do {
            hierarchyNode.children.push(convertNode(current, idCounter));
            current = current.right;
        } while (current !== start && current !== null);
    }

    return hierarchyNode;
}


function update() {
    try {
        const hierarchy = convertToHierarchy(heap);
        if (hierarchy) {
             visualizer.update(hierarchy);
             // Hide the virtual root node visually
             visualizer.svg.selectAll('g.node')
                .filter(d => d.data.id === 'virtual-root')
                .select('circle')
                .style('opacity', 0);
             visualizer.svg.selectAll('g.node')
                .filter(d => d.data.id === 'virtual-root')
                .select('text')
                .style('opacity', 0);

             // Also hide links from virtual root to roots?
             // Maybe keep them to show they are "roots" or make them dashed.
             visualizer.svg.selectAll('path.link')
                .filter(d => d.parent && d.parent.data.id === 'virtual-root')
                .style('stroke-dasharray', '5,5')
                .style('stroke', '#ccc');

        } else {
             visualizer.update(null);
        }
    } catch (e) {
        console.error(e);
    }
}

d3.select('#add-node').on('click', () => {
    const val = parseInt(d3.select('#node-value').property('value'));
    if (!isNaN(val)) {
      heap.add(val);
      update();
      d3.select('#node-value').property('value', '');
    }
});

d3.select('#extract-min').on('click', () => {
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

update();
