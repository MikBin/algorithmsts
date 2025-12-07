import * as d3 from 'd3';
import { BPlusTree } from '../../../src/data-structures/b-plus-tree/bPlusTree.ts';
import { diagonal } from '../../assets/common.js';
import { TreeVisualizer } from '../../assets/common.js';

let order = 4; // Min t
// BPlusTree implementation uses 'order' as MAX degree or size?
// source: `if (node.keys.length <= this.order - 1) return null; // within capacity`
// So order is max keys + 1? i.e. max children?
// Constructor args: (compare, order).

let tree = new BPlusTree((a, b) => a - b, order);

class BPlusTreeVisualizer extends TreeVisualizer {
    constructor(container, options) {
        super(container, options);
    }

    // Override update to render custom nodes and leaf links
    update(rootData) {
        if (!rootData) {
            this.svg.selectAll('*').remove();
            return;
        }

        const root = d3.hierarchy(rootData, d => d.children);

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

        // Node Rectangle
        nodeEnter.append('rect')
            .attr('rx', 5)
            .attr('ry', 5)
            .style('fill', d => d.data.isLeaf ? '#e8f6f3' : '#fff') // Differentiate leaves
            .style('stroke', '#2c3e50')
            .style('stroke-width', '2px');

        // Node Text
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
            .attr('width', d => Math.max(30, (d.data.keys.length * 25) + 10))
            .attr('height', 20)
            .attr('x', d => -Math.max(30, (d.data.keys.length * 25) + 10) / 2)
            .attr('y', -10)
            .style('fill', d => d.data.isLeaf ? '#e8f6f3' : '#fff');

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

        // Draw Leaf Links (Linked List at bottom)
        // Find leaves
        const leaves = nodes.filter(d => d.data.isLeaf);

        // We need to link leaf i to leaf i+1
        // But d3 layout might not put them in strict left-to-right order of keys if tree is complex,
        // though usually it preserves order.
        // We can sort leaves by x coordinate to be sure?
        // Actually, d3.tree traverses pre-order. Leaves should be in order if input children are in order.

        // Generate leaf links
        const leafLinks = [];
        for (let i = 0; i < leaves.length - 1; i++) {
            leafLinks.push({
                source: leaves[i],
                target: leaves[i+1],
                id: `leaf-link-${leaves[i].data.id}-${leaves[i+1].data.id}`
            });
        }

        const leafLink = this.svg.selectAll('path.leaf-link')
            .data(leafLinks, d => d.id);

        const leafLinkEnter = leafLink.enter().append('path')
            .attr('class', 'leaf-link')
            .attr('d', d => `M ${d.source.x} ${d.source.y + 10} L ${d.target.x} ${d.target.y + 10}`)
            .style('stroke', '#27ae60')
            .style('stroke-dasharray', '4')
            .style('fill', 'none')
            .style('marker-end', 'url(#arrow)'); // Optional arrow

        leafLinkEnter.merge(leafLink)
            .transition()
            .duration(this.duration)
            .attr('d', d => `M ${d.source.x} ${d.source.y + 10} L ${d.target.x} ${d.target.y + 10}`);

        leafLink.exit().remove();
    }
}
// Re-import diagonal
BPlusTreeVisualizer.prototype.diagonal = diagonal;

const visualizer = new BPlusTreeVisualizer('#tree-container');

function convertToHierarchy(node, idCounter = { val: 0 }) {
    if (!node) return null;

    const hierarchyNode = {
        keys: node.keys,
        isLeaf: node.isLeaf,
        id: idCounter.val++,
        children: []
    };

    if (!node.isLeaf && node.children) {
        node.children.forEach(child => {
            hierarchyNode.children.push(convertToHierarchy(child, idCounter));
        });
    }

    return hierarchyNode;
}

function update() {
    const root = tree['root']; // Access private root
    const hierarchy = convertToHierarchy(root);
    visualizer.update(hierarchy);
}

d3.select('#add-node').on('click', () => {
    const val = parseInt(d3.select('#node-value').property('value'));
    if (!isNaN(val)) {
      // BPlusTree set(k, v)
      tree.set(val, val);
      update();
      d3.select('#node-value').property('value', '');
    }
});

// Remove not implemented in BPlusTree yet?
// Checking source... "set", "get", "toArray". No delete/remove.
d3.select('#remove-node').attr('disabled', true).attr('title', 'Not implemented in BPlusTree');

d3.select('#random-node').on('click', () => {
    const val = Math.floor(Math.random() * 100);
    tree.set(val, val);
    update();
});

d3.select('#clear-node').on('click', () => {
    tree = new BPlusTree((a, b) => a - b, order);
    update();
});

d3.select('#degree-input').on('change', function() {
    const newOrder = parseInt(this.value);
    if (newOrder >= 3) {
        order = newOrder;
        tree = new BPlusTree((a, b) => a - b, order);
        update();
    }
});

update();
