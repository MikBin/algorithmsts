import * as d3 from 'd3';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph.ts';
import { BreadthFirstSearch } from '../../../../src/graphs/algorithms/traversal/BreadthFirstSearch.ts';

// --- Graph Generator ---

function generateRandomGraph(nodeCount = 15, edgeProbability = 0.2) {
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({ id: `Node_${i}` }));
    const links = [];

    // Ensure connectivity by building a spanning tree first
    const connected = new Set([nodes[0].id]);
    const unvisited = new Set(nodes.slice(1).map(n => n.id));

    while (unvisited.size > 0) {
        const u = Array.from(connected)[Math.floor(Math.random() * connected.size)];
        const v = Array.from(unvisited)[Math.floor(Math.random() * unvisited.size)];

        links.push({ source: u, target: v });

        unvisited.delete(v);
        connected.add(v);
    }

    // Add random edges
    for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
            const u = nodes[i].id;
            const v = nodes[j].id;

            if (links.some(l => (l.source === u && l.target === v) || (l.source === v && l.target === u))) {
                continue;
            }

            if (Math.random() < edgeProbability) {
                links.push({ source: u, target: v });
            }
        }
    }

    return { nodes, links };
}

// Adapter to convert D3 graph data to Library Graph Structure
function toLibraryGraph(graphData) {
    const graph = new AdjacencyListGraph(false, false);

    graphData.nodes.forEach(n => {
        graph.addVertex(n.id);
    });

    graphData.links.forEach(l => {
        const u = typeof l.source === 'object' ? l.source.id : l.source;
        const v = typeof l.target === 'object' ? l.target.id : l.target;

        if (graph.getVertices().includes(u) && graph.getVertices().includes(v)) {
            graph.addEdge(u, v);
        }
    });

    return graph;
}

// --- Visualizer ---

class BFSVisualizer {
    constructor(containerId, queueContainerId) {
        this.container = document.querySelector(containerId);
        this.queueContainer = document.querySelector(queueContainerId);
        this.width = this.container.clientWidth;
        this.height = this.container.clientHeight;

        this.svg = d3.select(containerId).append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', [0, 0, this.width, this.height]);

        this.simulation = d3.forceSimulation()
            .force('link', d3.forceLink().id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(this.width / 2, this.height / 2));

        this.g = this.svg.append('g');

        this.svg.call(d3.zoom()
            .extent([[0, 0], [this.width, this.height]])
            .scaleExtent([0.1, 4])
            .on('zoom', (event) => {
                this.g.attr('transform', event.transform);
            }));

        this.linkGroup = this.g.append('g').attr('class', 'links');
        this.nodeGroup = this.g.append('g').attr('class', 'nodes');
    }

    draw(graph) {
        this.graph = graph;

        this.links = this.linkGroup.selectAll('.link-container')
            .data(graph.links)
            .join('g')
            .attr('class', 'link-container');

        this.links.selectAll('*').remove();
        this.links.append('line').attr('class', 'link');

        this.nodes = this.nodeGroup.selectAll('.node')
            .data(graph.nodes)
            .join('g')
            .attr('class', 'node')
            .call(this.drag(this.simulation));

        this.nodes.selectAll('*').remove();

        this.nodes.append('circle').attr('r', 20);
        this.nodes.append('text').text(d => d.id.replace('Node_', ''));

        this.simulation.nodes(graph.nodes).on('tick', () => this.ticked());
        this.simulation.force('link').links(graph.links);
        this.simulation.alpha(1).restart();
    }

    ticked() {
        this.links.selectAll('line')
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        this.nodes.attr('transform', d => `translate(${d.x},${d.y})`);
    }

    drag(simulation) {
        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            if (!d.fixed) {
                 d.fx = null;
                 d.fy = null;
            }
        }

        return d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended);
    }

    updateState(state) {
        if (!state) return;

        // Reset classes
        this.nodes.selectAll('circle').attr('class', '');

        // Render queue in sidebar
        this.queueContainer.innerHTML = '';
        if (state.queue) {
            // Queue elements
            state.queue.forEach((node, index) => {
                const item = document.createElement('div');
                item.className = 'queue-item';
                item.textContent = node;
                // Add to bottom so it displays bottom-up
                this.queueContainer.prepend(item);
            });
        }

        if (state.levels) {
            // Determine level-based color and mark queued
            this.nodes.selectAll('circle').attr('class', d => {
                if (state.processing === d.id) {
                    return 'processing';
                }

                if (state.visited && state.visited.has(d.id)) {
                    if (state.queue && state.queue.includes(d.id)) {
                        return 'in-queue';
                    }

                    const level = state.levels.get(d.id);
                    if (level === undefined) return '';
                    if (level >= 3) return 'visited-level-3';
                    return `visited-level-${level}`;
                }
                return '';
            });
        }
    }
}

// --- Controller ---

class BFSController {
    constructor() {
        this.visualizer = new BFSVisualizer('#viz-container', '#queue-container');
        this.graphData = null;
        this.libraryGraph = null;
        this.generator = null;
        this.isRunning = false;
        this.isPaused = false;
        this.timer = null;
        this.delay = 500;

        // UI
        this.btnGenerate = document.getElementById('btn-generate');
        this.btnStart = document.getElementById('btn-start');
        this.btnPause = document.getElementById('btn-pause');
        this.btnReset = document.getElementById('btn-reset');
        this.speedInput = document.getElementById('speed');
        this.startNodeSelect = document.getElementById('start-node');

        // Bindings
        this.btnGenerate.addEventListener('click', () => this.generateGraph());
        this.btnStart.addEventListener('click', () => this.start());
        this.btnPause.addEventListener('click', () => this.togglePause());
        this.btnReset.addEventListener('click', () => this.reset());
        this.speedInput.addEventListener('input', (e) => {
            this.delay = 1005 - e.target.value * 10;
        });

        this.generateGraph();
    }

    updateStartNodeOptions() {
        this.startNodeSelect.innerHTML = '';
        this.graphData.nodes.forEach(n => {
            const el = document.createElement('option');
            el.value = n.id;
            el.textContent = n.id.replace('Node_', 'Node ');
            this.startNodeSelect.appendChild(el);
        });
    }

    generateGraph() {
        this.stop();
        this.graphData = generateRandomGraph(12, 0.2);
        this.libraryGraph = toLibraryGraph(this.graphData);

        this.updateStartNodeOptions();
        this.visualizer.draw(this.graphData);

        document.getElementById('status-text').textContent = 'Ready';
        document.getElementById('info-text').textContent = `Nodes: ${this.graphData.nodes.length}, Edges: ${this.graphData.links.length}`;

        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
    }

    start() {
        if (this.isRunning && !this.isPaused) return;
        if (this.isPaused) {
            this.togglePause();
            return;
        }

        const startNode = this.startNodeSelect.value;
        const bfs = new BreadthFirstSearch();
        this.generator = bfs.traverseGenerator(this.libraryGraph, startNode);

        this.isRunning = true;
        this.btnStart.disabled = true;
        this.btnPause.disabled = false;
        this.startNodeSelect.disabled = true;
        this.btnGenerate.disabled = true;

        this.step();
    }

    step() {
        if (!this.isRunning || this.isPaused) return;

        const { value, done } = this.generator.next();

        if (done) {
            this.isRunning = false;
            this.btnStart.disabled = false;
            this.btnPause.disabled = true;
            this.startNodeSelect.disabled = false;
            this.btnGenerate.disabled = false;

            document.getElementById('status-text').textContent = value && value.message ? value.message : 'Completed';
            if (value) this.visualizer.updateState(value);
            return;
        }

        if (value.message) {
            document.getElementById('status-text').textContent = value.message;
        }

        this.visualizer.updateState(value);

        this.timer = setTimeout(() => this.step(), this.delay);
    }

    stop() {
        this.isRunning = false;
        this.isPaused = false;
        clearTimeout(this.timer);
        this.btnPause.textContent = 'Pause';
    }

    togglePause() {
        if (!this.isRunning) return;

        this.isPaused = !this.isPaused;
        this.btnPause.textContent = this.isPaused ? 'Resume' : 'Pause';

        if (!this.isPaused) this.step();
    }

    reset() {
        this.stop();
        this.visualizer.updateState({}); // Clear visualization
        document.getElementById('status-text').textContent = 'Ready';
        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
        this.startNodeSelect.disabled = false;
        this.btnGenerate.disabled = false;
    }
}

new BFSController();
