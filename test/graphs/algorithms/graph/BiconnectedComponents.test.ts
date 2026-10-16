import { describe, it, expect } from 'vitest';
import { BiconnectedComponents } from '../../../../src/graphs/algorithms/graph/BiconnectedComponents';
import { SampleGraphs } from '../../fixtures/SampleGraphs';
import { ArgumentError } from '../../../../src/core/validation/ArgumentError';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../../../src/graphs/structures/AdjacencyMatrixGraph';

describe('BiconnectedComponents', () => {
  const algorithm = new BiconnectedComponents<string>();

  it('should throw ArgumentError for directed graphs', () => {
    const directedGraph = SampleGraphs.simpleDirectedGraph;
    expect(() => algorithm.execute(directedGraph)).toThrow(ArgumentError);
  });

  describe('AdjacencyListGraph', () => {
    it('should find 2 biconnected components in a simple undirected path graph (A-B-C)', () => {
      const graph = SampleGraphs.simpleUndirectedGraph;
      const result = algorithm.execute(graph);

      // In A-B-C, edges A-B and B-C are two separate biconnected components.
      expect(result.components.length).toBe(2);
      expect(result.components.map(c => c.length)).toEqual([1, 1]); // 1 edge each
    });

    it('should find 1 biconnected component in a complete graph (K4)', () => {
      const graph = SampleGraphs.completeGraphK4;
      const result = algorithm.execute(graph);
      expect(result.components.length).toBe(1);
      // K4 has 6 edges
      expect(result.components[0].length).toBe(6);
    });

    it('should handle a disconnected graph (A-B, C-D)', () => {
      const graph = SampleGraphs.disconnectedGraph;
      const result = algorithm.execute(graph);
      // Both edges are components
      expect(result.components.length).toBe(2);
      expect(result.components[0].length).toBe(1);
      expect(result.components[1].length).toBe(1);
    });

    it('should handle an empty graph', () => {
      const graph = new AdjacencyListGraph<string>(false);
      const result = algorithm.execute(graph);
      expect(result.components.length).toBe(0);
    });

    it('should handle a graph with a bridge connecting two cycles', () => {
      // A-B-C-A, C-D, D-E-F-D
      const graph = new AdjacencyListGraph<string>(false, false);
      ['A', 'B', 'C', 'D', 'E', 'F'].forEach(v => graph.addVertex(v));
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');
      graph.addEdge('C', 'A');
      graph.addEdge('C', 'D'); // bridge
      graph.addEdge('D', 'E');
      graph.addEdge('E', 'F');
      graph.addEdge('F', 'D');

      const result = algorithm.execute(graph);
      // 3 components: {A,B,C} edges, {C,D} edge, {D,E,F} edges
      expect(result.components.length).toBe(3);
    });
  });

  describe('AdjacencyMatrixGraph', () => {
    it('should find 2 biconnected components in a simple undirected path matrix graph', () => {
      const matrixGraph = new AdjacencyMatrixGraph<string>(false, false);
      matrixGraph.addVertex('A');
      matrixGraph.addVertex('B');
      matrixGraph.addVertex('C');
      matrixGraph.addEdge('A', 'B');
      matrixGraph.addEdge('B', 'C');

      const result = algorithm.execute(matrixGraph);
      expect(result.components.length).toBe(2);
      expect(result.components[0].length).toBe(1);
      expect(result.components[1].length).toBe(1);
    });
  });
});
