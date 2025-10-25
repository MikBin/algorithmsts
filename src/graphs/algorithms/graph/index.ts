/**
 * General Graph Algorithms
 *
 * This module contains general-purpose graph algorithms that work on various
 * types of graphs, including topological sort for DAGs and cycle detection
 * for both directed and undirected graphs.
 *
 * @module graphs/algorithms/graph
 */

export { TopologicalSort } from './TopologicalSort';
export { CycleDetection } from './CycleDetection';
export type { ITopologicalSortResult } from './TopologicalSort';
export type { ICycleDetectionResult } from './CycleDetection';
