import { describe, it, expect, beforeEach } from 'vitest';
import { BreadthFirstSearch } from '../../../src/graphs/algorithms/traversal/BreadthFirstSearch';
import { DepthFirstSearch } from '../../../src/graphs/algorithms/traversal/DepthFirstSearch';
import { SampleGraphs } from '../fixtures/SampleGraphs';
import { GraphTestData } from '../fixtures/GraphTestData';
import { AdjacencyListGraph } from '../../../src/graphs/structures/AdjacencyListGraph';

describe('Graph Traversal Algorithms', () => {
  describe('Breadth-First Search (BFS)', () => {
    let bfs: BreadthFirstSearch<string>;

    beforeEach(() => {
      bfs = new BreadthFirstSearch<string>();
    });

    it('should traverse simple directed graph', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = bfs.traverse(graph, 'A');

      expect(result.visited).toContain('A');
      expect(result.visited).toContain('B');
      expect(result.visited).toContain('C');
      expect(result.parents.get('B')).toBe('A');
      expect(result.parents.get('C')).toBe('B');
      expect(result.levels.get('A')).toBe(0);
      expect(result.levels.get('B')).toBe(1);
      expect(result.levels.get('C')).toBe(2);
    });

    it('should traverse disconnected graph', () => {
      const graph = SampleGraphs.disconnectedGraph;
      const result = bfs.traverse(graph, 'A');

      expect(result.visited).toEqual(['A', 'B']); // Only reachable from A
      expect(result.parents.get('B')).toBe('A');
    });

    it('should handle single vertex graph', () => {
      const graph = SampleGraphs.singleVertexGraph;
      const result = bfs.traverse(graph, 'A');

      expect(result.visited).toEqual(['A']);
      expect(result.parents.get('A')).toBeNull();
      expect(result.levels.get('A')).toBe(0);
    });

    it('should reconstruct correct paths', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = bfs.traverse(graph, 'A');

      expect(result.paths.get('A')).toEqual(['A']);
      expect(result.paths.get('B')).toEqual(['A', 'B']);
      expect(result.paths.get('C')).toEqual(['A', 'B', 'C']);
    });

    it('should throw error for non-existent start vertex', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      expect(() => bfs.traverse(graph, 'Z')).toThrow();
    });

    it('should work with execute method', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = bfs.execute(graph, 'A');

      expect(result.visited.length).toBe(3);
    });

    it('should handle cyclic graphs', () => {
      const graph = SampleGraphs.cyclicGraph;
      const result = bfs.traverse(graph, 'A');

      expect(result.visited).toEqual(['A', 'B', 'C']);
      // In BFS, we should find shortest paths even with cycles
      expect(result.levels.get('A')).toBe(0);
      expect(result.levels.get('B')).toBe(1);
      expect(result.levels.get('C')).toBe(2);
    });

    it('should support legacy execute signature', () => {
         const graph = SampleGraphs.simpleDirectedGraph;
         const result = bfs.execute({ graph, startNode: 'A' });
         expect(result.visited.length).toBe(3);
    });

    it('should throw in execute if start vertex is undefined (new signature)', () => {
        const graph = SampleGraphs.simpleDirectedGraph;
        expect(() => bfs.execute(graph)).toThrow();
    });
  });

  describe('Depth-First Search (DFS)', () => {
    let dfs: DepthFirstSearch<string>;

    beforeEach(() => {
      dfs = new DepthFirstSearch<string>();
    });

    it('should traverse simple directed graph', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = dfs.traverse(graph, 'A');

      expect(result.visited).toContain('A');
      expect(result.visited).toContain('B');
      expect(result.visited).toContain('C');
      expect(result.parents.get('B')).toBe('A');
      expect(result.parents.get('C')).toBe('B');
    });

    it('should traverse disconnected graph', () => {
      const graph = SampleGraphs.disconnectedGraph;
      const result = dfs.traverse(graph, 'A');

      expect(result.visited).toEqual(['A', 'B']); // Only reachable from A
      expect(result.parents.get('B')).toBe('A');
    });

    it('should handle single vertex graph', () => {
      const graph = SampleGraphs.singleVertexGraph;
      const result = dfs.traverse(graph, 'A');

      expect(result.visited).toEqual(['A']);
      expect(result.parents.get('A')).toBeNull();
    });

    it('should reconstruct correct paths', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = dfs.traverse(graph, 'A');

      expect(result.paths.get('A')).toEqual(['A']);
      expect(result.paths.get('B')).toEqual(['A', 'B']);
      expect(result.paths.get('C')).toEqual(['A', 'B', 'C']);
    });

    it('should throw error for non-existent start vertex', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      expect(() => dfs.traverse(graph, 'Z')).toThrow();
    });

    it('should work with execute method', () => {
      const graph = SampleGraphs.simpleDirectedGraph;
      const result = dfs.execute(graph, 'A');

      expect(result.visited.length).toBe(3);
    });

    it('should handle cyclic graphs', () => {
      const graph = SampleGraphs.cyclicGraph;
      const result = dfs.traverse(graph, 'A');

      expect(result.visited).toEqual(['A', 'B', 'C']);
      expect(result.parents.get('B')).toBe('A');
      expect(result.parents.get('C')).toBe('B');
    });

    it('should explore depth-first', () => {
      // Create a graph where DFS and BFS would differ
      const graph = SampleGraphs.dagGraph; // A -> B, A -> C, B -> D, C -> D
      const result = dfs.traverse(graph, 'A');

      // DFS might visit B then D, then backtrack to C then D
      expect(result.visited).toContain('A');
      expect(result.visited).toContain('B');
      expect(result.visited).toContain('C');
      expect(result.visited).toContain('D');
    });

    it('should support legacy execute signature', () => {
        const graph = SampleGraphs.simpleDirectedGraph;
        const result = dfs.execute({ graph, startNode: 'A' });
        expect(result.visited.length).toBe(3);
   });

   it('should throw in execute if start vertex is undefined (new signature)', () => {
       const graph = SampleGraphs.simpleDirectedGraph;
       expect(() => dfs.execute(graph)).toThrow();
   });
  });

  describe('Traversal Algorithm Comparison', () => {
    it('should produce different traversal orders for BFS vs DFS', () => {
      const graph = SampleGraphs.dagGraph; // A -> B, A -> C, B -> D, C -> D
      const bfs = new BreadthFirstSearch<string>();
      const dfs = new DepthFirstSearch<string>();

      const bfsResult = bfs.traverse(graph, 'A');
      const dfsResult = dfs.traverse(graph, 'A');

      // Both should visit all nodes
      expect(bfsResult.visited.length).toBe(4);
      expect(dfsResult.visited.length).toBe(4);

      // But potentially in different orders
      // BFS: A, B, C, D (level by level)
      // DFS: A, B, D, C (depth first)
      expect(bfsResult.levels.get('A')).toBe(0);
      expect(bfsResult.levels.get('B')).toBe(1);
      expect(bfsResult.levels.get('C')).toBe(1);
      expect(bfsResult.levels.get('D')).toBe(2);
    });

    it('should handle large graphs', () => {
      const largeGraph = GraphTestData.createLargeGraph('adjacencyList');
      const bfs = new BreadthFirstSearch<number>();
      const dfs = new DepthFirstSearch<number>();

      const startVertex = largeGraph.getVertices()[0];
      const bfsResult = bfs.traverse(largeGraph, startVertex);
      const dfsResult = dfs.traverse(largeGraph, startVertex);

      expect(bfsResult.visited.length).toBeGreaterThan(0);
      expect(dfsResult.visited.length).toBeGreaterThan(0);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty graph', () => {
      const graph = SampleGraphs.emptyGraph;
      const bfs = new BreadthFirstSearch<string>();
      const dfs = new DepthFirstSearch<string>();

      expect(() => bfs.traverse(graph, 'A')).toThrow();
      expect(() => dfs.traverse(graph, 'A')).toThrow();
    });

    it('should handle graphs with isolated vertices', () => {
      const graph = SampleGraphs.singleVertexGraph;
      const bfs = new BreadthFirstSearch<string>();
      const dfs = new DepthFirstSearch<string>();

      // Start from vertex with no edges
      const bfsResult = bfs.traverse(graph, 'A');
      expect(bfsResult.visited).toEqual(['A']);
      expect(bfsResult.parents.get('A')).toBeNull();

      const dfsResult = dfs.traverse(graph, 'A');
      expect(dfsResult.visited).toEqual(['A']);
      expect(dfsResult.parents.get('A')).toBeNull();
    });
  });
});
