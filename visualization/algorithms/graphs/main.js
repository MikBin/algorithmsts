import * as d3 from 'd3';
import { AdjacencyListGraph } from '../../../src/graphs/structures/AdjacencyListGraph.ts';
import { BreadthFirstSearch } from '../../../src/graphs/algorithms/traversal/BreadthFirstSearch.ts';
import { DepthFirstSearch } from '../../../src/graphs/algorithms/traversal/DepthFirstSearch.ts';
import { DijkstraAlgorithm } from '../../../src/graphs/algorithms/shortest-path/DijkstraAlgorithm.ts';
import { PrimAlgorithm } from '../../../src/graphs/algorithms/spanning-tree/PrimAlgorithm.ts';
import { KruskalAlgorithm } from '../../../src/graphs/algorithms/spanning-tree/KruskalAlgorithm.ts';

// --- Graph Generator ---

function generateRandomGraph(nodeCount = 15, edgeProbability = 0.2, weighted = false) {
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({ id: i }));
    const links = [];

    // Ensure connectivity by building a spanning tree first
    const connected = new Set([0]);
    const unvisited = new Set(nodes.slice(1).map(n => n.id));

    while (unvisited.size > 0) {
        const u = Array.from(connected)[Math.floor(Math.random() * connected.size)];
        const v = Array.from(unvisited)[Math.floor(Math.random() * unvisited.size)];

        const weight = weighted ? Math.floor(Math.random() * 10) + 1 : 1;
        links.push({ source: u, target: v, weight });

        unvisited.delete(v);
        connected.add(v);
    }

    // Add random edges
    for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
            // Check if edge already exists
            if (links.some(l => (l.source === i && l.target === j) || (l.source === j && l.target === i))) {
                continue;
            }

            if (Math.random() < edgeProbability) {
                const weight = weighted ? Math.floor(Math.random() * 10) + 1 : 1;
                links.push({ source: i, target: j, weight });
            }
        }
    }

    return { nodes, links };
}

function generateGridGraph(rows = 5, cols = 5, weighted = false) {
    const nodes = [];
    const links = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const id = r * cols + c;
            nodes.push({ id, fx: c * 100 + 50, fy: r * 100 + 50 }); // Fixed positions

            // Right neighbor
            if (c < cols - 1) {
                const weight = weighted ? Math.floor(Math.random() * 10) + 1 : 1;
                links.push({ source: id, target: id + 1, weight });
            }

            // Bottom neighbor
            if (r < rows - 1) {
                const weight = weighted ? Math.floor(Math.random() * 10) + 1 : 1;
                links.push({ source: id, target: id + cols, weight });
            }
        }
    }

    return { nodes, links };
}

// Adapter to convert D3 graph data to Library Graph Structure
function toLibraryGraph(graphData, directed = false, weighted = false) {
    const graph = new AdjacencyListGraph(directed, weighted);

    // Add vertices
    graphData.nodes.forEach(n => {
        graph.addVertex(n.id);
    });

    // Add edges
    graphData.links.forEach(l => {
        // D3 might transform source/target to objects if already simulated
        const u = typeof l.source === 'object' ? l.source.id : l.source;
        const v = typeof l.target === 'object' ? l.target.id : l.target;

        // Check if vertices exist (should generally be true if we added all nodes)
        if (graph.getVertices().includes(u) && graph.getVertices().includes(v)) {
             if (weighted) {
                graph.addEdge(u, v, l.weight);
             } else {
                graph.addEdge(u, v);
             }
        }
    });

    return graph;
}


// --- Visualizer ---

class GraphVisualizer {
    constructor(containerId) {
        this.container = document.querySelector(containerId);
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

        // Zoom support
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

        // Links
        this.links = this.linkGroup.selectAll('.link-container')
            .data(graph.links)
            .join('g')
            .attr('class', 'link-container');

        // Remove old lines and text if re-joining
        this.links.selectAll('*').remove();

        this.links.append('line')
            .attr('class', 'link');

        // Weights
        this.links.append('text')
            .attr('class', 'link-label')
            .text(d => d.weight > 1 ? d.weight : '')
            .attr('dy', -5);

        // Nodes
        this.nodes = this.nodeGroup.selectAll('.node')
            .data(graph.nodes)
            .join('g')
            .attr('class', 'node')
            .call(this.drag(this.simulation));

        this.nodes.selectAll('*').remove();

        this.nodes.append('circle')
            .attr('r', 20);

        this.nodes.append('text')
            .text(d => d.id);

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

        this.links.selectAll('text')
            .attr('x', d => (d.source.x + d.target.x) / 2)
            .attr('y', d => (d.source.y + d.target.y) / 2);

        this.nodes
            .attr('transform', d => `translate(${d.x},${d.y})`);
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
        // Reset classes
        this.nodes.selectAll('circle').attr('class', '');
        this.links.selectAll('line').attr('class', 'link');

        // Apply state
        if (state.visited) {
            this.nodes.selectAll('circle')
                .filter(d => state.visited.has(d.id))
                .classed('visited', true);
        }

        if (state.processing !== undefined && state.processing !== null) {
             // Processing can be a node ID or an edge object depending on algo
             if (typeof state.processing === 'object') {
                 // It's likely an edge (Kruskal)
                 const edge = state.processing;
                 this.links.selectAll('line')
                     .filter(d =>
                         (d.source.id === edge.source && d.target.id === edge.target) ||
                         (d.source.id === edge.target && d.target.id === edge.source)
                     )
                     .classed('processing', true);
             } else {
                 // It's a node
                 this.nodes.selectAll('circle')
                    .filter(d => d.id === state.processing)
                    .classed('processing', true);
             }
        }

        if (state.path) {
            // Highlight nodes in path
            this.nodes.selectAll('circle')
                .filter(d => state.path.includes(d.id))
                .classed('path', true);

            // Highlight edges in path
            this.links.selectAll('line')
                .classed('path', d => {
                     for (let i = 0; i < state.path.length - 1; i++) {
                         const u = state.path[i];
                         const v = state.path[i+1];
                         if ((d.source.id === u && d.target.id === v) ||
                             (d.source.id === v && d.target.id === u)) {
                             return true;
                         }
                     }
                     return false;
                });
        }

        if (state.mst) {
             this.links.selectAll('line')
                .classed('mst', d => {
                    return state.mst.some(edge =>
                        (edge.source === d.source.id && edge.target === d.target.id) ||
                        (edge.source === d.target.id && edge.target === d.source.id)
                    );
                });

             // Mark visited nodes as finished
             if (state.visited) {
                this.nodes.selectAll('circle')
                    .filter(d => state.visited.has(d.id))
                    .classed('finished', true);
             }
        }

        if (state.distances) {
            // Optional: Show distances?
        }
    }
}


// --- Controller ---

class GraphController {
    constructor() {
        this.visualizer = new GraphVisualizer('#viz-container');
        this.graphData = null; // D3 data
        this.libraryGraph = null; // Core library structure
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

        this.algoCategory = document.getElementById('algo-category');
        this.algoSelect = document.getElementById('algo-select');
        this.graphType = document.getElementById('graph-type');

        // Bindings
        this.btnGenerate.addEventListener('click', () => this.generateGraph());
        this.btnStart.addEventListener('click', () => this.start());
        this.btnPause.addEventListener('click', () => this.togglePause());
        this.btnReset.addEventListener('click', () => this.reset());
        this.speedInput.addEventListener('input', (e) => {
            this.delay = 1005 - e.target.value * 10;
        });
        this.algoCategory.addEventListener('change', () => this.updateAlgoOptions());

        this.updateAlgoOptions();
        this.generateGraph();
    }

    updateAlgoOptions() {
        const category = this.algoCategory.value;
        this.algoSelect.innerHTML = '';

        let options = [];
        if (category === 'traversal') {
            options = [{v: 'bfs', t: 'Breadth First Search'}, {v: 'dfs', t: 'Depth First Search'}];
        } else if (category === 'pathfinding') {
             options = [{v: 'dijkstra', t: 'Dijkstra'}];
        } else if (category === 'spanning-tree') {
             options = [{v: 'prim', t: 'Prim\'s Algorithm'}, {v: 'kruskal', t: 'Kruskal\'s Algorithm'}];
        }

        options.forEach(opt => {
            const el = document.createElement('option');
            el.value = opt.v;
            el.textContent = opt.t;
            this.algoSelect.appendChild(el);
        });
    }

    generateGraph() {
        this.stop();
        const type = this.graphType.value;
        const weighted = this.algoCategory.value !== 'traversal';

        if (type === 'random') {
            this.graphData = generateRandomGraph(15, 0.2, weighted);
        } else if (type === 'grid') {
            this.graphData = generateGridGraph(5, 5, weighted);
        } else if (type === 'circular') {
             const n = 12;
             const nodes = Array.from({length: n}, (_, i) => ({ id: i }));
             const links = [];
             for(let i=0; i<n; i++) {
                 links.push({ source: i, target: (i+1)%n, weight: Math.floor(Math.random()*10)+1 });
                 if (Math.random() > 0.5) {
                      links.push({ source: i, target: (i+Math.floor(n/2))%n, weight: Math.floor(Math.random()*10)+1 });
                 }
             }
             this.graphData = { nodes, links };
        }

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

        const algo = this.algoSelect.value;
        const weighted = this.algoCategory.value !== 'traversal';
        const startNode = this.graphData.nodes[0].id;
        const endNode = this.graphData.nodes[this.graphData.nodes.length - 1].id;

        // Convert to library graph
        // Note: Graph is undirected for this visualization generally
        this.libraryGraph = toLibraryGraph(this.graphData, false, weighted);

        if (algo === 'bfs') {
            const bfs = new BreadthFirstSearch();
            this.generator = bfs.traverseGenerator(this.libraryGraph, startNode);
        }
        else if (algo === 'dfs') {
            const dfs = new DepthFirstSearch();
            this.generator = dfs.traverseGenerator(this.libraryGraph, startNode);
        }
        else if (algo === 'dijkstra') {
            const dijkstra = new DijkstraAlgorithm();
            this.generator = dijkstra.findShortestPathGenerator(this.libraryGraph, startNode, endNode);
        }
        else if (algo === 'prim') {
            const prim = new PrimAlgorithm();
            this.generator = prim.findMSTGenerator(this.libraryGraph);
        }
        else if (algo === 'kruskal') {
            const kruskal = new KruskalAlgorithm();
            this.generator = kruskal.findMSTGenerator(this.libraryGraph);
        }

        this.isRunning = true;
        this.btnStart.disabled = true;
        this.btnPause.disabled = false;

        this.step();
    }

    step() {
        if (!this.isRunning || this.isPaused) return;

        const { value, done } = this.generator.next();

        if (done) {
            this.isRunning = false;
            this.btnStart.disabled = false;
            this.btnPause.disabled = true;
            document.getElementById('status-text').textContent = value && value.message ? value.message : 'Completed';

            // If the last step has visualization data, show it
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
    }
}

new GraphController();
