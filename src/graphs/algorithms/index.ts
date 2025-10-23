/**
 * Graph Algorithms Module
 *
 * This module provides comprehensive implementations of fundamental graph algorithms
 * for the Algorithmsts library. It includes algorithms for traversal, shortest paths,
 * minimum spanning trees, and general graph analysis.
 *
 * The algorithms are organized into categories:
 * - Traversal: BFS and DFS for exploring graph structures
 * - Shortest Path: Dijkstra's and A* algorithms for weighted graphs
 * - Spanning Tree: Kruskal's and Prim's algorithms for MSTs
 * - Graph Analysis: Topological sort and cycle detection
 *
 * All algorithms follow the library's design principles with comprehensive JSDoc
 * documentation, performance analysis, and proper error handling.
 *
 * @module graphs/algorithms
 */

// Algorithm Interfaces
export type { IGraphAlgorithm } from './interfaces/IGraphAlgorithm';
export type { ITraversalAlgorithm, ITraversalResult } from './interfaces/ITraversalAlgorithm';
export type { IPathfindingAlgorithm, IPathResult } from './interfaces/IPathfindingAlgorithm';

// Traversal Algorithms
export { BreadthFirstSearch } from './traversal/BreadthFirstSearch';
export { DepthFirstSearch } from './traversal/DepthFirstSearch';

// Shortest Path Algorithms
export { DijkstraAlgorithm } from './shortest-path/DijkstraAlgorithm';
export { AStarAlgorithm } from './shortest-path/AStarAlgorithm';

// Spanning Tree Algorithms
export { KruskalAlgorithm } from './spanning-tree/KruskalAlgorithm';
export { PrimAlgorithm } from './spanning-tree/PrimAlgorithm';
export type { ISpanningTreeResult } from './spanning-tree/KruskalAlgorithm';

// General Graph Algorithms
export { TopologicalSort } from './graph/TopologicalSort';
export { CycleDetection } from './graph/CycleDetection';
export type { ITopologicalSortResult } from './graph/TopologicalSort';
export type { ICycleDetectionResult } from './graph/CycleDetection';
