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

  it('should find the Minimum Spanning Tree for a connected weighted graph', () => {
    const graph = SampleGraphs.weightedGraph;

    const result = algorithm.execute(graph);
    expect(result.found).toBe(true);
    expect(result.totalWeight).toBe(9);
    expect(result.edges.length).toBe(3);
  });

  it('should handle a graph with a single vertex', () => {
    const graph = new AdjacencyListGraph<string>(false, true);
    graph.addVertex('A');
    const result = algorithm.execute(graph);
    expect(result.found).toBe(true);
    expect(result.totalWeight).toBe(0);
    expect(result.edges.length).toBe(0);
  });

  it('should handle an empty graph', () => {
    const graph = new AdjacencyListGraph<string>(false, true);
    const result = algorithm.execute(graph);
    expect(result.found).toBe(false);
    expect(result.totalWeight).toBe(0);
    expect(result.edges.length).toBe(0);
  });

  it('should return found=false for disconnected graph', () => {
    const graph = SampleGraphs.disconnectedGraph;
    const result = algorithm.execute(graph);
    expect(result.found).toBe(false);
    expect(result.edges.length).toBe(2);
    expect(result.totalWeight).toBe(2);
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
