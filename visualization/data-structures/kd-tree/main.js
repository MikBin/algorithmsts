import * as d3 from 'd3';
import { KDTree } from '../../../src/data-structures/kd-tree/index.js';
import { SpatialVisualizer } from '../spatial/spatial-visualizer.js';

const width = 600;
const height = 600;

let tree = new KDTree(2); // 2D KDTree
const visualizer = new SpatialVisualizer('#viz-container', width, height);

const statsDisplay = document.getElementById('stats-display');
const modeSelect = document.getElementById('mode-select');

let nearestQuery = null; // {x, y}

function render() {
    visualizer.clear();

    // Draw boundary box
    visualizer.drawRect(0, 0, width, height, { stroke: '#000' });

    const root = JSON.parse(tree.toJson());

    // Recursive draw. We need to pass down the bounds to know where to draw the splitting line.
    drawNode(root, { x: 0, y: 0, w: width, h: height });

    if (nearestQuery) {
        visualizer.drawPoint(nearestQuery.x, nearestQuery.y, { fill: 'orange', radius: 5 });

        // Find nearest
        const nearest = tree.nearest([nearestQuery.x, nearestQuery.y]);
        if (nearest) {
            visualizer.drawLine(nearestQuery.x, nearestQuery.y, nearest.point[0], nearest.point[1], { stroke: 'orange', strokeWidth: 2 });
            visualizer.drawPoint(nearest.point[0], nearest.point[1], { fill: 'green', radius: 6 }); // Highlight nearest

            statsDisplay.textContent = `Size: ${tree.size}. Nearest distance: ${nearest.dist.toFixed(2)}`;
        } else {
             statsDisplay.textContent = `Size: ${tree.size}.`;
        }
    } else {
        statsDisplay.textContent = `Size: ${tree.size}`;
    }
}

function drawNode(node, bounds) {
    if (!node) return;

    const axis = node.axis; // 0 for x (vertical line), 1 for y (horizontal line)
    const p = node.point;

    // Draw the point
    visualizer.drawPoint(p[0], p[1], { fill: '#3498db', radius: 4 });

    // Draw the splitting line clipped to bounds
    if (axis === 0) {
        // Vertical line at p[0]
        visualizer.drawLine(p[0], bounds.y, p[0], bounds.y + bounds.h, { stroke: '#ccc' });

        // Recurse left: x < p[0]
        // Left child bounds: x, y, w = p[0] - x, h
        drawNode(node.left, { x: bounds.x, y: bounds.y, w: p[0] - bounds.x, h: bounds.h });

        // Recurse right: x >= p[0]
        // Right child bounds: p[0], y, w = (x+w) - p[0], h
        drawNode(node.right, { x: p[0], y: bounds.y, w: (bounds.x + bounds.w) - p[0], h: bounds.h });

    } else {
        // Horizontal line at p[1]
        visualizer.drawLine(bounds.x, p[1], bounds.x + bounds.w, p[1], { stroke: '#ccc' });

        // Recurse left (in KDTree left means smaller coordinate): y < p[1]
        // Bottom/Top depends on coord system. y=0 is top.
        // Left child (smaller y) is top part visually.
        drawNode(node.left, { x: bounds.x, y: bounds.y, w: bounds.w, h: p[1] - bounds.y });

        // Recurse right (larger y) is bottom part.
        drawNode(node.right, { x: bounds.x, y: p[1], w: bounds.w, h: (bounds.y + bounds.h) - p[1] });
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
const svgNode = visualizer.svg.node();
d3.select(svgNode).on('click', (event) => {
    const [x, y] = d3.pointer(event);
    if (modeSelect.value === 'insert') {
        tree.insert([x, y]);
        render();
    } else if (modeSelect.value === 'nearest') {
        nearestQuery = { x, y };
        render();
    }
});

d3.select(svgNode).on('mousemove', (event) => {
    if (modeSelect.value === 'nearest') {
        const [x, y] = d3.pointer(event);
        nearestQuery = { x, y };
        render();
    }
});
