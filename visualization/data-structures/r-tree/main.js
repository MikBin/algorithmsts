import * as d3 from 'd3';
import { RTree } from '../../../src/data-structures/r-tree/index.ts';
import { SpatialVisualizer } from '../spatial/spatial-visualizer.js';

const width = 600;
const height = 600;

let tree = new RTree(4); // Max entries 4 for easier visualization splits
const visualizer = new SpatialVisualizer('#viz-container', width, height);

const statsDisplay = document.getElementById('stats-display');
const modeSelect = document.getElementById('mode-select');

let searchQuery = null; // Rect

let insertDragRect = null; // Rect during drag

function render() {
    const points = [];
    const lines = [];
    const rects = [];

    rects.push({
        id: 'boundary',
        x: 0, y: 0, w: width, h: height,
        style: { stroke: '#eee', fill: 'none' }
    });

    // Assuming we can get structure via json
    const root = JSON.parse(tree.toJson());

    // Draw tree
    // R-Tree structure: root has entries. Each entry has rect and child (if internal) or data (if leaf).
    // But implementation says: entries: { rect, child, data }[]
    // And node has `leaf` boolean.

    // Level order or recursive. Recursive is fine.
    // We want to color levels differently?

    drawNode(root, 0, rects);

    if (searchQuery) {
        rects.push({
            id: 'search-query-rect',
            x: searchQuery.x, y: searchQuery.y, w: searchQuery.w, h: searchQuery.h,
            style: {
                stroke: 'green',
                strokeWidth: 2,
                fill: 'rgba(0, 255, 0, 0.1)'
            }
        });

        const results = tree.search(searchQuery);
        statsDisplay.textContent = `Found ${results.length} items intersecting query.`;
    } else if (insertDragRect) {
        rects.push({
            id: 'insert-drag-rect',
            x: insertDragRect.x, y: insertDragRect.y, w: insertDragRect.w, h: insertDragRect.h,
            style: { stroke: 'blue', strokeDasharray: '4', fill: 'none' }
        });
    }

    visualizer.update({ points, lines, rects });
}

const colors = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6'];

function drawNode(node, depth, rects) {
    if (!node) return;

    const color = colors[depth % colors.length];

    if (node.entries) {
        for (const entry of node.entries) {
            // Draw MBR
            if (entry.rect) {
                // Generate pseudo-unique ID for rect based on coordinates to track transitions
                const rectId = `rect-${depth}-${entry.rect.x.toFixed(2)}-${entry.rect.y.toFixed(2)}-${entry.rect.w.toFixed(2)}-${entry.rect.h.toFixed(2)}`;
                rects.push({
                    id: rectId,
                    x: entry.rect.x, y: entry.rect.y, w: entry.rect.w, h: entry.rect.h,
                    style: {
                        stroke: color,
                        strokeWidth: node.leaf ? 1 : 2, // Thicker for internal nodes
                        fill: node.leaf ? 'rgba(52, 152, 219, 0.1)' : 'none'
                    }
                });
            }

            if (entry.child) {
                drawNode(entry.child, depth + 1, rects);
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
const bgNode = visualizer.bg.node();
let isDragging = false;
let startX, startY;

d3.select(bgNode).on('mousedown', (event) => {
    const [x, y] = d3.pointer(event, visualizer.g.node());
    startX = x;
    startY = y;
    isDragging = true;

    if (modeSelect.value === 'insert') {
        insertDragRect = { x, y, w: 0, h: 0 };
    } else {
        searchQuery = { x, y, w: 0, h: 0 };
        render();
    }
});

d3.select(bgNode).on('mousemove', (event) => {
    if (isDragging) {
        const [x, y] = d3.pointer(event, visualizer.g.node());
        const minX = Math.min(startX, x);
        const minY = Math.min(startY, y);
        const w = Math.abs(x - startX);
        const h = Math.abs(y - startY);

        if (modeSelect.value === 'search') {
            searchQuery = { x: minX, y: minY, w, h };
            render();
        } else {
            insertDragRect = { x: minX, y: minY, w, h };
            render();
        }
    }
});

d3.select(bgNode).on('mouseup', (event) => {
    if (isDragging) {
        const [x, y] = d3.pointer(event, visualizer.g.node());
        const minX = Math.min(startX, x);
        const minY = Math.min(startY, y);
        const w = Math.abs(x - startX);
        const h = Math.abs(y - startY);

        if (modeSelect.value === 'insert') {
            // Insert rect if size > 0, else insert point-like rect?
            // RTree expects rects.
            const rect = { x: minX, y: minY, w: Math.max(1, w), h: Math.max(1, h) };
            tree.insert(rect, 'user-data');
            insertDragRect = null;
            render();
        }
        isDragging = false;
    }
});
