import { describe, it, expect } from 'vitest';
import { BridgesAndArticulationPoints } from '../../../../src/graphs/algorithms/graph/BridgesAndArticulationPoints';
import { SampleGraphs } from '../../fixtures/SampleGraphs';
import { ArgumentError } from '../../../../src/core/validation/ArgumentError';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../../../src/graphs/structures/AdjacencyMatrixGraph';

describe('BridgesAndArticulationPoints', () => {
  const algorithm = new BridgesAndArticulationPoints<string>();

  it('should throw ArgumentError for directed graphs', () => {
    const directedGraph = SampleGraphs.simpleDirectedGraph;
    expect(() => algorithm.execute(directedGraph)).toThrow(ArgumentError);
  });

  describe('AdjacencyListGraph', () => {
    it('should find 2 bridges and 1 articulation point in a simple undirected path graph (A-B-C)', () => {
      // In A-B-C, edges A-B and B-C are bridges. B is the only articulation point.
      const graph = SampleGraphs.simpleUndirectedGraph;
      const result = algorithm.execute(graph);

      // Bridges
      expect(result.bridges.length).toBe(2);
      // Sort bridges for comparison
      const sortedBridges = result.bridges
        .map(b => [...b].sort())
        .sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
      expect(sortedBridges).toEqual([['A', 'B'], ['B', 'C']]);

      // Articulation Points
      expect(result.articulationPoints.length).toBe(1);
      expect(result.articulationPoints).toContain('B');
    });

    it('should find no bridges or articulation points in a complete graph (K4)', () => {
      const graph = SampleGraphs.completeGraphK4;
      const result = algorithm.execute(graph);
      expect(result.bridges.length).toBe(0);
      expect(result.articulationPoints.length).toBe(0);
    });

    it('should handle a disconnected graph (A-B, C-D)', () => {
      const graph = SampleGraphs.disconnectedGraph;
      const result = algorithm.execute(graph);
      // Both edges are bridges
      expect(result.bridges.length).toBe(2);
      const sortedBridges = result.bridges
        .map(b => [...b].sort())
        .sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
      expect(sortedBridges).toEqual([['A', 'B'], ['C', 'D']]);
      // No node has more than one neighbor, but actually wait:
      // If A is visited, it reaches B. Is A an articulation point?
      // "parent(u) === null && childCount > 1" -> not A.
      // "parent(u) !== null && low(v) >= disc(u)" -> is B an AP? No, it has no children in DFS tree.
      // So no articulation points.
      expect(result.articulationPoints.length).toBe(0);
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
      expect(result.bridges.length).toBe(1);
      const bridge = [...result.bridges[0]].sort();
      expect(bridge).toEqual(['C', 'D']);

      expect(result.articulationPoints.length).toBe(2);
      expect(result.articulationPoints).toContain('C');
      expect(result.articulationPoints).toContain('D');
    });

    it('should handle an empty graph', () => {
      const graph = new AdjacencyListGraph<string>(false);
      const result = algorithm.execute(graph);
      expect(result.bridges.length).toBe(0);
      expect(result.articulationPoints.length).toBe(0);
    });
  });

  describe('AdjacencyMatrixGraph', () => {
    it('should find 2 bridges and 1 articulation point in a simple undirected path matrix graph', () => {
      const graph = SampleGraphs.weightedGraphMatrix;
      // Let's create an unweighted version of A-B-C for testing
      const matrixGraph = new AdjacencyMatrixGraph<string>(false, false);
      matrixGraph.addVertex('A');
      matrixGraph.addVertex('B');
      matrixGraph.addVertex('C');
      matrixGraph.addEdge('A', 'B');
      matrixGraph.addEdge('B', 'C');

      const result = algorithm.execute(matrixGraph);
      expect(result.bridges.length).toBe(2);
      expect(result.articulationPoints.length).toBe(1);
      expect(result.articulationPoints).toContain('B');
    });
  });
});
