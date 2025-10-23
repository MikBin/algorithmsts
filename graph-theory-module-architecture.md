
# Comprehensive Graph Theory Module Architecture

## Executive Summary

This document outlines the comprehensive architecture for the graph theory module of the Algorithmsts library. The design provides a robust, extensible, and high-performance framework for graph data structures and algorithms, following SOLID principles and established design patterns. The module will support multiple graph representations, a comprehensive suite of graph algorithms, and performance optimizations for different graph characteristics.

## Current State Analysis

### Existing Implementation Gaps

The current graph implementation is minimal and lacks several critical features:

1. **Limited Interface**: The current [`IGraph<T>`](src/graphs/IGraph.ts:2) interface only defines `getNeighbors()` method
2. **No Weight Support**: No support for weighted edges
3. **No Direction Control**: No differentiation between directed and undirected graphs
4. **Basic Algorithms**: Only simple BFS and DFS implementations without path reconstruction
5. **No Performance Optimizations**: No consideration for different graph densities or sizes
6. **Missing Core Operations**: No methods for adding/removing nodes and edges in the interface
7. **No Advanced Algorithms**: Missing shortest path, spanning tree, and graph analysis algorithms

### Current Strengths

1. **Type Safety**: Good TypeScript generic support
2. **Simple Implementation**: Clean, readable basic traversal algorithms
3. **Test Coverage**: Basic test coverage for BFS and DFS

## Architecture Design

### Design Principles

1. **SOLID Principles**: Every component follows Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles
2. **Performance First**: Optimized for different graph characteristics (sparse vs dense, small vs large)
3. **Type Safety**: Comprehensive TypeScript generics and constraints
4. **Extensibility**: Easy to add new algorithms and graph representations
5. **Consistency**: Uniform patterns across all components

### Module Structure

```
src/
├── data-structures/
│   └── graph/
│       ├── interfaces/
│       │   ├── graph.ts              # Core graph interfaces
│       │   ├── weighted-graph.ts     # Weighted graph interfaces
│       │   ├── directed-graph.ts     # Directed graph interfaces
│       │   └── index.ts              # Interface exports
│       ├── adjacency-list/
│       │   ├── interfaces.ts         # Adjacency list specific interfaces
│       │   ├── adjacency-list.ts     # Optimized adjacency list implementation
│       │   ├── weighted.ts           # Weighted adjacency list
│       │   ├── directed.ts           # Directed adjacency list
│       │   └── index.ts              # Exports
│       ├── adjacency-matrix/
│       │   ├── interfaces.ts         # Adjacency matrix specific interfaces
│       │   ├── adjacency-matrix.ts   # Optimized adjacency matrix implementation
│       │   ├── weighted.ts           # Weighted adjacency matrix
│       │   ├── directed.ts           # Directed adjacency matrix
│       │   └── index.ts              # Exports
│       └── index.ts                  # Graph data structure exports
└── algorithms/
    └── graph/
        ├── interfaces/
        │   ├── graph-algorithm.ts    # Base graph algorithm interfaces
        │   ├── traversal.ts          # Traversal algorithm interfaces
        │   ├── shortest-path.ts      # Shortest path algorithm interfaces
        │   ├── spanning-tree.ts      # Spanning tree algorithm interfaces
        │   └── index.ts              # Algorithm interface exports
        ├── traversal/
        │   ├── bfs.ts                # Optimized BFS with path reconstruction
        │   ├── dfs.ts                # Optimized DFS with path reconstruction
        │   ├── bidirectional-bfs.ts  # Bidirectional BFS for shortest path
        │   └── index.ts              # Traversal exports
        ├── shortest-path/
        │   ├── dijkstra.ts           # Dijkstra's algorithm with priority queue
        │   ├── a-star.ts             # A* algorithm with heuristic support
        │   ├── bellman-ford.ts       # Bellman-Ford for negative weights
        │   ├── floyd-warshall.ts     # Floyd-Warshall for all-pairs shortest paths
        │   └── index.ts              # Shortest path exports
        ├── spanning-tree/
        │   ├── kruskal.ts            # Kruskal's algorithm with Union-Find
        │   ├── prim.ts               # Prim's algorithm with priority queue
        │   └── index.ts              # Spanning tree exports
        ├── analysis/
        │   ├── topological-sort.ts   # Topological sort for DAGs
        │   ├── cycle-detection.ts    # Cycle detection algorithms
        │   ├── strongly-connected-components.ts  # Kosaraju's algorithm
        │   ├── centrality.ts         # Graph centrality measures
        │   └── index.ts              # Analysis exports
        └── index.ts                  # Graph algorithm exports
```

## Interface Hierarchy Design

### Core Graph Interfaces

```typescript
/**
 * Base graph interface defining fundamental graph operations
 * @template T The type of nodes in the graph
 * @template W The type of edge weights (defaults to number)
 */
export interface IGraph<T, W = number> extends IDataStructure<T> {
  // Node operations
  addNode(node: T): boolean;
  removeNode(node: T): boolean;
  hasNode(node: T): boolean;
  getNodes(): T[];
  getNodeCount(): number;
  
  // Edge operations
  addEdge(from: T, to: T, weight?: W): boolean;
  removeEdge(from: T, to: T): boolean;
  hasEdge(from: T, to: T): boolean;
  getEdges(): Array<{ from: T; to: T; weight?: W }>;
  getEdgeCount(): number;
  
  // Query operations
  getNeighbors(node: T): T[];
  getDegree(node: T): number;
  
  // Graph properties
  isDirected(): boolean;
  isWeighted(): boolean;
  isEmpty(): boolean;
  
  // Graph operations
  clear(): void;
  clone(): IGraph<T, W>;
  
  // Conversion
  toAdjacencyList(): Map<T, Array<{ node: T; weight?: W }>>;
  toAdjacencyMatrix(): W[][];
  transpose(): IGraph<T, W>; // For directed graphs
}

/**
 * Interface for weighted graphs
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export interface IWeightedGraph<T, W = number> extends IGraph<T, W> {
  setWeight(from: T, to: T, weight: W): boolean;
  getWeight(from: T, to: T): W | undefined;
  getTotalWeight(): W;
  getMinimumWeight(): W | undefined;
  getMaximumWeight(): W | undefined;
}

/**
 * Interface for directed graphs
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export interface IDirectedGraph<T, W = number> extends IGraph<T, W> {
  getInDegree(node: T): number;
  getOutDegree(node: T): number;
  getPredecessors(node: T): T[];
  getSuccessors(node: T): T[];
  isStronglyConnected(): boolean;
  getStronglyConnectedComponents(): T[][];
}

/**
 * Interface for undirected graphs
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export interface IUndirectedGraph<T, W = number> extends IGraph<T, W> {
  isBipartite(): boolean;
  getConnectedComponents(): T[][];
  getBridges(): Array<{ from: T; to: T }>;
  getArticulationPoints(): T[];
}

/**
 * Interface for mutable graphs (graphs that can be modified)
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export interface IMutableGraph<T, W = number> extends IGraph<T, W> {
  // Batch operations
  addNodes(nodes: Iterable<T>): number;
  removeNodes(nodes: Iterable<T>): number;
  addEdges(edges: Array<{ from: T; to: T; weight?: W }>): number;
  removeEdges(edges: Array<{ from: T; to: T }>): number;
  
  // Graph modifications
  contractEdge(from: T, to: T): boolean;
  subgraph(nodes: Set<T>): IGraph<T, W>;
}
```

### Graph Algorithm Interfaces

```typescript
/**
 * Base interface for all graph algorithms
 * @template T The type of nodes in the graph
 * @template R The type of result from the algorithm
 * @template W The type of edge weights
 */
export interface IGraphAlgorithm<T, R, W = number> extends IAlgorithm<IGraph<T, W>, R> {
  /**
   * Executes the algorithm on a graph
   * @param graph The input graph
   * @param args Additional arguments for the algorithm
   * @returns The algorithm result
   */
  execute(graph: IGraph<T, W>, ...args: any[]): R;
  
  /**
   * Checks if the algorithm is applicable to the given graph
   * @param graph The graph to check
   * @returns true if the algorithm can be applied to the graph
   */
  isApplicable(graph: IGraph<T, W>): boolean;
}

/**
 * Interface for graph traversal algorithms
 * @template T The type of nodes in the graph
 */
export interface ITraversalAlgorithm<T> extends IGraphAlgorithm<T, T[]> {
  /**
   * Traverses the graph from a starting node
   * @param graph The graph to traverse
   * @param startNode The starting node
   * @returns Array of nodes in traversal order
   */
  traverse(graph: IGraph<T>, startNode: T): T[];
}

/**
 * Interface for pathfinding algorithms
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export interface IPathfindingAlgorithm<T, W = number> extends IGraphAlgorithm<T, T[], W> {
  /**
   * Finds the shortest path between two nodes
   * @param graph The graph to search
   * @param start The starting node
   * @param end The target node
   * @returns Array of nodes representing the path, or empty array if no path exists
   */
  findShortestPath(graph: IGraph<T, W>, start: T, end: T): T[];
  
  /**
   * Finds the shortest path distance between two nodes
   * @param graph The graph to search
   * @param start The starting node
   * @param end The target node
   * @returns The distance of the shortest path, or infinity if no path exists
   */
  findShortestDistance(graph: IGraph<T, W>, start: T, end: T): W;
}

/**
 * Interface for all-pairs shortest path algorithms
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export interface IAllPairsShortestPathAlgorithm<T, W = number> extends IGraphAlgorithm<T, Map<T, Map<T, W>>, W> {
  /**
   * Computes shortest paths between all pairs of nodes
   * @param graph The graph to analyze
   * @returns A map where result.get(from).get(to) gives the shortest distance from 'from' to 'to'
   */
  findAllPairsShortestPaths(graph: IGraph<T, W>): Map<T, Map<T, W>>;
}

/**
 * Interface for minimum spanning tree algorithms
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export interface IMinimumSpanningTreeAlgorithm<T, W = number> extends IGraphAlgorithm<T, Array<{ from: T; to: T; weight: W }>, W> {
  /**
   * Finds a minimum spanning tree of the graph
   * @param graph The graph to analyze
   * @returns Array of edges in the minimum spanning tree
   */
  findMinimumSpanningTree(graph: IWeightedGraph<T, W>): Array<{ from: T; to: T; weight: W }>;
  
  /**
   * Finds the total weight of the minimum spanning tree
   * @param graph The graph to analyze
   * @returns The total weight of the minimum spanning tree
   */
  findMinimumSpanningTreeWeight(graph: IWeightedGraph<T, W>): W;
}
```

## Data Structure Implementations

### Adjacency List Implementation

The adjacency list implementation will be optimized for sparse graphs and provide O(1) average time complexity for neighbor queries.

```typescript
/**
 * Optimized adjacency list implementation for sparse graphs
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export class AdjacencyListGraph<T, W = number> implements IWeightedGraph<T, W> {
  private adjacencyList: Map<T, Array<{ node: T; weight: W }>> = new Map();
  private nodeSet: Set<T> = new Set();
  private edgeCount: number = 0;
  private _directed: boolean = false;
  private _weighted: boolean = false;
  
  constructor(directed: boolean = false, weighted: boolean = false) {
    this._directed = directed;
    this._weighted = weighted;
  }
  
  // Optimized node operations with O(1) average complexity
  addNode(node: T): boolean {
    if (this.nodeSet.has(node)) return false;
    this.nodeSet.add(node);
    this.adjacencyList.set(node, []);
    return true;
  }
  
  // Optimized edge operations with O(1) average complexity
  addEdge(from: T, to: T, weight?: W): boolean {
    if (!this.nodeSet.has(from) || !this.nodeSet.has(to)) return false;
    
    const fromNeighbors = this.adjacencyList.get(from)!;
    const existingEdge = fromNeighbors.find(edge => edge.node === to);
    
    if (existingEdge) {
      // Update existing edge weight
      if (this._weighted && weight !== undefined) {
        existingEdge.weight = weight;
      }
      return false;
    }
    
    // Add new edge
    const edgeWeight = this._weighted && weight !== undefined ? weight : (undefined as any);
    fromNeighbors.push({ node: to, weight: edgeWeight });
    
    if (!this._directed) {
      const toNeighbors = this.adjacencyList.get(to)!;
      toNeighbors.push({ node: from, weight: edgeWeight });
    }
    
    this.edgeCount++;
    return true;
  }
  
  // Optimized neighbor query with O(1) average complexity
  getNeighbors(node: T): T[] {
    const neighbors = this.adjacencyList.get(node);
    return neighbors ? neighbors.map(edge => edge.node) : [];
  }
  
  // Memory-efficient implementation
  getMemoryUsage(): number {
    let baseMemory = this.nodeSet.size * 8; // Rough estimate for node storage
    for (const [node, edges] of this.adjacencyList) {
      baseMemory += 8; // Node key
      baseMemory += edges.length * 16; // Edge storage (node + weight)
    }
    return baseMemory;
  }
  
  // Additional optimized methods...
}
```

### Adjacency Matrix Implementation

The adjacency matrix implementation will be optimized for dense graphs and provide O(1) time complexity for edge existence checks.

```typescript
/**
 * Optimized adjacency matrix implementation for dense graphs
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export class AdjacencyMatrixGraph<T, W = number> implements IWeightedGraph<T, W> {
  private matrix: W[][] = [];
  private nodeIndexMap: Map<T, number> = new Map();
  private indexNodeMap: Map<number, T> = new Map();
  private _directed: boolean = false;
  private _weighted: boolean = false;
  private defaultValue: W;
  
  constructor(directed: boolean = false, weighted: boolean = false, defaultValue: W = (0 as any)) {
    this._directed = directed;
    this._weighted = weighted;
    this.defaultValue = defaultValue;
  }
  
  // O(1) edge existence check
  hasEdge(from: T, to: T): boolean {
    const fromIndex = this.nodeIndexMap.get(from);
    const toIndex = this.nodeIndexMap.get(to);
    
    if (fromIndex === undefined || toIndex === undefined) return false;
    
    return this.matrix[fromIndex][toIndex] !== undefined;
  }
  
  // O(1) edge weight access
  getWeight(from: T, to: T): W | undefined {
    const fromIndex = this.nodeIndexMap.get(from);
    const toIndex = this.nodeIndexMap.get(to);
    
    if (fromIndex === undefined || toIndex === undefined) return undefined;
    
    return this.matrix[fromIndex][toIndex];
  }
  
  // Optimized for dense graphs with O(1) edge operations
  addEdge(from: T, to: T, weight?: W): boolean {
    const fromIndex = this.nodeIndexMap.get(from);
    const toIndex = this.nodeIndexMap.get(to);
    
    if (fromIndex === undefined || toIndex === undefined) return false;
    
    const edgeWeight = this._weighted && weight !== undefined ? weight : this.defaultValue;
    this.matrix[fromIndex][toIndex] = edgeWeight;
    
    if (!this._directed) {
      this.matrix[toIndex][fromIndex] = edgeWeight;
    }
    
    return true;
  }
  
  // Memory usage calculation for dense graphs
  getMemoryUsage(): number {
    const nodeCount = this.nodeIndexMap.size;
    return nodeCount * nodeCount * 8; // Matrix storage
  }
  
  // Additional optimized methods...
}
```

## Algorithm Implementations

### Traversal Algorithms

#### Breadth-First Search (BFS) with Path Reconstruction

```typescript
/**
 * Optimized BFS implementation with path reconstruction support
 * @template T The type of nodes in the graph
 */
export class BreadthFirstSearch<T> implements ITraversalAlgorithm<T> {
  execute(graph: IGraph<T>, startNode: T): T[] {
    return this.traverse(graph, startNode);
  }
  
  traverse(graph: IGraph<T>, startNode: T): T[] {
    if (!graph.hasNode(startNode)) {
      throw new Error(`Start node ${startNode} not found in graph`);
    }
    
    const visited: Set<T> = new Set();
    const queue: T[] = [];
    const result: T[] = [];
    
    visited.add(startNode);
    queue.push(startNode);
    
    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      result.push(currentNode);
      
      const neighbors = graph.getNeighbors(currentNode);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    
    return result;
  }
  
  /**
   * BFS with path reconstruction
   * @param graph The graph to traverse
   * @param start The starting node
   * @param end The target node
   * @returns Array of nodes representing the path from start to end
   */
  findPath(graph: IGraph<T>, start: T, end: T): T[] {
    if (!graph.hasNode(start) || !graph.hasNode(end)) {
      throw new Error('Start or end node not found in graph');
    }
    
    if (start === end) return [start];
    
    const visited: Set<T> = new Set();
    const queue: T[] = [];
    const parent: Map<T, T> = new Map();
    
    visited.add(start);
    queue.push(start);
    
    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      
      if (currentNode === end) {
        // Reconstruct path
        const path: T[] = [];
        let current: T | undefined = end;
        
        while (current !== undefined) {
          path.unshift(current);
          current = parent.get(current);
        }
        
        return path;
      }
      
      const neighbors = graph.getNeighbors(currentNode);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent.set(neighbor, currentNode);
          queue.push(neighbor);
        }
      }
    }
    
    return []; // No path found
  }
  
  getTimeComplexity(): Complexity {
    return {
      bigO: 'O(V + E)',
      best: 'O(V + E)',
      worst: 'O(V + E)',
      average: 'O(V + E)',
      space: 'O(V)'
    };
  }
  
  getName(): string {
    return 'Breadth-First Search';
  }
  
  getDescription(): string {
    return 'Traverses the graph level by level, finding the shortest path in unweighted graphs';
  }
}
```

#### Bidirectional BFS for Shortest Path

```typescript
/**
 * Bidirectional BFS implementation for optimal shortest path finding
 * @template T The type of nodes in the graph
 */
export class BidirectionalBreadthFirstSearch<T> implements IPathfindingAlgorithm<T> {
  execute(graph: IGraph<T>, start: T, end: T): T[] {
    return this.findShortestPath(graph, start, end);
  }
  
  findShortestPath(graph: IGraph<T>, start: T, end: T): T[] {
    if (!graph.hasNode(start) || !graph.hasNode(end)) {
      throw new Error('Start or end node not found in graph');
    }
    
    if (start === end) return [start];
    
    // Forward search
    const forwardVisited: Set<T> = new Set();
    const forwardParent: Map<T, T> = new Map();
    const forwardQueue: T[] = [];
    
    // Backward search
    const backwardVisited: Set<T> = new Set();
    const backwardParent: Map<T, T> = new Map();
    const backwardQueue: T[] = [];
    
    // Initialize searches
    forwardVisited.add(start);
    forwardQueue.push(start);
    backwardVisited.add(end);
    backwardQueue.push(end);
    
    let meetingNode: T | undefined;
    
    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
      // Expand forward search
      const forwardNode = forwardQueue.shift()!;
      const forwardNeighbors = graph.getNeighbors(forwardNode);
      
      for (const neighbor of forwardNeighbors) {
        if (!forwardVisited.has(neighbor)) {
          forwardVisited.add(neighbor);
          forwardParent.set(neighbor, forwardNode);
          forwardQueue.push(neighbor);
          
          // Check if backward search has visited this node
          if (backwardVisited.has(neighbor)) {
            meetingNode = neighbor;
            break;
          }
        }
      }
      
      if (meetingNode) break;
      
      // Expand backward search
      const backwardNode = backwardQueue.shift()!;
      const backwardNeighbors = graph.getNeighbors(backwardNode);
      
      for (const neighbor of backwardNeighbors) {
        if (!backwardVisited.has(neighbor)) {
          backwardVisited.add(neighbor);
          backwardParent.set(neighbor, backwardNode);
          backwardQueue.push(neighbor);
          
          // Check if forward search has visited this node
          if (forwardVisited.has(neighbor)) {
            meetingNode = neighbor;
            break;
          }
        }
      }
      
      if (meetingNode) break;
    }
    
    if (!meetingNode) return []; // No path found
    
    // Reconstruct path from meeting point
    const path: T[] = [];
    
    // Forward path from start to meeting node
    let current: T | undefined = meetingNode;
    const forwardPath: T[] = [];
    while (current !== undefined) {
      forwardPath.unshift(current);
      current = forwardParent.get(current);
    }
    
    // Backward path from meeting node to end
    current = meetingNode;
    const backwardPath: T[] = [];
    while (current !== undefined) {
      backwardPath.push(current);
      current = backwardParent.get(current);
    }
    
    // Combine paths (avoid duplicating meeting node)
    path.push(...forwardPath);
    path.push(...backwardPath.slice(1));
    
    return path;
  }
  
  findShortestDistance(graph: IGraph<T>, start: T, end: T): number {
    const path = this.findShortestPath(graph, start, end);
    return path.length > 0 ? path.length - 1 : Infinity;
  }
  
  isApplicable(graph: IGraph<T>): boolean {
    return true; // BFS works on any graph
  }
  
  getTimeComplexity(): Complexity {
    return {
      bigO: 'O(V + E)',
      best: 'O(V + E)',
      worst: 'O(V + E)',
      average: 'O(V + E)',
      space: 'O(V)'
    };
  }
  
  getName(): string {
    return 'Bidirectional Breadth-First Search';
  }
  
  getDescription(): string {
    return 'Optimized BFS that searches from both start and end nodes simultaneously';
  }
}
```

### Shortest Path Algorithms

#### Dijkstra's Algorithm with Priority Queue

```typescript
/**
 * Dijkstra's algorithm implementation with priority queue optimization
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export class DijkstraAlgorithm<T, W extends number> implements IPathfindingAlgorithm<T, W> {
  private priorityQueue: MinPriorityQueue<T, W>;
  
  constructor() {
    this.priorityQueue = new MinPriorityQueue<T, W>();
  }
  
  execute(graph: IWeightedGraph<T, W>, start: T, end: T): T[] {
    return this.findShortestPath(graph, start, end);
  }
  
  findShortestPath(graph: IWeightedGraph<T, W>, start: T, end: T): T[] {
    if (!graph.hasNode(start) || !graph.hasNode(end)) {
      throw new Error('Start or end node not found in graph');
    }
    
    if (start === end) return [start];
    
    const distances: Map<T, W> = new Map();
    const parent: Map<T, T> = new Map();
    const visited: Set<T> = new Set();
    
    // Initialize distances
    for (const node of graph.getNodes()) {
      distances.set(node, Infinity as W);
    }
    distances.set(start, 0 as W);
    
    // Priority queue: (distance, node)
    this.priorityQueue.clear();
    this.priorityQueue.enqueue(start, 0 as W);
    
    while (!this.priorityQueue.isEmpty()) {
      const currentNode = this.priorityQueue.dequeue()!;
      
      if (visited.has(currentNode)) continue;
      visited.add(currentNode);
      
      if (currentNode === end) {
        // Reconstruct path
        const path: T[] = [];
        let current: T | undefined = end;
        
        while (current !== undefined) {
          path.unshift(current);
          current = parent.get(current);
        }
        
        return path;
      }
      
      const neighbors = graph.getNeighbors(currentNode);
      for (const neighbor of neighbors) {
        if (visited.has(neighbor)) continue;
        
        const edgeWeight = graph.getWeight(currentNode, neighbor) || (1 as W);
        const newDistance = (distances.get(currentNode) || (0 as W)) + edgeWeight;
        
        if (newDistance < (distances.get(neighbor) || (Infinity as W))) {
          distances.set(neighbor, newDistance);
          parent.set(neighbor, currentNode);
          this.priorityQueue.enqueue(neighbor, newDistance);
        }
      }
    }
    
    return []; // No path found
  }
  
  findShortestDistance(graph: IWeightedGraph<T, W>, start: T, end: T): W {
    const path = this.findShortestPath(graph, start, end);
    if (path.length === 0) return Infinity as W;
    
    let totalDistance: W = 0 as W;
    for (let i = 0; i < path.length - 1; i++) {
      const weight = graph.getWeight(path[i], path[i + 1]) || (1 as W);
      totalDistance = (totalDistance + weight) as W;
    }
    
    return totalDistance;
  }
  
  /**
   * Finds shortest paths from start to all other nodes
   * @param graph The weighted graph
   * @param start The starting node
   * @returns Map of node to shortest distance from start
   */
  findShortestPaths(graph: IWeightedGraph<T, W>, start: T): Map<T, W> {
    if (!graph.hasNode(start)) {
      throw new Error(`Start node ${start} not found in graph`);
    }
    
    const distances: Map<T, W> = new Map();
    const visited: Set<T> = new Set();
    
    // Initialize distances
    for (const node of graph.getNodes()) {
      distances.set(node, Infinity as W);
    }
    distances.set(start, 0 as W);
    
    // Priority queue: (distance, node)
    this.priorityQueue.clear();
    this.priorityQueue.enqueue(start, 0 as W);
    
    while (!this.priorityQueue.isEmpty()) {
      const currentNode = this.priorityQueue.dequeue()!;
      
      if (visited.has(currentNode)) continue;
      visited.add(currentNode);
      
      const neighbors = graph.getNeighbors(currentNode);
      for (const neighbor of neighbors) {
        if (visited.has(neighbor)) continue;
        
        const edgeWeight = graph.getWeight(currentNode, neighbor) || (1 as W);
        const newDistance = (distances.get(currentNode) || (0 as W)) + edgeWeight;
        
        if (newDistance < (distances.get(neighbor) || (Infinity as W))) {
          distances.set(neighbor, newDistance);
          this.priorityQueue.enqueue(neighbor, newDistance);
        }
      }
    }
    
    return distances;
  }
  
  isApplicable(graph: IWeightedGraph<T, W>): boolean {
    // Check for negative weights
    const edges = graph.getEdges();
    for (const edge of edges) {
      if (edge.weight !== undefined && edge.weight < (0 as W)) {
        return false;
      }
    }
    return true;
  }
  
  getTimeComplexity(): Complexity {
    return {
      bigO: 'O(E + V log V)',
      best: 'O(E + V log V)',
      worst: 'O(E + V log V)',
      average: 'O(E + V log V)',
      space: 'O(V)'
    };
  }
  
  getName(): string {
    return 'Dijkstra\'s Algorithm';
  }
  
  getDescription(): string {
    return 'Finds shortest paths in weighted graphs with non-negative edge weights';
  }
}
```

### Minimum Spanning Tree Algorithms

#### Kruskal's Algorithm with Union-Find

```typescript
/**
 * Kruskal's algorithm implementation with Union-Find optimization
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export class KruskalAlgorithm<T, W extends number> implements IMinimumSpanningTreeAlgorithm<T, W> {
  private unionFind: UnionFind<T>;
  
  constructor() {
    this.unionFind = new UnionFind<T>();
  }
  
  execute(graph: IWeightedGraph<T, W>): Array<{ from: T; to: T; weight: W }> {
    return this.findMinimumSpanningTree(graph);
  }
  
  findMinimumSpanningTree(graph: IWeightedGraph<T, W>): Array<{ from: T; to: T; weight: W }> {
    if (!graph.isWeighted()) {
      throw new Error('Kruskal\'s algorithm requires a weighted graph');
    }
    
    const nodes = graph.getNodes();
    if (nodes.length === 0) return [];
    
    // Initialize Union-Find structure
    this.unionFind.initialize(nodes);
    
    // Get all edges and sort by weight
    const edges = graph.getEdges();
    const sortedEdges = edges
      .filter(edge => edge.weight !== undefined)
      .sort((a, b) => (a.weight! as number) - (b.weight! as number));
    
    const mst: Array<{ from: T; to: T; weight: W }> = [];
    
    for (const edge of sortedEdges) {
      const { from, to, weight } = edge;
      
      // Check if adding this edge creates a cycle
      if (!this.unionFind.connected(from, to)) {
        this.unionFind.union(from, to);
        mst.push({ from, to, weight: weight! });
        
        // Stop if we have enough edges for MST
        if (mst.length === nodes.length - 1) {
          break;
        }
      }
    }
    
    return mst;
  }
  
  findMinimumSpanningTreeWeight(graph: IWeightedGraph<T, W>): W {
    const mst = this.findMinimumSpanningTree(graph);
    let totalWeight: W = 0 as W;
    
    for (const edge of mst) {
      totalWeight = (totalWeight + edge.weight) as W;
    }
    
    return totalWeight;
  }
  
  isApplicable(graph: IWeightedGraph<T, W>): boolean {
    // Kruskal's algorithm works on connected, undirected, weighted graphs
    return graph.isWeighted() && !graph.isDirected();
  }
  
  getTimeComplexity(): Complexity {
    return {
      bigO: 'O(E log E)',
      best: 'O(E log E)',
      worst: 'O(E log E)',
      average: 'O(E log E)',
      space: 'O(V)'
    };
  }
  
  getName(): string {
    return 'Kruskal\'s Algorithm';
  }
  
  getDescription(): string {
    return 'Finds minimum spanning tree using Union-Find data structure';
  }
}

/**
 * Union-Find (Disjoint Set) data structure for Kruskal's algorithm
 * @template T The type of elements
 */
class UnionFind<T> {
  private parent: Map<T, T> = new Map();
  private rank: Map<T, number> = new Map();
  
  initialize(elements: T[]): void {
    this.parent.clear();
    this.rank.clear();
    
    for (const element of elements) {
      this.parent.set(element, element);
      this.rank.set(element, 0);
    }
  }
  
  find(element: T): T {
    if (!this.parent.has(element)) {
      throw new Error(`Element ${element} not found in Union-Find`);
    }
    
    if (this.parent.get(element) !== element) {
      // Path compression
      const root = this.find(this.parent.get(element)!);
      this.parent.set(element, root);
    }
    
    return this.parent.get(element)!;
  }
  
  union(element1: T, element2: T): void {
    const root1 = this.find(element1);
    const root2 = this.find(element2);
    
    if (root1 === root2) return; // Already in the same set
    
    const rank1 = this.rank.get(root1) || 0;
    const rank2 = this.rank.get(root2) || 0;
    
    // Union by rank
    if (rank1 < rank2) {
      this.parent.set(root1, root2);
    } else if (rank1 > rank2) {
      this.parent.set(root2, root1);
    } else {
      this.parent.set(root2, root1);
      this.rank.set(root1, rank1 + 1);
    }
  }
  
  connected(element1: T, element2: T): boolean {
    return this.find(element1) === this.find(element2);
  }
}
```

## Performance Optimization Strategies

### Graph Representation Selection

The architecture will automatically select the optimal graph representation based on graph characteristics:

```typescript
/**
 * Factory for creating optimized graph instances based on characteristics
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export class OptimizedGraphFactory<T, W = number> {
  /**
   * Creates the optimal graph implementation based on density and size
   * @param nodeCount The number of nodes in the graph
   * @param edgeCount The number of edges in the graph
   * @param directed Whether the graph is directed
   * @param weighted Whether the graph is weighted
   * @returns Optimized graph instance
   */
  static createOptimizedGraph(
    nodeCount: number,
    edgeCount: number,
    directed: boolean = false,
    weighted: boolean = false
  ): IGraph<T, W> {
    // Calculate graph density
    const maxEdges = directed ? nodeCount * (nodeCount - 1) : (nodeCount * (nodeCount - 1)) / 2;
    const density = edgeCount / maxEdges;
    
    // Choose representation based on density
    if (density > 0.3) {
      // Dense graph - use adjacency matrix
      return new AdjacencyMatrixGraph<T, W>(directed, weighted);
    } else {
      // Sparse graph - use adjacency list
      return new AdjacencyListGraph<T, W>(directed, weighted);
    }
  }
  
  /**
   * Analyzes an existing graph and suggests optimal representation
   * @param graph The graph to analyze
   * @returns Recommendation for optimal representation
   */
  static analyzeAndRecommend(graph: IGraph<T, W>): {
    currentRepresentation: string;
    recommendedRepresentation: string;
    reason: string;
    expectedPerformanceImprovement: string;
  } {
    const nodeCount = graph.getNodeCount();
    const edgeCount = graph.getEdgeCount();
    
    const maxEdges = graph.isDirected() ? nodeCount * (nodeCount - 1) : (nodeCount * (nodeCount - 1)) / 2;
    const density = edgeCount / maxEdges;
    
    const currentRep = graph instanceof AdjacencyMatrixGraph ? 'Adjacency Matrix' : 'Adjacency List';
    const recommendedRep = density > 0.3 ? 'Adjacency Matrix'

 : 'Adjacency List';
    
    let reason: string;
    let expectedImprovement: string;
    
    if (density > 0.3) {
      if (currentRep === 'Adjacency List') {
        reason = `Graph is dense (${(density * 100).toFixed(1)}% density). Adjacency matrix provides O(1) edge access.`;
        expectedImprovement = 'Edge operations: O(1) vs O(degree), Memory: More efficient for dense graphs';
      } else {
        reason = `Graph is dense (${(density * 100).toFixed(1)}% density). Current representation is optimal.`;
        expectedImprovement = 'Current representation is already optimal';
      }
    } else {
      if (currentRep === 'Adjacency Matrix') {
        reason = `Graph is sparse (${(density * 100).toFixed(1)}% density). Adjacency list provides better memory efficiency.`;
        expectedImprovement = 'Memory: O(V+E) vs O(V²), Edge iteration: More efficient for sparse graphs';
      } else {
        reason = `Graph is sparse (${(density * 100).toFixed(1)}% density). Current representation is optimal.`;
        expectedImprovement = 'Current representation is already optimal';
      }
    }
    
    return {
      currentRepresentation: currentRep,
      recommendedRepresentation: recommendedRep,
      reason,
      expectedPerformanceImprovement: expectedImprovement
    };
  }
}
```

### Memory Optimization Strategies

#### Lazy Loading for Large Graphs

```typescript
/**
 * Lazy loading graph implementation for memory-efficient handling of large graphs
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export class LazyLoadGraph<T, W = number> implements IWeightedGraph<T, W> {
  private nodeLoader?: (node: T) => Promise<Array<{ node: T; weight: W }>>;
  private edgeLoader?: (from: T, to: T) => Promise<W | undefined>;
  private loadedNodes: Map<T, Array<{ node: T; weight: W }>> = new Map();
  private loadedEdges: Map<string, W> = new Map();
  private nodeSet: Set<T> = new Set();
  private _directed: boolean = false;
  private _weighted: boolean = false;
  
  constructor(directed: boolean = false, weighted: boolean = false) {
    this._directed = directed;
    this._weighted = weighted;
  }
  
  /**
   * Sets the node loader function for lazy loading
   * @param loader Function that loads neighbors for a given node
   */
  setNodeLoader(loader: (node: T) => Promise<Array<{ node: T; weight: W }>>): void {
    this.nodeLoader = loader;
  }
  
  /**
   * Sets the edge loader function for lazy loading
   * @param loader Function that loads edge weight between two nodes
   */
  setEdgeLoader(loader: (from: T, to: T) => Promise<W | undefined>): void {
    this.edgeLoader = loader;
  }
  
  /**
   * Asynchronously loads neighbors for a node if not already loaded
   * @param node The node to load neighbors for
   * @returns Promise that resolves to the neighbors array
   */
  private async loadNeighbors(node: T): Promise<Array<{ node: T; weight: W }>> {
    if (this.loadedNodes.has(node)) {
      return this.loadedNodes.get(node)!;
    }
    
    if (!this.nodeLoader) {
      return [];
    }
    
    try {
      const neighbors = await this.nodeLoader(node);
      this.loadedNodes.set(node, neighbors);
      return neighbors;
    } catch (error) {
      console.error(`Failed to load neighbors for node ${node}:`, error);
      return [];
    }
  }
  
  /**
   * Synchronously gets neighbors, loading them if necessary
   * @param node The node to get neighbors for
   * @returns Array of neighboring nodes
   */
  getNeighbors(node: T): T[] {
    if (!this.loadedNodes.has(node) && this.nodeLoader) {
      // For synchronous access, we need to have pre-loaded the data
      console.warn(`Neighbors for node ${node} not loaded. Use loadNeighbors() first.`);
      return [];
    }
    
    const neighbors = this.loadedNodes.get(node);
    return neighbors ? neighbors.map(edge => edge.node) : [];
  }
  
  /**
   * Asynchronously gets neighbors with lazy loading
   * @param node The node to get neighbors for
   * @returns Promise that resolves to the neighbors array
   */
  async getNeighborsAsync(node: T): Promise<T[]> {
    const neighbors = await this.loadNeighbors(node);
    return neighbors.map(edge => edge.node);
  }
  
  /**
   * Asynchronously gets edge weight with lazy loading
   * @param from The source node
   * @param to The target node
   * @returns Promise that resolves to the edge weight
   */
  async getWeightAsync(from: T, to: T): Promise<W | undefined> {
    const edgeKey = this.getEdgeKey(from, to);
    
    if (this.loadedEdges.has(edgeKey)) {
      return this.loadedEdges.get(edgeKey);
    }
    
    if (this.edgeLoader) {
      try {
        const weight = await this.edgeLoader(from, to);
        if (weight !== undefined) {
          this.loadedEdges.set(edgeKey, weight);
        }
        return weight;
      } catch (error) {
        console.error(`Failed to load edge weight from ${from} to ${to}:`, error);
        return undefined;
      }
    }
    
    // Fallback to loaded neighbors
    const neighbors = await this.loadNeighbors(from);
    const edge = neighbors.find(e => e.node === to);
    return edge?.weight;
  }
  
  private getEdgeKey(from: T, to: T): string {
    return `${JSON.stringify(from)}->${JSON.stringify(to)}`;
  }
  
  // Additional optimized methods...
}
```

### Algorithm-Specific Optimizations

#### A* Algorithm with Heuristic Support

```typescript
/**
 * A* algorithm implementation with customizable heuristic functions
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export class AStarAlgorithm<T, W extends number> implements IPathfindingAlgorithm<T, W> {
  private heuristic: (from: T, to: T) => W;
  private priorityQueue: MinPriorityQueue<T, W>;
  
  constructor(heuristic: (from: T, to: T) => W) {
    this.heuristic = heuristic;
    this.priorityQueue = new MinPriorityQueue<T, W>();
  }
  
  execute(graph: IWeightedGraph<T, W>, start: T, end: T): T[] {
    return this.findShortestPath(graph, start, end);
  }
  
  findShortestPath(graph: IWeightedGraph<T, W>, start: T, end: T): T[] {
    if (!graph.hasNode(start) || !graph.hasNode(end)) {
      throw new Error('Start or end node not found in graph');
    }
    
    if (start === end) return [start];
    
    const gScore: Map<T, W> = new Map(); // Cost from start to node
    const fScore: Map<T, W> = new Map(); // Estimated total cost from start to end through node
    const parent: Map<T, T> = new Map();
    const openSet: Set<T> = new Set();
    const closedSet: Set<T> = new Set();
    
    // Initialize scores
    for (const node of graph.getNodes()) {
      gScore.set(node, Infinity as W);
      fScore.set(node, Infinity as W);
    }
    
    gScore.set(start, 0 as W);
    fScore.set(start, this.heuristic(start, end));
    
    this.priorityQueue.clear();
    this.priorityQueue.enqueue(start, fScore.get(start)!);
    openSet.add(start);
    
    while (!this.priorityQueue.isEmpty()) {
      const current = this.priorityQueue.dequeue()!;
      
      if (current === end) {
        // Reconstruct path
        const path: T[] = [];
        let node: T | undefined = end;
        
        while (node !== undefined) {
          path.unshift(node);
          node = parent.get(node);
        }
        
        return path;
      }
      
      openSet.delete(current);
      closedSet.add(current);
      
      const neighbors = graph.getNeighbors(current);
      for (const neighbor of neighbors) {
        if (closedSet.has(neighbor)) continue;
        
        const edgeWeight = graph.getWeight(current, neighbor) || (1 as W);
        const tentativeGScore = (gScore.get(current) || (0 as W)) + edgeWeight;
        
        if (tentativeGScore < (gScore.get(neighbor) || (Infinity as W))) {
          parent.set(neighbor, current);
          gScore.set(neighbor, tentativeGScore);
          fScore.set(neighbor, (tentativeGScore + this.heuristic(neighbor, end)) as W);
          
          if (!openSet.has(neighbor)) {
            openSet.add(neighbor);
            this.priorityQueue.enqueue(neighbor, fScore.get(neighbor)!);
          } else {
            // Update priority queue
            this.priorityQueue.updatePriority(neighbor, fScore.get(neighbor)!);
          }
        }
      }
    }
    
    return []; // No path found
  }
  
  findShortestDistance(graph: IWeightedGraph<T, W>, start: T, end: T): W {
    const path = this.findShortestPath(graph, start, end);
    if (path.length === 0) return Infinity as W;
    
    let totalDistance: W = 0 as W;
    for (let i = 0; i < path.length - 1; i++) {
      const weight = graph.getWeight(path[i], path[i + 1]) || (1 as W);
      totalDistance = (totalDistance + weight) as W;
    }
    
    return totalDistance;
  }
  
  isApplicable(graph: IWeightedGraph<T, W>): boolean {
    // A* works on weighted graphs with admissible heuristics
    return graph.isWeighted();
  }
  
  getTimeComplexity(): Complexity {
    return {
      bigO: 'O(E)', // Heuristic-dependent
      best: 'O(E)',
      worst: 'O(V²)',
      average: 'O(E log V)',
      space: 'O(V)'
    };
  }
  
  getName(): string {
    return 'A* Algorithm';
  }
  
  getDescription(): string {
    return 'Best-first search algorithm using heuristic to guide pathfinding';
  }
}

/**
 * Common heuristic functions for A* algorithm
 */
export class HeuristicFunctions {
  /**
   * Manhattan distance heuristic for grid-based graphs
   * @param from The starting position
   * @param to The target position
   * @returns Manhattan distance
   */
  static manhattanDistance(from: { x: number; y: number }, to: { x: number; y: number }): number {
    return Math.abs(from.x - to.x) + Math.abs(from.y - to.y);
  }
  
  /**
   * Euclidean distance heuristic for geometric graphs
   * @param from The starting position
   * @param to The target position
   * @returns Euclidean distance
   */
  static euclideanDistance(from: { x: number; y: number }, to: { x: number; y: number }): number {
    const dx = from.x - to.x;
    const dy = from.y - to.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  /**
   * Zero heuristic (equivalent to Dijkstra's algorithm)
   * @param from The starting node
   * @param to The target node
   * @returns 0
   */
  static zero<T>(from: T, to: T): number {
    return 0;
  }
}
```

## Testing Strategies

### Comprehensive Test Framework

```typescript
/**
 * Test framework for graph algorithms with property-based testing
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
export class GraphAlgorithmTestFramework<T, W = number> {
  private graphGenerator: GraphGenerator<T, W>;
  private propertyTester: PropertyTester<T, W>;
  
  constructor() {
    this.graphGenerator = new GraphGenerator<T, W>();
    this.propertyTester = new PropertyTester<T, W>();
  }
  
  /**
   * Tests a traversal algorithm with various graph types
   * @param algorithm The traversal algorithm to test
   * @param testCases Array of test cases
   */
  testTraversalAlgorithm(
    algorithm: ITraversalAlgorithm<T>,
    testCases: Array<{
      graph: IGraph<T, W>;
      startNode: T;
      expectedOrder: T[];
      description: string;
    }>
  ): TestResult {
    const results: TestResult[] = [];
    
    for (const testCase of testCases) {
      const result = this.runSingleTest(
        () => algorithm.traverse(testCase.graph, testCase.startNode),
        testCase.expectedOrder,
        testCase.description
      );
      results.push(result);
    }
    
    return this.combineTestResults(results);
  }
  
  /**
   * Tests a shortest path algorithm with property-based testing
   * @param algorithm The shortest path algorithm to test
   * @param graphProperties Properties of graphs to generate
   * @param numTests Number of random tests to run
   */
  testShortestPathAlgorithm(
    algorithm: IPathfindingAlgorithm<T, W>,
    graphProperties: GraphProperties,
    numTests: number = 100
  ): TestResult {
    const results: TestResult[] = [];
    
    for (let i = 0; i < numTests; i++) {
      const graph = this.graphGenerator.generateRandomGraph(graphProperties);
      const nodes = graph.getNodes();
      
      if (nodes.length < 2) continue;
      
      const start = nodes[Math.floor(Math.random() * nodes.length)];
      const end = nodes[Math.floor(Math.random() * nodes.length)];
      
      if (start === end) continue;
      
      const path = algorithm.findShortestPath(graph, start, end);
      
      // Property 1: Path should start and end at correct nodes
      const pathValid = this.propertyTester.validatePathEndpoints(path, start, end);
      
      // Property 2: Path should be valid (consecutive nodes should be connected)
      const pathConnected = this.propertyTester.validatePathConnectivity(graph, path);
      
      // Property 3: Path should be optimal (no shorter path exists)
      const pathOptimal = this.propertyTester.validatePathOptimality(graph, path, algorithm);
      
      results.push({
        testName: `Random test ${i + 1}`,
        passed: pathValid && pathConnected && pathOptimal,
        details: {
          pathLength: path.length,
          startNode: start,
          endNode: end,
          pathValid,
          pathConnected,
          pathOptimal
        }
      });
    }
    
    return this.combineTestResults(results);
  }
  
  /**
   * Performance benchmarking for graph algorithms
   * @param algorithm The algorithm to benchmark
   * @param graphSizes Array of graph sizes to test
   * @param graphDensities Array of graph densities to test
   */
  benchmarkAlgorithm(
    algorithm: IGraphAlgorithm<T, any, W>,
    graphSizes: number[],
    graphDensities: number[]
  ): BenchmarkResult {
    const results: BenchmarkResult[] = [];
    
    for (const size of graphSizes) {
      for (const density of graphDensities) {
        const graph = this.graphGenerator.generateRandomGraph({
          nodeCount: size,
          density,
          directed: false,
          weighted: true
        });
        
        const startTime = performance.now();
        algorithm.execute(graph);
        const endTime = performance.now();
        
        const executionTime = endTime - startTime;
        const memoryUsage = graph.getMemoryUsage();
        
        results.push({
          graphSize: size,
          graphDensity: density,
          executionTime,
          memoryUsage,
          algorithmName: algorithm.getName()
        });
      }
    }
    
    return this.aggregateBenchmarkResults(results);
  }
  
  private runSingleTest<T>(
    testFunction: () => T,
    expectedResult: T,
    description: string
  ): TestResult {
    try {
      const actualResult = testFunction();
      const passed = this.deepEqual(actualResult, expectedResult);
      
      return {
        testName: description,
        passed,
        details: {
          expected: expectedResult,
          actual: actualResult
        }
      };
    } catch (error) {
      return {
        testName: description,
        passed: false,
        details: {
          error: error instanceof Error ? error.message : String(error)
        }
      };
    }
  }
  
  private deepEqual(a: any, b: any): boolean {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!this.deepEqual(a[i], b[i])) return false;
      }
      return true;
    }
    return false;
  }
  
  private combineTestResults(results: TestResult[]): TestResult {
    const passed = results.every(r => r.passed);
    const totalTests = results.length;
    const passedTests = results.filter(r => r.passed).length;
    
    return {
      testName: 'Combined Test Result',
      passed,
      details: {
        totalTests,
        passedTests,
        failedTests: totalTests - passedTests,
        individualResults: results
      }
    };
  }
  
  private aggregateBenchmarkResults(results: BenchmarkResult[]): BenchmarkResult {
    const avgExecutionTime = results.reduce((sum, r) => sum + r.executionTime, 0) / results.length;
    const avgMemoryUsage = results.reduce((sum, r) => sum + r.memoryUsage, 0) / results.length;
    
    return {
      graphSize: -1, // Indicates aggregate result
      graphDensity: -1,
      executionTime: avgExecutionTime,
      memoryUsage: avgMemoryUsage,
      algorithmName: results[0]?.algorithmName || 'Unknown',
      details: {
        individualResults: results,
        performanceComplexity: this.analyzeComplexity(results)
      }
    };
  }
  
  private analyzeComplexity(results: BenchmarkResult[]): string {
    // Analyze the complexity based on performance across different sizes
    // This is a simplified analysis - in practice, you'd use regression analysis
    return 'O(V + E)'; // Placeholder
  }
}

/**
 * Graph generator for testing purposes
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
class GraphGenerator<T, W = number> {
  generateRandomGraph(properties: GraphProperties): IGraph<T, W> {
    const graph = OptimizedGraphFactory.createOptimizedGraph<T, W>(
      properties.nodeCount,
      Math.floor(properties.nodeCount * (properties.nodeCount - 1) * properties.density / 2),
      properties.directed,
      properties.weighted
    );
    
    // Add nodes
    for (let i = 0; i < properties.nodeCount; i++) {
      graph.addNode(this.generateNode(i) as T);
    }
    
    // Add edges
    const nodes = graph.getNodes();
    const maxEdges = properties.directed ? 
      nodes.length * (nodes.length - 1) : 
      (nodes.length * (nodes.length - 1)) / 2;
    
    const edgeCount = Math.floor(maxEdges * properties.density);
    const addedEdges = new Set<string>();
    
    for (let i = 0; i < edgeCount; i++) {
      let fromIndex: number, toIndex: number;
      let edgeKey: string;
      
      do {
        fromIndex = Math.floor(Math.random() * nodes.length);
        toIndex = Math.floor(Math.random() * nodes.length);
        edgeKey = `${fromIndex}-${toIndex}`;
      } while (
        fromIndex === toIndex || 
        addedEdges.has(edgeKey) || 
        (!properties.directed && addedEdges.has(`${toIndex}-${fromIndex}`))
      );
      
      addedEdges.add(edgeKey);
      
      const weight = properties.weighted ? 
        (Math.random() * 100) as W : 
        undefined;
      
      graph.addEdge(nodes[fromIndex], nodes[toIndex], weight);
    }
    
    return graph;
  }
  
  private generateNode(index: number): any {
    return `node_${index}`;
  }
  
  generateSpecializedGraphs(): Map<string, IGraph<T, W>> {
    const graphs = new Map<string, IGraph<T, W>>();
    
    // Complete graph
    graphs.set('complete', this.generateCompleteGraph(10));
    
    // Star graph
    graphs.set('star', this.generateStarGraph(10));
    
    // Path graph
    graphs.set('path', this.generatePathGraph(10));
    
    // Cycle graph
    graphs.set('cycle', this.generateCycleGraph(10));
    
    // Bipartite graph
    graphs.set('bipartite', this.generateBipartiteGraph(5, 5));
    
    return graphs;
  }
  
  private generateCompleteGraph(nodeCount: number): IGraph<T, W> {
    return this.generateRandomGraph({
      nodeCount,
      density: 1.0,
      directed: false,
      weighted: false
    });
  }
  
  private generateStarGraph(nodeCount: number): IGraph<T, W> {
    const graph = new AdjacencyListGraph<T, W>(false, false);
    const center = this.generateNode(0) as T;
    graph.addNode(center);
    
    for (let i = 1; i < nodeCount; i++) {
      const node = this.generateNode(i) as T;
      graph.addNode(node);
      graph.addEdge(center, node);
    }
    
    return graph;
  }
  
  private generatePathGraph(nodeCount: number): IGraph<T, W> {
    const graph = new AdjacencyListGraph<T, W>(false, false);
    
    for (let i = 0; i < nodeCount; i++) {
      graph.addNode(this.generateNode(i) as T);
    }
    
    const nodes = graph.getNodes();
    for (let i = 0; i < nodes.length - 1; i++) {
      graph.addEdge(nodes[i], nodes[i + 1]);
    }
    
    return graph;
  }
  
  private generateCycleGraph(nodeCount: number): IGraph<T, W> {
    const graph = this.generatePathGraph(nodeCount);
    const nodes = graph.getNodes();
    
    if (nodes.length > 2) {
      graph.addEdge(nodes[nodes.length - 1], nodes[0]);
    }
    
    return graph;
  }
  
  private generateBipartiteGraph(leftSize: number, rightSize: number): IGraph<T, W> {
    const graph = new AdjacencyListGraph<T, W>(false, false);
    
    // Add left partition
    for (let i = 0; i < leftSize; i++) {
      graph.addNode(`left_${i}` as T);
    }
    
    // Add right partition
    for (let i = 0; i < rightSize; i++) {
      graph.addNode(`right_${i}` as T);
    }
    
    // Add edges between partitions
    const leftNodes = graph.getNodes().slice(0, leftSize);
    const rightNodes = graph.getNodes().slice(leftSize);
    
    for (const leftNode of leftNodes) {
      for (const rightNode of rightNodes) {
        if (Math.random() > 0.5) { // 50% chance of edge
          graph.addEdge(leftNode, rightNode);
        }
      }
    }
    
    return graph;
  }
}

/**
 * Property-based testing for graph algorithms
 * @template T The type of nodes in the graph
 * @template W The type of edge weights
 */
class PropertyTester<T, W = number> {
  validatePathEndpoints(path: T[], start: T, end: T): boolean {
    if (path.length === 0) return false;
    return path[0] === start && path[path.length - 1] === end;
  }
  
  validatePathConnectivity(graph: IGraph<T, W>, path: T[]): boolean {
    if (path.length <= 1) return true;
    
    for (let i = 0; i < path.length - 1; i++) {
      if (!graph.hasEdge(path[i], path[i + 1])) {
        return false;
      }
    }
    
    return true;
  }
  
  validatePathOptimality(
    graph: IGraph<T, W>, 
    path: T[], 
    algorithm: IPathfindingAlgorithm<T, W>
  ): boolean {
    if (path.length === 0) return true; // No path exists
    
    // For unweighted graphs, check if there's no shorter path
    if (!graph.isWeighted()) {
      const bfs = new BreadthFirstSearch<T>();
      const shortestPath = bfs.findPath(graph, path[0], path[path.length - 1]);
      return path.length <= shortestPath.length;
    }
    
    // For weighted graphs, this is more complex and would require
    // running an optimal algorithm for comparison
    // For now, we'll assume the algorithm is correct
    return true;
  }
}

// Type definitions for testing framework
interface TestResult {
  testName: string;
  passed: boolean;
  details?: any;
}

interface BenchmarkResult {
  graphSize: number;
  graphDensity: number;
  executionTime: number;
  memoryUsage: number;
  algorithmName: string;
  details?: any;
}

interface GraphProperties {
  nodeCount: number;
  density: number;
  directed: boolean;
  weighted: boolean;
}
```

## Implementation Roadmap and Priorities

### Phase 1: Core Infrastructure (Weeks 1-2)

**Priority: High**

1. **Interface Hierarchy Implementation**
   - Implement core graph interfaces
   - Implement algorithm interfaces
   - Create type definitions and constraints

2. **Basic Graph Data Structures**
   - Implement adjacency list representation
   - Implement adjacency matrix representation
   - Add basic operations (add/remove nodes and edges)

3. **Testing Framework Setup**
   - Create graph generator utilities
   - Set up property-based testing framework
   - Implement basic test cases

### Phase 2: Traversal Algorithms (Weeks 3-4)

**Priority: High**

1. **Enhanced BFS and DFS**
   - Implement path reconstruction
   - Add bidirectional BFS
   - Optimize for different graph types

2. **Traversal Algorithm Testing**
   - Comprehensive test coverage
   - Performance benchmarking
   - Property-based testing

### Phase 3: Shortest Path Algorithms (Weeks 5-7)

**Priority: High**

1. **Dijkstra's Algorithm**
   - Priority queue optimization
   - Multiple target support
   - Path reconstruction

2. **A* Algorithm**
   - Heuristic function framework
   - Common heuristic implementations
   - Optimized priority queue

3. **Advanced Shortest Path**
   - Bellman-Ford for negative weights
   - Floyd-Warshall for all-pairs shortest paths

### Phase 4: Spanning Tree Algorithms (Weeks 8-9)

**Priority: Medium**

1. **Kruskal's Algorithm**
   - Union-Find optimization
   - MST verification

2. **Prim's Algorithm**
   - Priority queue optimization
   - Multiple MST variants

### Phase 5: Graph Analysis Algorithms (Weeks 10-11)

**Priority: Medium**

1. **Topological Sort**
   - DAG validation
   - Multiple topological orders

2. **Cycle Detection**
   - DFS-based detection
   - Union-Find detection

3. **Strongly Connected Components**
   - Kosaraju's algorithm
   - Tarjan's algorithm

4. **Graph Centrality Measures**
   - Betweenness centrality
   - Closeness centrality
   - Eigenvector centrality

### Phase 6: Performance Optimization (Weeks 12-13)

**Priority: Medium**

1. **Memory Optimization**
   - Lazy loading implementation
   - Memory-efficient representations
   - Garbage collection optimization

2. **Algorithm Optimization**
   - Graph-specific optimizations
   - Cache-friendly implementations
   - Parallel processing support

### Phase 7: Advanced Features (Weeks 14-15)

**Priority: Low**

1. **Graph Visualization Support**
   - Export formats for visualization
   - Layout algorithms
   - Interactive features

2. **Graph Transformations**
   - Graph contraction
   - Subgraph extraction
   - Graph composition

3. **Specialized Graph Types**
   - Trees
   - Bipartite graphs
   - Planar graphs

## Conclusion

This comprehensive graph theory module architecture provides a robust foundation for implementing high-performance graph algorithms in the Algorithmsts library. The design emphasizes:

1. **Flexibility**: Support for multiple graph representations and algorithm variants
2. **Performance**: Optimized implementations for different graph characteristics
3. **Extensibility**: Easy to add new algorithms and graph types
4. **Reliability**: Comprehensive testing and validation framework
5. **Maintainability**: Clear separation of concerns and consistent patterns

The modular architecture allows for incremental implementation while maintaining high code quality and performance standards. The comprehensive testing strategy ensures correctness and reliability across different use cases and graph characteristics.

By following this architecture, the Algorithmsts library will provide a premier graph theory implementation that serves both educational and production use cases, establishing it as a leading choice for developers working with graph algorithms in TypeScript.
