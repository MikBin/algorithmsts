import { describe, it, expect } from 'vitest';
import { StronglyConnectedComponentsTarjan } from '../../../../src/graphs/algorithms/graph/StronglyConnectedComponentsTarjan';
import { SampleGraphs } from '../../fixtures/SampleGraphs';
import { ArgumentError } from '../../../../src/core/validation/ArgumentError';

describe('StronglyConnectedComponentsTarjan', () => {
  const algorithm = new StronglyConnectedComponentsTarjan<string>();

  it('should throw ArgumentError for undirected graphs', () => {
    const undirectedGraph = SampleGraphs.simpleUndirectedGraph;
    expect(() => algorithm.execute(undirectedGraph)).toThrow(ArgumentError);
  });

  describe('AdjacencyListGraph', () => {
    it('should find 3 components in a simple directed graph (each node is a component)', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = algorithm.execute(graph);
      expect(result.count).toBe(3);
      // Expected components: ['C'], ['B'], ['A'] because of DFS reverse post-order
      expect(result.components.length).toBe(3);
      // Let's sort components internally and check sets
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
