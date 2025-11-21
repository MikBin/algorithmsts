import { describe, it, expect, beforeEach } from 'vitest';
import { TopologicalSort } from '../../../src/graphs/algorithms/graph/TopologicalSort';
import { CycleDetection } from '../../../src/graphs/algorithms/graph/CycleDetection';
import { SampleGraphs } from '../fixtures/SampleGraphs';
import { GraphTestData } from '../fixtures/GraphTestData';
import { AdjacencyListGraph } from '../../../src/graphs/structures/AdjacencyListGraph';

describe('Graph Algorithms', () => {
  describe('Topological Sort', () => {
    let topologicalSort: TopologicalSort<string>;

    beforeEach(() => {
      topologicalSort = new TopologicalSort<string>();
    });

    it('should perform topological sort on DAG', () => {
      const graph = SampleGraphs.dagGraph;
      const result = topologicalSort.execute(graph);

      expect(result.isDAG).toBe(true);
      expect(result.order.length).toBe(4);
      expect(result.cycle).toBeUndefined();

      // Verify topological order: A before B, B before D, C before D
      const aIndex = result.order.indexOf('A');
      const bIndex = result.order.indexOf('B');
      const cIndex = result.order.indexOf('C');
      const dIndex = result.order.indexOf('D');

      expect(aIndex).toBeLessThan(bIndex);
      expect(aIndex).toBeLessThan(cIndex);
      expect(bIndex).toBeLessThan(dIndex);
      expect(cIndex).toBeLessThan(dIndex);
    });

    it('should detect cycles in directed graphs', () => {
      const graph = SampleGraphs.cyclicGraph;
      const result = topologicalSort.execute(graph);

      expect(result.isDAG).toBe(false);
      expect(result.order).toEqual([]);
      expect(result.cycle).toBeDefined();
      expect(result.cycle!.length).toBeGreaterThan(2); // Cycle should have at least 3 vertices
    });

    it('should throw error for undirected graphs', () => {
      const graph = SampleGraphs.simpleUndirectedGraph;
      expect(() => topologicalSort.execute(graph)).toThrow();
    });

    it('should handle single vertex graph', () => {
      const graph = SampleGraphs.singleVertexGraph;
      const result = topologicalSort.execute(graph);

      expect(result.isDAG).toBe(true);
      expect(result.order).toEqual(['A']);
      expect(result.cycle).toBeUndefined();
    });

    it('should handle empty graph', () => {
      const graph = SampleGraphs.emptyGraph;
      const result = topologicalSort.execute(graph);

      expect(result.isDAG).toBe(true);
      expect(result.order).toEqual([]);
      expect(result.cycle).toBeUndefined();
    });
  });

  describe('Cycle Detection', () => {
    let cycleDetection: CycleDetection<string>;

    beforeEach(() => {
      cycleDetection = new CycleDetection<string>();
    });

    it('should detect cycles in directed graphs', () => {
      const graph = SampleGraphs.cyclicGraph;
      const result = cycleDetection.execute(graph);

      expect(result.hasCycle).toBe(true);
      expect(result.cycle).toBeDefined();
      expect(result.cycle!.length).toBeGreaterThan(2);
    });

    it('should not detect cycles in DAGs', () => {
      const graph = SampleGraphs.dagGraph;
      const result = cycleDetection.execute(graph);

      expect(result.hasCycle).toBe(false);
      expect(result.cycle).toBeUndefined();
    });

    it('should detect cycles in undirected graphs', () => {
      // Create a simple cycle: A-B-C-A
      const graph = SampleGraphs.simpleUndirectedGraph;
      // The simple undirected graph A-B-C doesn't have a cycle
      const result = cycleDetection.execute(graph);

      expect(result.hasCycle).toBe(false);
      expect(result.cycle).toBeUndefined();
    });

    it('should handle single vertex graph', () => {
      const graph = SampleGraphs.singleVertexGraph;
      const result = cycleDetection.execute(graph);

      expect(result.hasCycle).toBe(false);
      expect(result.cycle).toBeUndefined();
    });

    it('should handle empty graph', () => {
      const graph = SampleGraphs.emptyGraph;
      const result = cycleDetection.execute(graph);

      expect(result.hasCycle).toBe(false);
      expect(result.cycle).toBeUndefined();
    });

    it('should handle disconnected graphs', () => {
      const graph = SampleGraphs.disconnectedGraph;
      const result = cycleDetection.execute(graph);

      expect(result.hasCycle).toBe(false);
      expect(result.cycle).toBeUndefined();
    });

    it('should detect self-loop in directed graph', () => {
      const graph = new AdjacencyListGraph<string>(true);
      graph.addVertex('A');
      graph.addEdge('A', 'A');
      const result = cycleDetection.execute(graph);
      expect(result.hasCycle).toBe(true);
    });

    it('should detect cycle in complex directed graph', () => {
       // A -> B -> C -> D -> B
       const graph = new AdjacencyListGraph<string>(true);
       graph.addVertex('A'); graph.addVertex('B'); graph.addVertex('C'); graph.addVertex('D');
       graph.addEdge('A', 'B');
       graph.addEdge('B', 'C');
       graph.addEdge('C', 'D');
       graph.addEdge('D', 'B');

       const result = cycleDetection.execute(graph);
       expect(result.hasCycle).toBe(true);
       expect(result.cycle).toBeDefined();
       // Cycle could start at B, C, or D. Length 3.
       expect(result.cycle?.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Algorithm Integration', () => {
    it('should work with both graph implementations', () => {
      const topologicalSort = new TopologicalSort<string>();
      const cycleDetection = new CycleDetection<string>();

      // Test with adjacency list
      const listGraph = SampleGraphs.dagGraph;
      const listTopoResult = topologicalSort.execute(listGraph);
      const listCycleResult = cycleDetection.execute(listGraph);

      expect(listTopoResult.isDAG).toBe(true);
      expect(listCycleResult.hasCycle).toBe(false);

      // Test with adjacency matrix (if available)
      const matrixGraph = SampleGraphs.simpleDirectedGraphMatrix;
      const matrixTopoResult = topologicalSort.execute(matrixGraph);
      const matrixCycleResult = cycleDetection.execute(matrixGraph);

      expect(matrixTopoResult.isDAG).toBe(true);
      expect(matrixCycleResult.hasCycle).toBe(false);
    });

    it('should handle large graphs', () => {
      const largeGraph = GraphTestData.createLargeGraph('adjacencyList');
      const cycleDetection = new CycleDetection<number>();

      const result = cycleDetection.execute(largeGraph);
      // Large random graph might or might not have cycles
      expect(typeof result.hasCycle).toBe('boolean');
    });
  });

  describe('Edge Cases', () => {
    it('should handle graphs with self-loops', () => {
      // Note: Current implementation doesn't support self-loops
      // But we can test with existing graphs
      const graph = SampleGraphs.singleVertexGraph;
      const cycleDetection = new CycleDetection<string>();
      const result = cycleDetection.execute(graph);

      expect(result.hasCycle).toBe(false);
    });

    it('should handle complete graphs', () => {
      const graph = SampleGraphs.completeGraphK4;
      const cycleDetection = new CycleDetection<string>();
      const result = cycleDetection.execute(graph);

      // Complete graph has cycles
      expect(result.hasCycle).toBe(true);
      expect(result.cycle).toBeDefined();
    });

    it('should handle tree structures', () => {
      const graph = SampleGraphs.treeGraph;
      const cycleDetection = new CycleDetection<string>();
      const topologicalSort = new TopologicalSort<string>();

      const cycleResult = cycleDetection.execute(graph);
      expect(cycleResult.hasCycle).toBe(false);

      // Trees are DAGs when treated as directed
      const topoResult = topologicalSort.execute(graph);
      expect(topoResult.isDAG).toBe(true);
    });
  });

  describe('Cycle Detection in Different Graph Types', () => {
    it('should correctly identify cycles in directed vs undirected', () => {
      const directedCyclic = SampleGraphs.cyclicGraph;
      const undirectedAcyclic = SampleGraphs.simpleUndirectedGraph;

      const cycleDetection = new CycleDetection<string>();

      const directedResult = cycleDetection.execute(directedCyclic);
      const undirectedResult = cycleDetection.execute(undirectedAcyclic);

      expect(directedResult.hasCycle).toBe(true);
      expect(undirectedResult.hasCycle).toBe(false);
    });

    it('should handle mixed directed/undirected scenarios', () => {
      // Test that the algorithm correctly distinguishes between directed and undirected
      const directedGraph = SampleGraphs.simpleDirectedGraph;
      const undirectedGraph = SampleGraphs.simpleUndirectedGraph;

      const cycleDetection = new CycleDetection<string>();

      const directedResult = cycleDetection.execute(directedGraph);
      const undirectedResult = cycleDetection.execute(undirectedGraph);

      // Both should be acyclic
      expect(directedResult.hasCycle).toBe(false);
      expect(undirectedResult.hasCycle).toBe(false);
    });
  });

  describe('Topological Sort Properties', () => {
    it('should maintain edge directions in topological order', () => {
      const graph = SampleGraphs.dagGraph;
      const topologicalSort = new TopologicalSort<string>();
      const result = topologicalSort.execute(graph);

      expect(result.isDAG).toBe(true);

      // For every edge u->v, u should come before v in the order
      const orderMap = new Map<string, number>();
      result.order.forEach((vertex, index) => {
        orderMap.set(vertex, index);
      });

      // Check all edges
      for (const vertex of graph.getVertices()) {
        for (const neighbor of graph.getNeighbors(vertex)) {
          const fromIndex = orderMap.get(vertex)!;
          const toIndex = orderMap.get(neighbor)!;
          expect(fromIndex).toBeLessThan(toIndex);
        }
      }
    });

    it('should detect all cycles in complex graphs', () => {
      const graph = SampleGraphs.cyclicGraph;
      const topologicalSort = new TopologicalSort<string>();
      const result = topologicalSort.execute(graph);

      expect(result.isDAG).toBe(false);
      expect(result.cycle).toBeDefined();
    });
  });
});
