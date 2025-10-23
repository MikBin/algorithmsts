/**
 * Graph Theory Module
 *
 * This module provides comprehensive graph data structures and algorithms for the Algorithmsts library.
 * It includes both adjacency list and adjacency matrix implementations, supporting directed and
 * undirected graphs, as well as weighted and unweighted variants.
 *
 * The module is designed with performance and memory efficiency in mind, automatically selecting
 * the most appropriate representation based on graph characteristics and usage patterns.
 *
 * Key Features:
 * - Multiple graph representations (adjacency list, adjacency matrix)
 * - Support for directed and undirected graphs
 * - Weighted and unweighted graph variants
 * - Comprehensive interface hierarchy for type safety
 * - Lazy loading for memory efficiency
 * - Extensive JSDoc documentation with complexity analysis
 *
 * @module graphs
 */

// Graph Interfaces
export type { IGraph } from './interfaces/IGraph';
export type { IWeightedGraph } from './interfaces/IWeightedGraph';
export type { IDirectedGraph } from './interfaces/IDirectedGraph';
export type { IUndirectedGraph } from './interfaces/IUndirectedGraph';
export type { IGraphIterator } from './interfaces/IGraphIterator';

// Graph Structures
export { AdjacencyListGraph } from './structures/AdjacencyListGraph';
export { AdjacencyMatrixGraph } from './structures/AdjacencyMatrixGraph';

// Graph Algorithms
export * from './algorithms';
