import * as d3 from 'd3';
import { BTree } from '../../../src/data-structures/b-tree/index.ts';
import { TreeVisualizer } from '../../assets/common.js';

let order = 2; // Min order
let tree = new BTree(order);

// Custom BTree Visualizer that handles wide nodes
// We can extend the common visualizer or just instantiate it and override the update logic partially,
// or simpler: Use the common visualizer but map the node structure differently.

// However, standard d3.tree draws one circle per node. B-Tree nodes have multiple keys.
// We need to render nodes as rectangles with text inside.

class BTreeVisualizer extends TreeVisualizer {
    constructor(container, options) {
        super(container, options);
    }

    // Override update to render custom nodes
    update(rootData) {
        if (!rootData) {
            this.svg.selectAll('*').remove();
            return;
        }

        const root = d3.hierarchy(rootData, d => d.children);

        // Adjust node size for layout
        // B-Tree nodes are wider.
        const nodeWidth = 60;
        const nodeHeight = 30;

        // Increase node separation
        const treeLayout = d3.tree()
            .nodeSize([nodeHeight * 2, nodeWidth * 2]) // Separation
            // Actually nodeSize makes x,y absolute coords relative to parent? No, it sets grid.
            // d3.tree().size() sets total size. nodeSize() sets fixed size per node, viewport must scale.
            // Let's stick to .size() but make it wider?
            .size([this.width - this.margin.left - this.margin.right, this.height - this.margin.top - this.margin.bottom]);

        const treeData = treeLayout(root);
        const nodes = treeData.descendants();
        const links = treeData.descendants().slice(1);

        nodes.forEach(d => { d.y = d.depth * 100; }); // Depth spacing

        // Nodes
        const node = this.svg.selectAll('g.node')
            .data(nodes, d => d.data.id);

        const nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${d.x},${d.y})`);

        // Draw Rectangle
        nodeEnter.append('rect')
            .attr('width', d => (d.data.keys.length * 25) + 10) // Dynamic width
            .attr('height', 25)
            .attr('x', d => -((d.data.keys.length * 25) + 10) / 2)
            .attr('y', -12.5)
            .attr('rx', 5)
            .attr('ry', 5);

        // Draw Text
        nodeEnter.append('text')
            .attr('dy', '.35em')
            .attr('text-anchor', 'middle')
            .text(d => d.data.keys.join('|'));

        const nodeUpdate = nodeEnter.merge(node);

        nodeUpdate.transition()
            .duration(this.duration)
            .attr('transform', d => `translate(${d.x},${d.y})`);

        nodeUpdate.select('rect')
            .attr('width', d => (d.data.keys.length * 25) + 10)
            .attr('x', d => -((d.data.keys.length * 25) + 10) / 2);

        nodeUpdate.select('text')
            .text(d => d.data.keys.join('|'));

        const nodeExit = node.exit()
            .transition()
            .duration(this.duration)
            .remove();

        // Links
        const link = this.svg.selectAll('path.link')
            .data(links, d => d.data.id);

        // Custom diagonal might be needed if nodes are very wide,
        // but standard diagonal usually points to center.
        // Since we center the rect at (0,0) relative to group, it works.

        const linkEnter = link.enter().insert('path', 'g')
            .attr('class', 'link')
            .attr('d', d => {
                const o = { x: d.parent ? d.parent.x : d.x, y: d.parent ? d.parent.y : d.y };
                // Using horizontal diagonal logic from common.js but we are Vertical?
                // Wait, common.js diagonal is:
                // `M ${s.x} ${s.y} C ${s.x} ${(s.y + d.y) / 2}, ...`
                // This is Vertical diagonal (x=horizontal pos, y=vertical pos).
                // Wait, let's re-read common.js.
                // `M ${s.x} ${s.y} C ${s.x} ...` -> Start at s.x,s.y. Control points vary Y. End at d.x,d.y.
                // Yes, this is Vertical tree (root at top).

                // My check earlier was confused.
                // Vertical Tree: x varies (width), y increases (depth).
                // Path should go from top (parent) to bottom (child).
                // Control points should be at same X as start/end but mid Y.
                // common.js diagonal: `C ${s.x} ${(s.y+d.y)/2}, ${d.x} ${(s.y+d.y)/2}`.
                // This preserves verticality at start/end. Correct.

                return this.diagonal(o, o); // method from somewhere? diagonal is exported function.
                // We need to import diagonal or define it.
                // common.js exports `diagonal`. But TreeVisualizer class doesn't seem to expose it.
                // We should import it.
            });

        // We need to use the exported diagonal function.
        // Or simpler: define it locally or assign to class.
    }
}

// Re-import diagonal
import { diagonal } from '../../assets/common.js';
BTreeVisualizer.prototype.diagonal = diagonal;

// Also need to patch the link update logic in update() because I overwrote it.
// The snippet above was incomplete for links.
// Let's write the full update method properly.

BTreeVisualizer.prototype.update = function(rootData) {
        if (!rootData) {
            this.svg.selectAll('*').remove();
            return;
        }

        const root = d3.hierarchy(rootData, d => d.children);

        // Use a layout that handles variable node sizes better?
        // Standard tree is fine, we just make nodes look wide.

        const treeLayout = d3.tree()
            .size([this.width - this.margin.left - this.margin.right, this.height - this.margin.top - this.margin.bottom]);

        const treeData = treeLayout(root);
        const nodes = treeData.descendants();
        const links = treeData.descendants().slice(1);

        nodes.forEach(d => { d.y = d.depth * 80; });

        // Nodes
        const node = this.svg.selectAll('g.node')
            .data(nodes, d => d.data.id);

        const nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${d.x},${d.y})`);

        nodeEnter.append('rect')
            .attr('rx', 5)
            .attr('ry', 5)
            .style('fill', '#fff')
            .style('stroke', '#2c3e50')
            .style('stroke-width', '2px');

        nodeEnter.append('text')
            .attr('dy', '.35em')
            .attr('text-anchor', 'middle')
            .style('font-size', '12px')
            .style('fill', '#2c3e50');

        const nodeUpdate = nodeEnter.merge(node);

        nodeUpdate.transition()
            .duration(this.duration)
            .attr('transform', d => `translate(${d.x},${d.y})`);

        nodeUpdate.select('rect')
            .attr('width', d => Math.max(30, (d.data.keys.length * 20) + 10))
            .attr('height', 20)
            .attr('x', d => -Math.max(30, (d.data.keys.length * 20) + 10) / 2)
            .attr('y', -10);

        nodeUpdate.select('text')
            .text(d => d.data.keys.join('|'));

        const nodeExit = node.exit()
            .transition()
            .duration(this.duration)
            .remove();

        // Links
        const link = this.svg.selectAll('path.link')
            .data(links, d => d.data.id);

        const linkEnter = link.enter().insert('path', 'g')
            .attr('class', 'link')
            .attr('d', d => {
                const o = { x: d.parent ? d.parent.x : d.x, y: d.parent ? d.parent.y : d.y };
                return diagonal(o, o);
            });

        linkEnter.merge(link)
            .transition()
            .duration(this.duration)
            .attr('d', d => diagonal(d.parent, d));

        link.exit().transition()
            .duration(this.duration)
            .attr('d', d => {
               const o = { x: d.parent.x, y: d.parent.y };
               return diagonal(o, o);
            })
            .remove();
};


const visualizer = new BTreeVisualizer('#tree-container');


function convertToHierarchy(node, idCounter = { val: 0 }) {
    if (!node) return null;

    const hierarchyNode = {
        keys: node.keys,
        id: idCounter.val++,
        children: []
    };

    if (!node.isLeaf) {
        node.children.forEach(child => {
            hierarchyNode.children.push(convertToHierarchy(child, idCounter));
        });
    }

    return hierarchyNode;
}

function update() {
    const root = tree['_root']; // Access private root
    const hierarchy = convertToHierarchy(root);
    visualizer.update(hierarchy);
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
      tree.delete(val);
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

d3.select('#degree-input').on('change', function() {
    const newOrder = parseInt(this.value);
    if (newOrder >= 2) {
        order = newOrder;
        tree = new BTree(order);
        update();
    }
});

update();
