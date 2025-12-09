import * as d3 from 'd3';
import { GraphVisualizer } from '../../assets/common.js';
import { AdjacencyListGraph } from '../../../src/graphs/structures/AdjacencyListGraph.ts';

// State
let graph = null;
let visualizer = null;
let generator = null; // The generator function for the algorithm step-by-step
let isRunning = false;
let currentGraphType = 'random';

// Setup
document.addEventListener('DOMContentLoaded', () => {
    visualizer = new GraphVisualizer('#graph-container', isDirected(document.getElementById('algorithm-select').value));
    initGraph();

    // Event Listeners
    document.getElementById('generate-random').addEventListener('click', () => {
        initGraph('random');
    });

    document.getElementById('generate-grid').addEventListener('click', () => {
        initGraph('grid');
    });

    document.getElementById('algorithm-select').addEventListener('change', (e) => {
        d3.select('#graph-container').selectAll('*').remove();
        visualizer = new GraphVisualizer('#graph-container', isDirected(e.target.value));
        initGraph(currentGraphType);
    });

    document.getElementById('start-btn').addEventListener('click', startAlgorithm);
    document.getElementById('step-btn').addEventListener('click', stepAlgorithm);
    document.getElementById('reset-btn').addEventListener('click', resetVisualization);
});


function isDirected(algoType) {
    if (algoType === 'prim' || algoType === 'kruskal') return false;
    return true;
}

function initGraph(type) {
    if (type) currentGraphType = type;
    else type = currentGraphType;

    const algoType = document.getElementById('algorithm-select').value;
    const directed = isDirected(algoType);

    graph = new AdjacencyListGraph(directed);
    const nodes = [];
    const links = [];

    if (type === 'random') {
        const nodeCount = 10;
        for (let i = 0; i < nodeCount; i++) {
            graph.addVertex(i.toString());
            nodes.push({ id: i.toString() });
        }

        // Random edges
        for (let i = 0; i < nodeCount; i++) {
            const targets = Math.floor(Math.random() * 3) + 1;
            for (let j = 0; j < targets; j++) {
                const target = Math.floor(Math.random() * nodeCount);
                if (target !== i) {
                    const weight = Math.floor(Math.random() * 10) + 1;

                    if (!directed) {
                        if (graph.hasEdge(i.toString(), target.toString()) || graph.hasEdge(target.toString(), i.toString())) {
                            continue;
                        }
                    }

                    graph.addEdge(i.toString(), target.toString(), weight);
                    links.push({ source: i.toString(), target: target.toString(), weight });
                }
            }
        }
    } else if (type === 'grid') {
        const rows = 4;
        const cols = 4;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const id = `${r},${c}`;
                graph.addVertex(id);
                nodes.push({ id });
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const id = `${r},${c}`;
                // Right
                if (c < cols - 1) {
                    const right = `${r},${c+1}`;
                    if (directed || (!graph.hasEdge(id, right) && !graph.hasEdge(right, id))) {
                         graph.addEdge(id, right, 1);
                         links.push({ source: id, target: right, weight: 1 });
                    }
                    // For grid traversal, add reverse edge for easier pathfinding if directed?
                    // Usually grids are undirected or bi-directed.
                    if (directed && !graph.hasEdge(right, id)) {
                        graph.addEdge(right, id, 1);
                        // Visualizer logic for bi-directional link might need 2 links or 1
                        // D3 force usually merges them visually unless configured.
                        // Let's keep it simple: if directed, add reverse link too?
                        // If we add it to links[], it will show as 2 lines.
                        // Let's just add to graph logic but maybe not visual?
                        // Visualizer uses graph.links which we construct manually here.
                        // Let's add it to links too.
                        links.push({ source: right, target: id, weight: 1 });
                    }
                }
                // Down
                if (r < rows - 1) {
                    const down = `${r+1},${c}`;
                    if (directed || (!graph.hasEdge(id, down) && !graph.hasEdge(down, id))) {
                        graph.addEdge(id, down, 1);
                        links.push({ source: id, target: down, weight: 1 });
                    }
                    if (directed && !graph.hasEdge(down, id)) {
                        graph.addEdge(down, id, 1);
                        links.push({ source: down, target: id, weight: 1 });
                    }
                }
            }
        }
    }

    // Clear and update visualizer
    d3.select('#graph-container').selectAll('*').remove();
    visualizer = new GraphVisualizer('#graph-container', directed);
    visualizer.update({ nodes, links });

    log(`Initialized ${type} graph (${directed ? 'Directed' : 'Undirected'}).`);
}

function resetVisualization() {
    d3.selectAll('.node').classed('visited', false).classed('current', false).classed('highlight', false);
    d3.selectAll('.link').classed('visited', false).classed('highlight', false);

    document.getElementById('status-text').textContent = 'Ready';
    document.getElementById('step-btn').disabled = true;
    generator = null;
    isRunning = false;
}

function startAlgorithm() {
    resetVisualization();
    const algoType = document.getElementById('algorithm-select').value;
    const startNode = graph.getAllVertices()[0];

    log(`Starting ${algoType}...`);

    generator = getAlgorithmGenerator(algoType, graph, startNode);
    document.getElementById('step-btn').disabled = false;
    stepAlgorithm();
}

function stepAlgorithm() {
    if (!generator) return;

    try {
        const result = generator.next();
        if (result.done) {
            log('Algorithm finished.');
            document.getElementById('status-text').textContent = 'Finished';
            document.getElementById('step-btn').disabled = true;
        } else {
            const state = result.value;
            visualizeState(state);
        }
    } catch (e) {
        log(`Error: ${e.message}`);
        console.error(e);
    }
}

function visualizeState(state) {
    const { current, visited, frontier } = state;

    const nodes = d3.selectAll('.node');

    nodes.classed('current', d => d.id === current);

    if (visited) {
        nodes.classed('visited', d => visited.has(d.id));
    }

    if (frontier) {
        nodes.classed('highlight', d => frontier.has(d.id));
    }

    if (current) {
         document.getElementById('status-text').textContent = `Visiting ${current}`;
    }
}

function* getAlgorithmGenerator(type, graph, startNode) {
    if (type === 'bfs') {
        yield* bfsGenerator(graph, startNode);
    } else if (type === 'dfs') {
        yield* dfsGenerator(graph, startNode);
    } else if (type === 'dijkstra') {
        yield* dijkstraGenerator(graph, startNode);
    } else if (type === 'astar') {
        yield* aStarGenerator(graph, startNode);
    } else if (type === 'prim') {
        yield* primGenerator(graph);
    } else if (type === 'kruskal') {
        yield* kruskalGenerator(graph);
    }
}

function* bfsGenerator(graph, startNode) {
    const queue = [startNode];
    const visited = new Set();
    visited.add(startNode);

    yield { current: startNode, visited: new Set(visited), frontier: new Set(queue) };

    while (queue.length > 0) {
        const current = queue.shift();

        yield { current, visited: new Set(visited), frontier: new Set(queue) };

        const neighbors = graph.getNeighbors(current);
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                yield { current, visited: new Set(visited), frontier: new Set(queue) };
            }
        }
    }
}

function* dfsGenerator(graph, startNode) {
    const stack = [startNode];
    const visited = new Set();

    while (stack.length > 0) {
        const current = stack.pop();

        if (!visited.has(current)) {
            visited.add(current);
            yield { current, visited: new Set(visited), frontier: new Set(stack) };

            const neighbors = graph.getNeighbors(current);
            for (const neighbor of neighbors) {
                 if (!visited.has(neighbor)) {
                     stack.push(neighbor);
                 }
            }
        }
    }
}

function* dijkstraGenerator(graph, startNode) {
    const distances = new Map();
    const visited = new Set();
    const pq = [{ id: startNode, dist: 0 }];

    graph.getAllVertices().forEach(v => distances.set(v, Infinity));
    distances.set(startNode, 0);

    while (pq.length > 0) {
        pq.sort((a, b) => a.dist - b.dist);
        const { id: current, dist } = pq.shift();

        if (visited.has(current)) continue;
        visited.add(current);

        yield { current, visited: new Set(visited), frontier: new Set(pq.map(n => n.id)) };

        const neighbors = graph.getNeighbors(current);
        for (const neighbor of neighbors) {
            if (visited.has(neighbor)) continue;

            const weight = graph.getEdgeWeight(current, neighbor);
            const newDist = dist + weight;

            if (newDist < distances.get(neighbor)) {
                distances.set(neighbor, newDist);
                pq.push({ id: neighbor, dist: newDist });
                yield { current, visited: new Set(visited), frontier: new Set(pq.map(n => n.id)) };
            }
        }
    }
}

function* aStarGenerator(graph, startNode) {
    const heuristic = (nodeA, nodeB) => {
        try {
            const [r1, c1] = nodeA.split(',').map(Number);
            const [r2, c2] = nodeB.split(',').map(Number);
            if (isNaN(r1) || isNaN(r2)) return 0;
            return Math.abs(r1 - r2) + Math.abs(c1 - c2);
        } catch (e) {
            return 0;
        }
    };

    const vertices = graph.getAllVertices();
    const targetNode = vertices[vertices.length - 1];

    const gScore = new Map();
    const fScore = new Map();
    const visited = new Set();
    const pq = [{ id: startNode, f: 0 }];

    vertices.forEach(v => {
        gScore.set(v, Infinity);
        fScore.set(v, Infinity);
    });

    gScore.set(startNode, 0);
    fScore.set(startNode, heuristic(startNode, targetNode));

    while (pq.length > 0) {
        pq.sort((a, b) => a.f - b.f);
        const { id: current } = pq.shift();

        if (visited.has(current)) continue;
        visited.add(current);

        yield { current, visited: new Set(visited), frontier: new Set(pq.map(n => n.id)) };

        if (current === targetNode) break;

        const neighbors = graph.getNeighbors(current);
        for (const neighbor of neighbors) {
            if (visited.has(neighbor)) continue;

            const tentativeGScore = gScore.get(current) + graph.getEdgeWeight(current, neighbor);

            if (tentativeGScore < gScore.get(neighbor)) {
                gScore.set(neighbor, tentativeGScore);
                const f = tentativeGScore + heuristic(neighbor, targetNode);
                fScore.set(neighbor, f);

                const existing = pq.find(n => n.id === neighbor);
                if (existing) {
                    existing.f = f;
                } else {
                    pq.push({ id: neighbor, f });
                }

                yield { current, visited: new Set(visited), frontier: new Set(pq.map(n => n.id)) };
            }
        }
    }
}

function* primGenerator(graph) {
    const startNode = graph.getAllVertices()[0];
    const visited = new Set();
    const pq = [];

    visited.add(startNode);

    for (const neighbor of graph.getNeighbors(startNode)) {
        pq.push({
            source: startNode,
            target: neighbor,
            weight: graph.getEdgeWeight(startNode, neighbor)
        });
    }

    yield { current: startNode, visited: new Set(visited), frontier: new Set() };

    while (pq.length > 0) {
        pq.sort((a, b) => a.weight - b.weight);
        const edge = pq.shift();

        if (visited.has(edge.target)) continue;

        visited.add(edge.target);
        yield { current: edge.target, visited: new Set(visited), frontier: new Set() };

        for (const neighbor of graph.getNeighbors(edge.target)) {
            if (!visited.has(neighbor)) {
                pq.push({
                    source: edge.target,
                    target: neighbor,
                    weight: graph.getEdgeWeight(edge.target, neighbor)
                });
            }
        }
    }
}

function* kruskalGenerator(graph) {
    const edges = [];
    const vertices = graph.getAllVertices();
    const seenEdges = new Set();

    for (const u of vertices) {
        for (const v of graph.getNeighbors(u)) {
            const weight = graph.getEdgeWeight(u, v);
            const edgeKey = [u, v].sort().join('-');
            if (!seenEdges.has(edgeKey)) {
                seenEdges.add(edgeKey);
                edges.push({ u, v, weight });
            }
        }
    }

    edges.sort((a, b) => a.weight - b.weight);

    const parent = new Map();
    vertices.forEach(v => parent.set(v, v));

    const find = (i) => {
        if (parent.get(i) === i) return i;
        const root = find(parent.get(i));
        parent.set(i, root);
        return root;
    };

    const union = (i, j) => {
        const rootI = find(i);
        const rootJ = find(j);
        if (rootI !== rootJ) {
            parent.set(rootI, rootJ);
            return true;
        }
        return false;
    };

    const mstEdges = [];
    const visited = new Set();

    for (const edge of edges) {
        if (union(edge.u, edge.v)) {
            mstEdges.push(edge);
            visited.add(edge.u);
            visited.add(edge.v);

            yield {
                current: edge.u,
                visited: new Set(visited),
                frontier: new Set([edge.v])
            };
        }
    }
    yield { current: null, visited: new Set(visited), frontier: new Set() };
}


function log(msg) {
    const div = document.createElement('div');
    div.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    const container = document.getElementById('log-container');
    container.insertBefore(div, container.firstChild);
}
