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
export { StronglyConnectedComponentsTarjan } from './StronglyConnectedComponentsTarjan';
export { StronglyConnectedComponentsKosaraju } from './StronglyConnectedComponentsKosaraju';
export { BridgesAndArticulationPoints } from './BridgesAndArticulationPoints';
export { TransitiveClosure } from './TransitiveClosure';
export { EulerianPathCircuit } from './EulerianPathCircuit';
export { BiconnectedComponents } from './BiconnectedComponents';
export { GraphColoringGreedy } from './GraphColoring';
export type { ITopologicalSortResult } from './TopologicalSort';
export type { ICycleDetectionResult } from './CycleDetection';
export type { ISCCResult } from './StronglyConnectedComponentsTarjan';
export type { IBridgesArticulationResult } from './BridgesAndArticulationPoints';
export type { ITransitiveClosureResult } from './TransitiveClosure';
export type { IEulerianResult } from './EulerianPathCircuit';
export type { IBiconnectedComponentsResult } from './BiconnectedComponents';
export type { IGraphColoringResult } from './GraphColoring';
