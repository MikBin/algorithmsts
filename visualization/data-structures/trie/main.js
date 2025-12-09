import * as d3 from 'd3';
import { Trie } from '../../../../src/data-structures/trie/index.js';

const trie = new Trie();
const container = document.getElementById('tree-container');
const width = container.clientWidth;
const height = container.clientHeight;

// D3 Setup
const svg = d3.select('#tree-container').append('svg')
    .attr('width', width)
    .attr('height', height)
    .call(d3.zoom().on('zoom', (event) => {
        g.attr('transform', event.transform);
    }));

const g = svg.append('g').attr('transform', `translate(${width/2}, 40)`);

const treeLayout = d3.tree().nodeSize([40, 60]);

// Controls
document.getElementById('add-btn').addEventListener('click', () => {
    const input = document.getElementById('word-input');
    const word = input.value.trim();
    if (word) {
        trie.add(word, word); // Storing word as value for simplicity
        input.value = '';
        update();
    }
});

document.getElementById('remove-btn').addEventListener('click', () => {
    const input = document.getElementById('word-input');
    const word = input.value.trim();
    if (word) {
        trie.remove(word);
        input.value = '';
        update();
    }
});

document.getElementById('clear-btn').addEventListener('click', () => {
    trie.clear();
    update();
});

document.getElementById('search-btn').addEventListener('click', () => {
    const input = document.getElementById('word-input');
    const word = input.value.trim();
    if (word) {
        const found = trie.contains(word);
        alert(found ? `Word "${word}" found!` : `Word "${word}" not found.`);
    }
});

// Initial sample data
trie.add("cat", "cat");
trie.add("car", "car");
trie.add("cart", "cart");
trie.add("dog", "dog");
trie.add("do", "do");
update();

function update() {
    const rootNode = trie.getRoot(); // Using the new getRoot method
    const hierarchyData = convertToHierarchy(rootNode);

    // Compute layout
    const root = d3.hierarchy(hierarchyData);
    treeLayout(root);

    // Nodes
    const nodes = g.selectAll('.node')
        .data(root.descendants(), d => d.data.id);

    const nodeEnter = nodes.enter().append('g')
        .attr('class', d => `node ${d.data.isTerminal ? 'terminal' : ''}`)
        .attr('transform', d => `translate(${d.x},${d.y})`);

    nodeEnter.append('circle')
        .attr('r', 15);

    nodeEnter.append('text')
        .text(d => d.data.name);

    // Update existing nodes
    const nodeUpdate = nodes.merge(nodeEnter).transition().duration(500)
        .attr('transform', d => `translate(${d.x},${d.y})`);

    nodes.select('circle')
         .classed('terminal', d => d.data.isTerminal); // Re-apply class for updates? D3 enter/update/exit logic is simpler with merge.

    // Actually easier to just re-apply class on merge
    nodes.merge(nodeEnter).attr('class', d => `node ${d.data.isTerminal ? 'terminal' : ''}`);

    nodes.exit().remove();

    // Links
    const links = g.selectAll('.link')
        .data(root.links(), d => d.target.data.id);

    const linkEnter = links.enter().append('path')
        .attr('class', 'link')
        .attr('d', d => {
            return `M${d.source.x},${d.source.y}
                    L${d.target.x},${d.target.y}`;
        });

    links.merge(linkEnter).transition().duration(500)
        .attr('d', d => {
             return `M${d.source.x},${d.source.y}
                    L${d.target.x},${d.target.y}`;
        });

    links.exit().remove();

    // Link Labels (Characters)
    const labels = g.selectAll('.link-label')
        .data(root.links(), d => d.target.data.id);

    const labelEnter = labels.enter().append('text')
        .attr('class', 'link-label')
        .attr('x', d => (d.source.x + d.target.x) / 2)
        .attr('y', d => (d.source.y + d.target.y) / 2)
        .text(d => d.target.data.char);

    labels.merge(labelEnter).transition().duration(500)
        .attr('x', d => (d.source.x + d.target.x) / 2)
        .attr('y', d => (d.source.y + d.target.y) / 2);

    labels.exit().remove();
}

let idCounter = 0;
function convertToHierarchy(trieNode, char = '', id = 0) {
    if (!trieNode) return null;

    const node = {
        name: char || 'R', // R for Root
        char: char,
        isTerminal: trieNode.terminal,
        id: id,
        children: []
    };

    // trieNode.children is a Map<string, TrieNode>
    for (const [key, childNode] of trieNode.children.entries()) {
        idCounter++;
        node.children.push(convertToHierarchy(childNode, key, idCounter));
    }

    return node;
}
