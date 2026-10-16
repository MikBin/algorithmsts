/**
 * Graph Structures and Algorithms Usage Examples
 *
 * This file demonstrates how to use the graph data structures
 * and algorithms provided by the Algorithmsts library.
 */

import {
  // Graph structures
  AdjacencyListGraph,
  AdjacencyMatrixGraph,

  // Graph algorithms
  BreadthFirstSearch,
  DepthFirstSearch,
  DijkstraAlgorithm,
  AStarAlgorithm,
  KruskalAlgorithm,
  PrimAlgorithm,
  TopologicalSort,
  CycleDetection,
} from "@mikbin80/algorithmsts/graphs";

/**
 * Example 1: Creating and Using Adjacency List Graphs
 */
function adjacencyListGraphExample() {
  console.log("=== Adjacency List Graph Example ===");

  // Create an undirected unweighted graph
  const graph = new AdjacencyListGraph<string>(false, false);

  // Add vertices
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");

  console.log("Vertices:", graph.getVertices());

  // Add edges
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "C");
  graph.addEdge("B", "D");

  console.log("Edges count:", graph.getEdgeCount());

  // Check connections
  console.log("A connected to B:", graph.hasEdge("A", "B"));
  console.log("Neighbors of A:", graph.getNeighbors("A"));
  console.log("Neighbors of B:", graph.getNeighbors("B"));

  // Remove an edge
  graph.removeEdge("A", "C");
  console.log("After removing A-C edge, neighbors of A:", graph.getNeighbors("A"));

  // Remove a vertex
  graph.removeVertex("D");
  console.log("After removing vertex D, vertices:", graph.getVertices());
}

/**
 * Example 2: Working with Weighted Graphs
 */
function weightedGraphExample() {
  console.log("\n=== Weighted Graph Example ===");

  // Create a directed weighted graph
  const graph = new AdjacencyListGraph<string>(true, true);

  // Add vertices
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");

  // Add weighted edges
  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "C", 5);
  graph.addEdge("B", "D", 10);
  graph.addEdge("C", "D", 3);

  console.log("Graph is directed:", graph.isDirected());
  console.log("Graph is weighted:", graph.isWeighted());

  // Get edge weights
  console.log("Weight A->B:", graph.getEdgeWeight("A", "B"));
  console.log("Weight C->D:", graph.getEdgeWeight("C", "D"));

  // Get all edges with weights
  console.log("All edges:", graph.getEdges());
}

/**
 * Example 3: Adjacency Matrix vs Adjacency List
 */
function graphRepresentationComparison() {
  console.log("\n=== Graph Representation Comparison ===");

  const vertices = ["A", "B", "C", "D", "E"];

  // Create both representations
  const listGraph = new AdjacencyListGraph<string>(false, false);
  const matrixGraph = new AdjacencyMatrixGraph<string>(false, false);

  // Add vertices to both
  vertices.forEach((v) => {
    listGraph.addVertex(v);
    matrixGraph.addVertex(v);
  });

  // Add same edges to both
  const edges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "C"],
    ["B", "D"],
    ["C", "E"],
    ["D", "E"],
  ];

  edges.forEach(([from, to]) => {
    listGraph.addEdge(from, to);
    matrixGraph.addEdge(from, to);
  });

  console.log("Adjacency List - Neighbors of B:", listGraph.getNeighbors("B"));
  console.log("Adjacency Matrix - Neighbors of B:", matrixGraph.getNeighbors("B"));

  console.log(
    "Both have same edge count:",
    listGraph.getEdgeCount() === matrixGraph.getEdgeCount(),
  );
  console.log(
    "Both have same vertex count:",
    listGraph.getVertexCount() === matrixGraph.getVertexCount(),
  );
}

/**
 * Example 4: Breadth-First Search (BFS)
 */
function bfsExample() {
  console.log("\n=== Breadth-First Search Example ===");

  const graph = new AdjacencyListGraph<string>(false, false);

  // Create a graph
  ["A", "B", "C", "D", "E", "F"].forEach((v) => graph.addVertex(v));

  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("B", "E");
  graph.addEdge("C", "F");

  // Perform BFS
  const bfs = new BreadthFirstSearch();
  const result = bfs.execute({ graph, startVertex: "A" });

  console.log("BFS starting from A:");
  console.log("Visited order:", result.visited);
  console.log("Traversal tree:", result.traversalTree);
}

/**
 * Example 5: Depth-First Search (DFS)
 */
function dfsExample() {
  console.log("\n=== Depth-First Search Example ===");

  const graph = new AdjacencyListGraph<string>(false, false);

  // Create a graph
  ["A", "B", "C", "D", "E", "F"].forEach((v) => graph.addVertex(v));

  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("B", "E");
  graph.addEdge("C", "F");

  // Perform DFS
  const dfs = new DepthFirstSearch();
  const result = dfs.execute({ graph, startVertex: "A" });

  console.log("DFS starting from A:");
  console.log("Visited order:", result.visited);
  console.log("Traversal tree:", result.traversalTree);
}

/**
 * Example 6: Dijkstra's Shortest Path Algorithm
 */
function dijkstraExample() {
  console.log("\n=== Dijkstra Shortest Path Example ===");

  const graph = new AdjacencyListGraph<string>(true, true);

  // Create a weighted graph
  ["A", "B", "C", "D", "E"].forEach((v) => graph.addVertex(v));

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "C", 5);
  graph.addEdge("B", "D", 10);
  graph.addEdge("C", "D", 3);
  graph.addEdge("C", "E", 8);
  graph.addEdge("D", "E", 4);

  // Find shortest paths from A
  const dijkstra = new DijkstraAlgorithm();
  const result = dijkstra.execute({ graph, startVertex: "A" });

  console.log("Shortest distances from A:");
  Object.entries(result.distances).forEach(([vertex, distance]) => {
    console.log(`  ${vertex}: ${distance}`);
  });

  console.log("Shortest path to E:", result.path);
}

/**
 * Example 7: A* Pathfinding Algorithm
 */
function aStarExample() {
  console.log("\n=== A* Pathfinding Example ===");

  const graph = new AdjacencyListGraph<string>(true, true);

  // Create a grid-like graph
  const nodes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  nodes.forEach((v) => graph.addVertex(v));

  // Add edges with costs
  graph.addEdge("A", "B", 1);
  graph.addEdge("A", "D", 1);
  graph.addEdge("B", "C", 1);
  graph.addEdge("B", "E", 1);
  graph.addEdge("C", "F", 1);
  graph.addEdge("D", "E", 1);
  graph.addEdge("D", "G", 1);
  graph.addEdge("E", "F", 1);
  graph.addEdge("E", "H", 1);
  graph.addEdge("F", "I", 1);
  graph.addEdge("G", "H", 1);
  graph.addEdge("H", "I", 1);

  // A* with Manhattan distance heuristic
  const aStar = new AStarAlgorithm();
  const result = aStar.execute({
    graph,
    startVertex: "A",
    goalVertex: "I",
    heuristic: (vertex: string) => {
      // Simple heuristic based on grid position
      const positions: Record<string, [number, number]> = {
        A: [0, 0],
        B: [1, 0],
        C: [2, 0],
        D: [0, 1],
        E: [1, 1],
        F: [2, 1],
        G: [0, 2],
        H: [1, 2],
        I: [2, 2],
      };
      const [x, y] = positions[vertex] || [0, 0];
      const [gx, gy] = positions.I;
      return Math.abs(gx - x) + Math.abs(gy - y);
    },
  });

  console.log("A* path from A to I:", result.path);
  console.log("Total path cost:", result.cost);
}

/**
 * Example 8: Minimum Spanning Tree - Kruskal's Algorithm
 */
function kruskalExample() {
  console.log("\n=== Kruskal MST Example ===");

  const graph = new AdjacencyListGraph<string>(false, true);

  // Create a weighted undirected graph
  ["A", "B", "C", "D", "E", "F"].forEach((v) => graph.addVertex(v));

  graph.addEdge("A", "B", 2);
  graph.addEdge("A", "C", 3);
  graph.addEdge("B", "C", 4);
  graph.addEdge("B", "D", 5);
  graph.addEdge("C", "D", 6);
  graph.addEdge("C", "E", 7);
  graph.addEdge("D", "E", 8);
  graph.addEdge("D", "F", 9);
  graph.addEdge("E", "F", 10);

  // Find MST using Kruskal's algorithm
  const kruskal = new KruskalAlgorithm();
  const result = kruskal.execute({ graph });

  console.log("Kruskal MST edges:");
  result.edges.forEach((edge) => {
    console.log(`  ${edge.from} -- ${edge.to} (weight: ${edge.weight})`);
  });
  console.log("Total MST weight:", result.totalWeight);
}

/**
 * Example 9: Minimum Spanning Tree - Prim's Algorithm
 */
function primExample() {
  console.log("\n=== Prim MST Example ===");

  const graph = new AdjacencyListGraph<string>(false, true);

  // Create the same graph as Kruskal example
  ["A", "B", "C", "D", "E", "F"].forEach((v) => graph.addVertex(v));

  graph.addEdge("A", "B", 2);
  graph.addEdge("A", "C", 3);
  graph.addEdge("B", "C", 4);
  graph.addEdge("B", "D", 5);
  graph.addEdge("C", "D", 6);
  graph.addEdge("C", "E", 7);
  graph.addEdge("D", "E", 8);
  graph.addEdge("D", "F", 9);
  graph.addEdge("E", "F", 10);

  // Find MST using Prim's algorithm
  const prim = new PrimAlgorithm();
  const result = prim.execute({ graph, startVertex: "A" });

  console.log("Prim MST edges:");
  result.edges.forEach((edge) => {
    console.log(`  ${edge.from} -- ${edge.to} (weight: ${edge.weight})`);
  });
  console.log("Total MST weight:", result.totalWeight);
}

/**
 * Example 10: Topological Sort
 */
function topologicalSortExample() {
  console.log("\n=== Topological Sort Example ===");

  const graph = new AdjacencyListGraph<string>(true, false);

  // Create a DAG (Directed Acyclic Graph)
  ["A", "B", "C", "D", "E", "F"].forEach((v) => graph.addVertex(v));

  // Add edges representing dependencies
  graph.addEdge("A", "B"); // A before B
  graph.addEdge("A", "C"); // A before C
  graph.addEdge("B", "D"); // B before D
  graph.addEdge("C", "D"); // C before D
  graph.addEdge("C", "E"); // C before E
  graph.addEdge("D", "F"); // D before F
  graph.addEdge("E", "F"); // E before F

  // Perform topological sort
  const topoSort = new TopologicalSort();
  const result = topoSort.execute({ graph });

  console.log("Topological order:", result.order);
  console.log("Is DAG:", result.isDAG);
}

/**
 * Example 11: Cycle Detection
 */
function cycleDetectionExample() {
  console.log("\n=== Cycle Detection Example ===");

  // Test with acyclic graph
  const dag = new AdjacencyListGraph<string>(true, false);
  ["A", "B", "C", "D"].forEach((v) => dag.addVertex(v));
  dag.addEdge("A", "B");
  dag.addEdge("A", "C");
  dag.addEdge("B", "D");
  dag.addEdge("C", "D");

  const cycleDetector1 = new CycleDetection();
  const result1 = cycleDetector1.execute({ graph: dag });

  console.log("DAG has cycle:", result1.hasCycle);

  // Test with cyclic graph
  const cyclicGraph = new AdjacencyListGraph<string>(true, false);
  ["A", "B", "C"].forEach((v) => cyclicGraph.addVertex(v));
  cyclicGraph.addEdge("A", "B");
  cyclicGraph.addEdge("B", "C");
  cyclicGraph.addEdge("C", "A"); // Creates a cycle

  const cycleDetector2 = new CycleDetection();
  const result2 = cycleDetector2.execute({ graph: cyclicGraph });

  console.log("Cyclic graph has cycle:", result2.hasCycle);
  console.log("Cycle vertices:", result2.cycle);
}

/**
 * Example 12: Graph Analysis and Utilities
 */
function graphAnalysisExample() {
  console.log("\n=== Graph Analysis Example ===");

  const graph = new AdjacencyListGraph<string>(false, false);

  // Create a complex graph
  ["A", "B", "C", "D", "E", "F", "G"].forEach((v) => graph.addVertex(v));

  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "F");
  graph.addEdge("E", "G");
  graph.addEdge("F", "G");

  console.log("Graph statistics:");
  console.log("  Vertices:", graph.getVertexCount());
  console.log("  Edges:", graph.getEdgeCount());
  console.log("  Is connected:", graph.isConnected());
  console.log("  Is directed:", graph.isDirected());
  console.log("  Is weighted:", graph.isWeighted());

  // Degree analysis
  console.log("Vertex degrees:");
  graph.getVertices().forEach((vertex) => {
    console.log(`  ${vertex}: degree ${graph.getDegree(vertex)}`);
  });
}

/**
 * Main demonstration function
 */
export function demonstrateGraphs() {
  console.log("=== Graph Structures and Algorithms Examples ===\n");

  adjacencyListGraphExample();
  weightedGraphExample();
  graphRepresentationComparison();
  bfsExample();
  dfsExample();
  dijkstraExample();
  aStarExample();
  kruskalExample();
  primExample();
  topologicalSortExample();
  cycleDetectionExample();
  graphAnalysisExample();
}

// Run the demonstration if this file is executed directly
if (require.main === module) {
  demonstrateGraphs();
}
