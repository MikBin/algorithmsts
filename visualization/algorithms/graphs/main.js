import * as d3 from 'd3';

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
        this.links = this.linkGroup.selectAll('.link')
            .data(graph.links)
            .join('g')
            .attr('class', 'link-container');

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
            // Don't release fixed if it was originally fixed (like grid)
            // For now, always release unless explicit logic added
            if (!d.fixed) { // Custom flag if we want
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

        if (state.processing) {
             this.nodes.selectAll('circle')
                .filter(d => d.id === state.processing)
                .classed('processing', true);
        }

        if (state.path) {
            // Highlight nodes
            this.nodes.selectAll('circle')
                .filter(d => state.path.includes(d.id))
                .classed('path', true);

            // Highlight edges in path
            // This is O(E*Path), can be optimized
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
             // Also highlight nodes in MST
             this.nodes.selectAll('circle')
                .classed('finished', true);
        }

        if (state.distances) {
            // Optional: Show distances on nodes
        }
    }
}

// --- Algorithms (Generators) ---

// Helper to get adjacency list
function getAdjacencyList(graph) {
    const adj = new Map();
    graph.nodes.forEach(n => adj.set(n.id, []));
    graph.links.forEach(l => {
        // d3 converts source/target to objects, so we access .id
        const u = typeof l.source === 'object' ? l.source.id : l.source;
        const v = typeof l.target === 'object' ? l.target.id : l.target;
        adj.get(u).push({ to: v, weight: l.weight });
        adj.get(v).push({ to: u, weight: l.weight }); // Undirected
    });
    return adj;
}

function* bfs(graph, startId) {
    const adj = getAdjacencyList(graph);
    const visited = new Set();
    const queue = [startId];
    visited.add(startId);

    yield { type: 'step', visited: new Set(visited), processing: startId, message: `Starting BFS at ${startId}` };

    while (queue.length > 0) {
        const u = queue.shift();
        yield { type: 'step', visited: new Set(visited), processing: u, message: `Visiting ${u}` };

        const neighbors = adj.get(u) || [];
        for (const { to: v } of neighbors) {
            if (!visited.has(v)) {
                visited.add(v);
                queue.push(v);
                yield { type: 'step', visited: new Set(visited), processing: v, message: `Discovered ${v}` };
            }
        }
    }

    yield { type: 'finished', visited: new Set(visited), message: 'BFS Completed' };
}

function* dfs(graph, startId) {
    const adj = getAdjacencyList(graph);
    const visited = new Set();
    const stack = [startId];

    while (stack.length > 0) {
        const u = stack.pop();

        if (!visited.has(u)) {
            visited.add(u);
            yield { type: 'step', visited: new Set(visited), processing: u, message: `Visiting ${u}` };

            const neighbors = adj.get(u) || [];
            // Push in reverse order to visit in natural order (optional)
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const v = neighbors[i].to;
                if (!visited.has(v)) {
                    stack.push(v);
                }
            }
        }
    }

    yield { type: 'finished', visited: new Set(visited), message: 'DFS Completed' };
}

function* dijkstra(graph, startId, endId) {
    const adj = getAdjacencyList(graph);
    const distances = new Map();
    const previous = new Map();
    const pq = []; // Simple array as PQ

    graph.nodes.forEach(n => distances.set(n.id, Infinity));
    distances.set(startId, 0);
    pq.push({ id: startId, dist: 0 });

    const visited = new Set();

    while (pq.length > 0) {
        // Sort DESC because we pop from end? No, let's sort ASC and shift
        pq.sort((a, b) => a.dist - b.dist);
        const { id: u, dist } = pq.shift();

        if (visited.has(u)) continue;
        visited.add(u);

        yield { type: 'step', visited: new Set(visited), processing: u, distances, message: `Processing ${u} (dist: ${dist})` };

        if (u === endId) {
             // Reconstruct path
             const path = [];
             let curr = endId;
             while (curr !== undefined) {
                 path.unshift(curr);
                 curr = previous.get(curr);
             }
             yield { type: 'finished', visited, path, message: `Path found: ${path.join(' -> ')}` };
             return;
        }

        const neighbors = adj.get(u) || [];
        for (const { to: v, weight } of neighbors) {
            if (visited.has(v)) continue;

            const alt = dist + weight;
            if (alt < distances.get(v)) {
                distances.set(v, alt);
                previous.set(v, u);
                pq.push({ id: v, dist: alt });
                yield { type: 'step', visited: new Set(visited), processing: v, distances, message: `Updating ${v} dist to ${alt}` };
            }
        }
    }

    yield { type: 'finished', visited, message: 'No path found' };
}

function* prim(graph) {
    const adj = getAdjacencyList(graph);
    const startId = graph.nodes[0].id;
    const visited = new Set([startId]);
    const mstEdges = [];
    const pq = [];

    // Add initial edges
    (adj.get(startId) || []).forEach(edge => {
        pq.push({ source: startId, target: edge.to, weight: edge.weight });
    });

    yield { type: 'step', visited: new Set(visited), mst: [...mstEdges], message: `Starting Prim at ${startId}` };

    while (visited.size < graph.nodes.length && pq.length > 0) {
        pq.sort((a, b) => a.weight - b.weight);
        const edge = pq.shift();

        if (visited.has(edge.target)) continue;

        visited.add(edge.target);
        mstEdges.push(edge);

        yield { type: 'step', visited: new Set(visited), mst: [...mstEdges], message: `Added edge ${edge.source}-${edge.target} (w: ${edge.weight})` };

        (adj.get(edge.target) || []).forEach(next => {
            if (!visited.has(next.to)) {
                pq.push({ source: edge.target, target: next.to, weight: next.weight });
            }
        });
    }

    yield { type: 'finished', visited: new Set(visited), mst: mstEdges, message: 'MST Completed' };
}

function* kruskal(graph) {
    // Edge list sorted by weight
    const edges = [];
    graph.links.forEach(l => {
         const u = typeof l.source === 'object' ? l.source.id : l.source;
         const v = typeof l.target === 'object' ? l.target.id : l.target;
         edges.push({ source: u, target: v, weight: l.weight });
    });
    edges.sort((a, b) => a.weight - b.weight);

    const parent = new Map();
    graph.nodes.forEach(n => parent.set(n.id, n.id));

    function find(i) {
        if (parent.get(i) === i) return i;
        const root = find(parent.get(i));
        parent.set(i, root);
        return root;
    }

    function union(i, j) {
        const rootI = find(i);
        const rootJ = find(j);
        if (rootI !== rootJ) {
            parent.set(rootI, rootJ);
            return true;
        }
        return false;
    }

    const mstEdges = [];

    for (const edge of edges) {
        yield { type: 'step', visited: new Set(graph.nodes.map(n => n.id)), mst: [...mstEdges], processing: null, message: `Checking edge ${edge.source}-${edge.target} (w: ${edge.weight})` };

        if (union(edge.source, edge.target)) {
            mstEdges.push(edge);
            yield { type: 'step', visited: new Set(graph.nodes.map(n => n.id)), mst: [...mstEdges], message: `Added edge ${edge.source}-${edge.target}` };
        }
    }

    yield { type: 'finished', visited: new Set(graph.nodes.map(n => n.id)), mst: mstEdges, message: 'MST Completed' };
}


// --- Controller ---

class GraphController {
    constructor() {
        this.visualizer = new GraphVisualizer('#viz-container');
        this.graph = null;
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
        const weighted = this.algoCategory.value !== 'traversal'; // Traversals don't need weights usually, but doesn't hurt

        if (type === 'random') {
            this.graph = generateRandomGraph(15, 0.2, weighted);
        } else if (type === 'grid') {
            this.graph = generateGridGraph(5, 5, weighted);
        } else if (type === 'circular') {
            // Simple circular layout
             const n = 12;
             const nodes = Array.from({length: n}, (_, i) => ({ id: i }));
             const links = [];
             for(let i=0; i<n; i++) {
                 links.push({ source: i, target: (i+1)%n, weight: Math.floor(Math.random()*10)+1 });
                 // Add some inner chords
                 if (Math.random() > 0.5) {
                      links.push({ source: i, target: (i+Math.floor(n/2))%n, weight: Math.floor(Math.random()*10)+1 });
                 }
             }
             this.graph = { nodes, links };
        }

        this.visualizer.draw(this.graph);
        document.getElementById('status-text').textContent = 'Ready';
        document.getElementById('info-text').textContent = `Nodes: ${this.graph.nodes.length}, Edges: ${this.graph.links.length}`;

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
        const startNode = this.graph.nodes[0].id; // Default start
        const endNode = this.graph.nodes[this.graph.nodes.length - 1].id; // Default end

        if (algo === 'bfs') this.generator = bfs(this.graph, startNode);
        else if (algo === 'dfs') this.generator = dfs(this.graph, startNode);
        else if (algo === 'dijkstra') this.generator = dijkstra(this.graph, startNode, endNode);
        else if (algo === 'prim') this.generator = prim(this.graph);
        else if (algo === 'kruskal') this.generator = kruskal(this.graph);

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
            document.getElementById('status-text').textContent = 'Completed';
             // If algorithm returned final state in return, handle it?
             // Usually last yield is enough or we rely on visual persistence
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
