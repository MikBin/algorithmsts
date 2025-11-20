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
export { BellmanFordAlgorithm } from './shortest-path/BellmanFordAlgorithm';
export { FloydWarshallAlgorithm } from './shortest-path/FloydWarshallAlgorithm';
export type { IFloydWarshallResult } from './shortest-path/FloydWarshallAlgorithm';
export { DAGShortestPathAlgorithm } from './shortest-path/DAGShortestPathAlgorithm';

// Spanning Tree Algorithms
export { KruskalAlgorithm } from './spanning-tree/KruskalAlgorithm';
export { PrimAlgorithm } from './spanning-tree/PrimAlgorithm';
export { BoruvkaAlgorithm } from './spanning-tree/BoruvkaAlgorithm';
export type { ISpanningTreeResult } from './spanning-tree/KruskalAlgorithm';

// General Graph Algorithms
export { TopologicalSort } from './graph/TopologicalSort';
export { CycleDetection } from './graph/CycleDetection';
export { StronglyConnectedComponentsTarjan } from './graph/StronglyConnectedComponentsTarjan';
export { StronglyConnectedComponentsKosaraju } from './graph/StronglyConnectedComponentsKosaraju';
export { BridgesAndArticulationPoints } from './graph/BridgesAndArticulationPoints';
export { TransitiveClosure } from './graph/TransitiveClosure';
export { EulerianPathCircuit } from './graph/EulerianPathCircuit';
export { BiconnectedComponents } from './graph/BiconnectedComponents';
export { GraphColoringGreedy } from './graph/GraphColoring';

// Flow Algorithms
export { EdmondsKarpMaxFlow } from './flow/EdmondsKarpMaxFlow';
export type { IMaxFlowResult } from './flow/EdmondsKarpMaxFlow';

export type { ITopologicalSortResult } from './graph/TopologicalSort';
export type { ICycleDetectionResult } from './graph/CycleDetection';
export type { ISCCResult } from './graph/StronglyConnectedComponentsTarjan';
export type { IBridgesArticulationResult } from './graph/BridgesAndArticulationPoints';
export type { ITransitiveClosureResult } from './graph/TransitiveClosure';
export type { IEulerianResult } from './graph/EulerianPathCircuit';
export type { IBiconnectedComponentsResult } from './graph/BiconnectedComponents';
export type { IGraphColoringResult } from './graph/GraphColoring';
