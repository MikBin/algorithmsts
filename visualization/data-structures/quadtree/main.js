import * as d3 from 'd3';
import { Quadtree } from '../../../src/data-structures/quadtree/index.js';
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
    visualizer.clear();

    // We need to traverse the tree to draw it.
    // Since Quadtree structure is private, we rely on `toJson` or specific traversal if exposed.
    // The implementation has `root` as private.
    // But `toJson()` returns a string of the root.
    // We can parse it to get the structure.

    const root = JSON.parse(tree.toJson());

    // Recursive draw
    drawNode(root);

    // Draw query rect if any
    if (queryRect) {
        visualizer.drawRect(queryRect.x, queryRect.y, queryRect.w, queryRect.h, {
            stroke: 'green',
            strokeWidth: 2,
            fill: 'rgba(0, 255, 0, 0.1)'
        });

        // Highlight queried points
        const found = tree.query(queryRect.x, queryRect.y, queryRect.w, queryRect.h);
        for (const p of found) {
            visualizer.drawPoint(p.x, p.y, { fill: 'green', radius: 4 });
        }

        statsDisplay.textContent = `Points in tree: ${countPoints(root)}. Points in query: ${found.length}`;
    } else {
        statsDisplay.textContent = `Points in tree: ${countPoints(root)}`;
    }
}

function drawNode(node) {
    if (!node) return;

    // Draw boundary
    visualizer.drawRect(node.x, node.y, node.w, node.h, { stroke: '#ddd' });

    // Draw points
    if (node.points) {
        for (const p of node.points) {
            visualizer.drawPoint(p.x, p.y, { fill: '#3498db' });
        }
    }

    // Recurse
    if (node.nw) {
        drawNode(node.nw);
        drawNode(node.ne);
        drawNode(node.sw);
        drawNode(node.se);
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
const svgNode = visualizer.svg.node();

let isDragging = false;
let startX, startY;

d3.select(svgNode).on('mousedown', (event) => {
    if (modeSelect.value === 'query') {
        const [x, y] = d3.pointer(event);
        startX = x;
        startY = y;
        isDragging = true;
        queryRect = { x, y, w: 0, h: 0 };
        render(); // Draw initial 0-size rect
    }
});

d3.select(svgNode).on('mousemove', (event) => {
    if (isDragging && modeSelect.value === 'query') {
        const [x, y] = d3.pointer(event);
        const minX = Math.min(startX, x);
        const minY = Math.min(startY, y);
        const w = Math.abs(x - startX);
        const h = Math.abs(y - startY);
        queryRect = { x: minX, y: minY, w, h };
        render();
    }
});

d3.select(svgNode).on('mouseup', (event) => {
    if (isDragging) {
        isDragging = false;
    }
});

d3.select(svgNode).on('click', (event) => {
    if (modeSelect.value === 'insert' && !isDragging) {
        // Simple click to insert
        const [x, y] = d3.pointer(event);
        tree.insert({ x, y });
        render();
    }
});
