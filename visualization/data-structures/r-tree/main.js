import * as d3 from 'd3';
import { RTree } from '../../../src/data-structures/r-tree/index.js';
import { SpatialVisualizer } from '../spatial/spatial-visualizer.js';

const width = 600;
const height = 600;

let tree = new RTree(4); // Max entries 4 for easier visualization splits
const visualizer = new SpatialVisualizer('#viz-container', width, height);

const statsDisplay = document.getElementById('stats-display');
const modeSelect = document.getElementById('mode-select');

let searchQuery = null; // Rect

function render() {
    visualizer.clear();
    visualizer.drawRect(0, 0, width, height, { stroke: '#eee' });

    // Assuming we can get structure via json
    const root = JSON.parse(tree.toJson());

    // Draw tree
    // R-Tree structure: root has entries. Each entry has rect and child (if internal) or data (if leaf).
    // But implementation says: entries: { rect, child, data }[]
    // And node has `leaf` boolean.

    // Level order or recursive. Recursive is fine.
    // We want to color levels differently?

    drawNode(root, 0);

    if (searchQuery) {
        visualizer.drawRect(searchQuery.x, searchQuery.y, searchQuery.w, searchQuery.h, {
            stroke: 'green',
            strokeWidth: 2,
            fill: 'rgba(0, 255, 0, 0.1)'
        });

        const results = tree.search(searchQuery);
        statsDisplay.textContent = `Found ${results.length} items intersecting query.`;
    }
}

const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];

function drawNode(node, depth) {
    if (!node) return;

    const color = colors[depth % colors.length];

    if (node.entries) {
        for (const entry of node.entries) {
            // Draw MBR
            if (entry.rect) {
                visualizer.drawRect(entry.rect.x, entry.rect.y, entry.rect.w, entry.rect.h, {
                    stroke: color,
                    strokeWidth: node.leaf ? 1 : 2, // Thicker for internal nodes
                    fill: node.leaf ? 'rgba(52, 152, 219, 0.1)' : 'none'
                });
            }

            if (entry.child) {
                drawNode(entry.child, depth + 1);
            }
        }
    }
}


render();


// Utils
function randomRect() {
    const w = Math.random() * 50 + 10;
    const h = Math.random() * 50 + 10;
    const x = Math.random() * (width - w);
    const y = Math.random() * (height - h);
    return { x, y, w, h };
}


// Controls
document.getElementById('btn-insert-random').addEventListener('click', () => {
    tree.insert(randomRect(), 'data');
    render();
});

document.getElementById('btn-insert-many').addEventListener('click', () => {
    for(let i=0; i<10; i++) {
        tree.insert(randomRect(), 'data');
    }
    render();
});

document.getElementById('btn-clear').addEventListener('click', () => {
    tree = new RTree(4);
    searchQuery = null;
    render();
});


// Interaction
const svgNode = visualizer.svg.node();
let isDragging = false;
let startX, startY;

d3.select(svgNode).on('mousedown', (event) => {
    const [x, y] = d3.pointer(event);
    startX = x;
    startY = y;
    isDragging = true;

    if (modeSelect.value === 'insert') {
        // Prepare to draw rect
    } else {
        searchQuery = { x, y, w: 0, h: 0 };
        render();
    }
});

d3.select(svgNode).on('mousemove', (event) => {
    if (isDragging) {
        const [x, y] = d3.pointer(event);
        const minX = Math.min(startX, x);
        const minY = Math.min(startY, y);
        const w = Math.abs(x - startX);
        const h = Math.abs(y - startY);

        if (modeSelect.value === 'search') {
            searchQuery = { x: minX, y: minY, w, h };
            render();
        } else {
            // Visualize insertion drag?
             visualizer.clear();
             render(); // Redraw existing
             visualizer.drawRect(minX, minY, w, h, { stroke: 'blue', strokeDasharray: '4' });
        }
    }
});

d3.select(svgNode).on('mouseup', (event) => {
    if (isDragging) {
        const [x, y] = d3.pointer(event);
        const minX = Math.min(startX, x);
        const minY = Math.min(startY, y);
        const w = Math.abs(x - startX);
        const h = Math.abs(y - startY);

        if (modeSelect.value === 'insert') {
            // Insert rect if size > 0, else insert point-like rect?
            // RTree expects rects.
            const rect = { x: minX, y: minY, w: Math.max(1, w), h: Math.max(1, h) };
            tree.insert(rect, 'user-data');
            render();
        }
        isDragging = false;
    }
});
