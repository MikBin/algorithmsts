import { describe, it, expect } from 'vitest';
import { EulerianPathCircuit } from '../../../../src/graphs/algorithms/graph/EulerianPathCircuit';
import { SampleGraphs } from '../../fixtures/SampleGraphs';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph';

describe('EulerianPathCircuit - Matrices and Edge Cases', () => {
  const algorithm = new EulerianPathCircuit<string>();

  describe('Undirected Graphs', () => {
    it('should find an Eulerian circuit in K3 (triangle)', () => {
      const graph = new AdjacencyListGraph<string>(false);
      ['A', 'B', 'C'].forEach(v => graph.addVertex(v));
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');
      graph.addEdge('C', 'A');

      const result = algorithm.execute(graph);
      expect(result.type).toBe('circuit');
      expect(result.path.length).toBe(4); // 3 edges + 1
      expect(result.path[0]).toBe(result.path[result.path.length - 1]);
    });

    it('should find an Eulerian trail in A-B-C (simple path)', () => {
      const graph = SampleGraphs.simpleUndirectedGraph; // A-B, B-C
      const result = algorithm.execute(graph);
      expect(result.type).toBe('trail');
      expect(result.path.length).toBe(3);
      // Valid paths: A-B-C or C-B-A
      expect(['A', 'C']).toContain(result.path[0]);
    });

    it('should return none for K4 (all vertices degree 3)', () => {
      const graph = SampleGraphs.completeGraphK4;
      const result = algorithm.execute(graph);
      expect(result.type).toBe('none');
      expect(result.path).toEqual([]);
    });

    it('should return none for disconnected graph with edges in both components', () => {
      const graph = SampleGraphs.disconnectedGraph; // A-B, C-D
      const result = algorithm.execute(graph);
      expect(result.type).toBe('none');
      expect(result.path).toEqual([]);
    });

    it('should handle empty graph', () => {
      const graph = new AdjacencyListGraph<string>(false);
      const result = algorithm.execute(graph);
      expect(result.type).toBe('circuit');
      expect(result.path).toEqual([]);
    });

    it('should handle edgeless graph with vertices', () => {
      const graph = new AdjacencyListGraph<string>(false);
      graph.addVertex('A');
      graph.addVertex('B');
      const result = algorithm.execute(graph);
      expect(result.type).toBe('circuit');
      expect(result.path).toEqual([]);
    });
  });

  describe('Directed Graphs', () => {
    it('should find an Eulerian circuit in a directed cycle', () => {
      const graph = SampleGraphs.cyclicGraph; // A->B->C->A
      const result = algorithm.execute(graph);
      expect(result.type).toBe('circuit');
      expect(result.path.length).toBe(4);
      expect(result.path[0]).toBe(result.path[result.path.length - 1]);
    });

    it('should find an Eulerian trail in a directed path', () => {
      const graph = SampleGraphs.simpleDirectedGraph; // A->B->C
      const result = algorithm.execute(graph);
      expect(result.type).toBe('trail');
      expect(result.path).toEqual(['A', 'B', 'C']);
    });

    it('should return none if in/out degrees do not match criteria', () => {
      const graph = new AdjacencyListGraph<string>(true);
      ['A', 'B', 'C'].forEach(v => graph.addVertex(v));
      // A->B, A->C => A: out=2,in=0; B: out=0,in=1; C: out=0,in=1. Multiple nodes have diff > 1 or multiple sources.
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      const result = algorithm.execute(graph);
      expect(result.type).toBe('none');
    });

    it('should return none for disconnected directed components', () => {
      const graph = new AdjacencyListGraph<string>(true);
      ['A', 'B', 'C', 'D'].forEach(v => graph.addVertex(v));
      graph.addEdge('A', 'B');
      graph.addEdge('C', 'D');
      // Degrees look like two trails, which is invalid overall
      const result = algorithm.execute(graph);
      expect(result.type).toBe('none');
    });

    it('should handle directed empty graph', () => {
      const graph = SampleGraphs.emptyGraph;
      const result = algorithm.execute(graph);
      expect(result.type).toBe('circuit');
      expect(result.path).toEqual([]);
    });

    it('should handle directed matrix graph (using SampleGraphs.simpleDirectedGraphMatrix)', () => {
      const graph = SampleGraphs.simpleDirectedGraphMatrix;
      const result = algorithm.execute(graph);
      expect(result.type).toBe('trail');
      expect(result.path).toEqual(['A', 'B', 'C']);
    });
  });
});
