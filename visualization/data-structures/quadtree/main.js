import * as d3 from 'd3';
import { Quadtree } from '../../../src/data-structures/quadtree/index.ts';
import { SpatialVisualizer } from '../spatial/spatial-visualizer.js';

const width = 600;
const height = 600;

// Initialize Quadtree covering the full canvas
let tree = new Quadtree(0, 0, width, height);
const visualizer = new SpatialVisualizer('#viz-container', width, height);

const statsDisplay = document.getElementById('stats-display');
const modeSelect = document.getElementById('mode-select');

let queryRect = null; // {x, y, w, h}

// Render function
function render() {
    const points = [];
    const lines = [];
    const rects = [];

    // We need to traverse the tree to draw it.
    // Since Quadtree structure is private, we rely on `toJson` or specific traversal if exposed.
    // The implementation has `root` as private.
    // But `toJson()` returns a string of the root.
    // We can parse it to get the structure.

    const root = JSON.parse(tree.toJson());

    // Recursive draw
    drawNode(root, points, rects);

    // Draw query rect if any
    if (queryRect) {
        rects.push({
            id: 'query-rect',
            x: queryRect.x, y: queryRect.y, w: queryRect.w, h: queryRect.h,
            style: {
                stroke: 'green',
                strokeWidth: 2,
                fill: 'rgba(0, 255, 0, 0.1)'
            }
        });

        // Highlight queried points
        const found = tree.query(queryRect.x, queryRect.y, queryRect.w, queryRect.h);
        for (const p of found) {
            points.push({
                id: `found-${p.x}-${p.y}`,
                x: p.x, y: p.y,
                style: { fill: 'green', radius: 4 }
            });
        }

        statsDisplay.textContent = `Points in tree: ${countPoints(root)}. Points in query: ${found.length}`;
    } else {
        statsDisplay.textContent = `Points in tree: ${countPoints(root)}`;
    }

    visualizer.update({ points, lines, rects });
}

function drawNode(node, points, rects) {
    if (!node) return;

    // Draw boundary
    const rectId = `rect-${node.x}-${node.y}-${node.w}-${node.h}`;
    rects.push({
        id: rectId,
        x: node.x, y: node.y, w: node.w, h: node.h,
        style: { stroke: '#ddd', fill: 'none' }
    });

    // Draw points
    if (node.points) {
        for (const p of node.points) {
            points.push({
                id: `point-${p.x}-${p.y}`,
                x: p.x, y: p.y,
                style: { fill: '#3498db' }
            });
        }
    }

    // Recurse
    if (node.nw) {
        drawNode(node.nw, points, rects);
        drawNode(node.ne, points, rects);
        drawNode(node.sw, points, rects);
        drawNode(node.se, points, rects);
    }
}

function countPoints(node) {
    if (!node) return 0;
    let count = node.points ? node.points.length : 0;
    if (node.nw) {
        count += countPoints(node.nw) + countPoints(node.ne) + countPoints(node.sw) + countPoints(node.se);
    }
    return count;
}

// Initial render
render();

// Event Listeners
document.getElementById('btn-insert-random').addEventListener('click', () => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    tree.insert({ x, y });
    render();
});

document.getElementById('btn-insert-many').addEventListener('click', () => {
    for(let i=0; i<10; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        tree.insert({ x, y });
    }
    render();
});

document.getElementById('btn-clear').addEventListener('click', () => {
    tree = new Quadtree(0, 0, width, height);
    queryRect = null;
    render();
});

// Mouse Interaction
const bgNode = visualizer.bg.node();

let isDragging = false;
let startX, startY;

d3.select(bgNode).on('mousedown', (event) => {
    if (modeSelect.value === 'query') {
        const [x, y] = d3.pointer(event, visualizer.g.node());
        startX = x;
        startY = y;
        isDragging = true;
        queryRect = { x, y, w: 0, h: 0 };
        render(); // Draw initial 0-size rect
    }
});

d3.select(bgNode).on('mousemove', (event) => {
    if (isDragging && modeSelect.value === 'query') {
        const [x, y] = d3.pointer(event, visualizer.g.node());
        const minX = Math.min(startX, x);
        const minY = Math.min(startY, y);
        const w = Math.abs(x - startX);
        const h = Math.abs(y - startY);
        queryRect = { x: minX, y: minY, w, h };
        render();
    }
});

d3.select(bgNode).on('mouseup', (event) => {
    if (isDragging) {
        isDragging = false;
    }
});

d3.select(bgNode).on('click', (event) => {
    if (modeSelect.value === 'insert' && !isDragging) {
        // Simple click to insert
        const [x, y] = d3.pointer(event, visualizer.g.node());
        tree.insert({ x, y });
        render();
    }
});
