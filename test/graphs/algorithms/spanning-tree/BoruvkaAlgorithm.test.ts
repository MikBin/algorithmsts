import { describe, it, expect } from 'vitest';
import { BoruvkaAlgorithm } from '../../../../src/graphs/algorithms/spanning-tree/BoruvkaAlgorithm';
import { SampleGraphs } from '../../fixtures/SampleGraphs';
import { ArgumentError } from '../../../../src/core/validation/ArgumentError';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../../../src/graphs/structures/AdjacencyMatrixGraph';

describe('BoruvkaAlgorithm', () => {
  const algorithm = new BoruvkaAlgorithm<string, number>();

  it('should throw ArgumentError for unweighted or directed graphs', () => {
    const unweighted = new AdjacencyListGraph<string>(false, false);
    const directed = new AdjacencyListGraph<string>(true, true);

    expect(() => algorithm.execute(unweighted)).toThrow(ArgumentError);
    expect(() => algorithm.execute(directed)).toThrow(ArgumentError);
  });

  describe('AdjacencyMatrixGraph', () => {
    it('should find the Minimum Spanning Tree for a connected weighted matrix graph', () => {
      const graph = new AdjacencyMatrixGraph<string>(false, true);
      ['A', 'B', 'C'].forEach(v => graph.addVertex(v));
      graph.addEdge('A', 'B', 4);
      graph.addEdge('A', 'C', 2);
      graph.addEdge('B', 'C', 5);

      const result = algorithm.execute(graph);
      expect(result.found).toBe(true);
      expect(result.totalWeight).toBe(6);
      expect(result.edges.length).toBe(2);
    });
  });
});

  it('should find the Minimum Spanning Tree for a connected weighted graph', () => {
    // Standard connected weighted undirected graph
    const graph = SampleGraphs.weightedGraph;
    // Nodes A, B, C, D
    // A-B (4), A-C (2), B-C (5), B-D (10), C-D (3)
    // MST: A-C (2), C-D (3), A-B (4) -> total 9

    const result = algorithm.execute(graph);
    expect(result.found).toBe(true);
    expect(result.totalWeight).toBe(9);
    expect(result.edges.length).toBe(3);
  });

  it('should handle a graph with a single vertex', () => {
    const graph = new AdjacencyListGraph<string>(false, true);
    graph.addVertex('A');
    const result = algorithm.execute(graph);
    expect(result.found).toBe(true); // 0 edges, V-1 = 0
    expect(result.totalWeight).toBe(0);
    expect(result.edges.length).toBe(0);
  });

  it('should handle an empty graph', () => {
    const graph = new AdjacencyListGraph<string>(false, true);
    const result = algorithm.execute(graph);
    // V=0, edges needed = -1? Wait, V-1 = -1. mstEdges.length = 0.
    // found will be 0 === -1 (false)
    expect(result.found).toBe(false);
    expect(result.totalWeight).toBe(0);
    expect(result.edges.length).toBe(0);
  });

  it('should return found=false for disconnected graph', () => {
    const graph = SampleGraphs.disconnectedGraph; // A-B(1), C-D(1)
    const result = algorithm.execute(graph);
    expect(result.found).toBe(false);
    expect(result.edges.length).toBe(2); // Can span local components
    expect(result.totalWeight).toBe(2);
  });
});
