import { describe, it, expect } from 'vitest';
import { StronglyConnectedComponentsKosaraju } from '../../../../src/graphs/algorithms/graph/StronglyConnectedComponentsKosaraju';
import { SampleGraphs } from '../../fixtures/SampleGraphs';
import { ArgumentError } from '../../../../src/core/validation/ArgumentError';

describe('StronglyConnectedComponentsKosaraju', () => {
  const algorithm = new StronglyConnectedComponentsKosaraju<string>();

  it('should throw ArgumentError for undirected graphs', () => {
    const undirectedGraph = SampleGraphs.simpleUndirectedGraph;
    expect(() => algorithm.execute(undirectedGraph)).toThrow(ArgumentError);
  });

  describe('AdjacencyListGraph', () => {
    it('should find 3 components in a simple directed graph', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = algorithm.execute(graph);
      expect(result.count).toBe(3);
      const sortedComps = result.components.map(c => [...c].sort()).sort((a, b) => a[0].localeCompare(b[0]));
      expect(sortedComps).toEqual([['A'], ['B'], ['C']]);
    });

    it('should find 1 component in a cyclic graph', () => {
      const graph = SampleGraphs.cyclicGraph;
      const result = algorithm.execute(graph);
      expect(result.count).toBe(1);
      const sortedComp = [...result.components[0]].sort();
      expect(sortedComp).toEqual(['A', 'B', 'C']);
    });

    it('should handle an empty graph', () => {
      const graph = SampleGraphs.emptyGraph;
      const result = algorithm.execute(graph);
      expect(result.count).toBe(0);
      expect(result.components).toEqual([]);
    });

    it('should handle a single vertex graph', () => {
      const graph = SampleGraphs.singleVertexGraph;
      const result = algorithm.execute(graph);
      expect(result.count).toBe(1);
      expect(result.components[0]).toEqual(['A']);
    });
  });

  describe('AdjacencyMatrixGraph', () => {
    it('should find 3 components in a simple directed matrix graph', () => {
      const graph = SampleGraphs.simpleDirectedGraphMatrix;
      const result = algorithm.execute(graph);
      expect(result.count).toBe(3);
      const sortedComps = result.components.map(c => [...c].sort()).sort((a, b) => a[0].localeCompare(b[0]));
      expect(sortedComps).toEqual([['A'], ['B'], ['C']]);
    });
  });
});
