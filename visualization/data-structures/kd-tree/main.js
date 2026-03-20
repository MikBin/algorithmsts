import * as d3 from 'd3';
import { KDTree } from '../../../src/data-structures/kd-tree/index.ts';
import { SpatialVisualizer } from '../spatial/spatial-visualizer.js';

const width = 600;
const height = 600;

let tree = new KDTree(2); // 2D KDTree
const visualizer = new SpatialVisualizer('#viz-container', width, height);

const statsDisplay = document.getElementById('stats-display');
const modeSelect = document.getElementById('mode-select');

let nearestQuery = null; // {x, y}

function render() {
    const points = [];
    const lines = [];
    const rects = [];

    // Draw boundary box
    rects.push({
        id: 'boundary',
        x: 0, y: 0, w: width, h: height,
        style: { stroke: '#000', fill: 'none' }
    });

    const root = JSON.parse(tree.toJson());

    // Recursive draw. We need to pass down the bounds to know where to draw the splitting line.
    drawNode(root, { x: 0, y: 0, w: width, h: height }, points, lines);

    if (nearestQuery) {
        points.push({
            id: 'nearest-query-pt',
            x: nearestQuery.x, y: nearestQuery.y,
            style: { fill: 'orange', radius: 5 }
        });

        // Find nearest
        const nearest = tree.nearest([nearestQuery.x, nearestQuery.y]);
        if (nearest) {
            lines.push({
                id: 'nearest-line',
                x1: nearestQuery.x, y1: nearestQuery.y,
                x2: nearest.point[0], y2: nearest.point[1],
                style: { stroke: 'orange', strokeWidth: 2 }
            });
            points.push({
                id: 'nearest-result-pt',
                x: nearest.point[0], y: nearest.point[1],
                style: { fill: 'green', radius: 6 }
            });

            statsDisplay.textContent = `Size: ${tree.size}. Nearest distance: ${nearest.dist.toFixed(2)}`;
        } else {
             statsDisplay.textContent = `Size: ${tree.size}.`;
        }
    } else {
        statsDisplay.textContent = `Size: ${tree.size}`;
    }

    visualizer.update({ points, lines, rects });
}

function drawNode(node, bounds, points, lines) {
    if (!node) return;

    const axis = node.axis; // 0 for x (vertical line), 1 for y (horizontal line)
    const p = node.point;
    const nodeId = `node-${p[0].toFixed(2)}-${p[1].toFixed(2)}`;

    // Draw the point
    points.push({
        id: nodeId,
        x: p[0], y: p[1],
        style: { fill: '#3498db', radius: 4 }
    });

    // Draw the splitting line clipped to bounds
    if (axis === 0) {
        // Vertical line at p[0]
        lines.push({
            id: `line-${nodeId}`,
            x1: p[0], y1: bounds.y, x2: p[0], y2: bounds.y + bounds.h,
            style: { stroke: '#ccc' }
        });

        // Recurse left: x < p[0]
        drawNode(node.left, { x: bounds.x, y: bounds.y, w: p[0] - bounds.x, h: bounds.h }, points, lines);
        // Recurse right: x >= p[0]
        drawNode(node.right, { x: p[0], y: bounds.y, w: (bounds.x + bounds.w) - p[0], h: bounds.h }, points, lines);

    } else {
        // Horizontal line at p[1]
        lines.push({
            id: `line-${nodeId}`,
            x1: bounds.x, y1: p[1], x2: bounds.x + bounds.w, y2: p[1],
            style: { stroke: '#ccc' }
        });

        // Recurse left (in KDTree left means smaller coordinate): y < p[1]
        drawNode(node.left, { x: bounds.x, y: bounds.y, w: bounds.w, h: p[1] - bounds.y }, points, lines);
        // Recurse right (larger y) is bottom part.
        drawNode(node.right, { x: bounds.x, y: p[1], w: bounds.w, h: (bounds.y + bounds.h) - p[1] }, points, lines);
    }
}

render();

// Controls
document.getElementById('btn-insert-random').addEventListener('click', () => {
    tree.insert([Math.random() * width, Math.random() * height]);
    render();
});

document.getElementById('btn-insert-many').addEventListener('click', () => {
    for(let i=0; i<10; i++) {
        tree.insert([Math.random() * width, Math.random() * height]);
    }
    render();
});

document.getElementById('btn-clear').addEventListener('click', () => {
    tree = new KDTree(2);
    nearestQuery = null;
    render();
});

// Interaction
const bgNode = visualizer.bg.node();
d3.select(bgNode).on('click', (event) => {
    // Get pointer relative to the g element to account for zoom/pan
    const [x, y] = d3.pointer(event, visualizer.g.node());
    if (modeSelect.value === 'insert') {
        tree.insert([x, y]);
        render();
    } else if (modeSelect.value === 'nearest') {
        nearestQuery = { x, y };
        render();
    }
});

d3.select(bgNode).on('mousemove', (event) => {
    if (modeSelect.value === 'nearest') {
        // Get pointer relative to the g element to account for zoom/pan
        const [x, y] = d3.pointer(event, visualizer.g.node());
        nearestQuery = { x, y };
        render();
    }
});
