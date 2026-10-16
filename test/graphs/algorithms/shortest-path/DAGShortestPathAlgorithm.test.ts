import { describe, it, expect } from 'vitest';
import { DAGShortestPathAlgorithm } from '../../../../src/graphs/algorithms/shortest-path/DAGShortestPathAlgorithm';
import { SampleGraphs } from '../../fixtures/SampleGraphs';
import { ArgumentError } from '../../../../src/core/validation/ArgumentError';
import { AdjacencyListGraph } from '../../../../src/graphs/structures/AdjacencyListGraph';
import { AdjacencyMatrixGraph } from '../../../../src/graphs/structures/AdjacencyMatrixGraph';

describe('DAGShortestPathAlgorithm', () => {
  const algorithm = new DAGShortestPathAlgorithm<string, number>();

  it('should throw ArgumentError for undirected graphs', () => {
    const graph = SampleGraphs.simpleUndirectedGraph;
    expect(() => algorithm.findShortestPath(graph, 'A', 'C')).toThrow(ArgumentError);
  });

  describe('AdjacencyMatrixGraph', () => {
    it('should find shortest path correctly in a DAG matrix graph', () => {
      const graph = new AdjacencyMatrixGraph<string>(true, true);
      ['A', 'B', 'C'].forEach(v => graph.addVertex(v));
      graph.addEdge('A', 'B', 3);
      graph.addEdge('B', 'C', 2);
      graph.addEdge('A', 'C', 6);

      const result = algorithm.findShortestPath(graph, 'A', 'C');
      expect(result.found).toBe(true);
      expect(result.distance).toBe(5);
      expect(result.path).toEqual(['A', 'B', 'C']);
    });
  });
});

  it('should throw ArgumentError for non-DAGs (graphs with cycles)', () => {
    const graph = SampleGraphs.cyclicGraph;
    expect(() => algorithm.findShortestPath(graph, 'A', 'C')).toThrow(ArgumentError);
  });

  it('should throw ArgumentError if start or end vertex is not in the graph', () => {
    const graph = SampleGraphs.dagGraph;
    expect(() => algorithm.findShortestPath(graph, 'Z', 'C')).toThrow(ArgumentError);
  });

  it('should find shortest path correctly in a DAG', () => {
    const graph = new AdjacencyListGraph<string>(true, true);
    // A -> B(3), A -> C(6), B -> C(2), B -> D(4), C -> D(1), C -> E(2), D -> E(1)
    ['A', 'B', 'C', 'D', 'E'].forEach(v => graph.addVertex(v));
    graph.addEdge('A', 'B', 3);
    graph.addEdge('A', 'C', 6);
    graph.addEdge('B', 'C', 2);
    graph.addEdge('B', 'D', 4);
    graph.addEdge('C', 'D', 1);
    graph.addEdge('C', 'E', 2);
    graph.addEdge('D', 'E', 1);

    // Path A to E:
    // A->B (3)
    // B->C (2) => dist(C)=5
    // C->E (2) => dist(E)=7
    // Alternatively: C->D (1) => dist(D)=6, D->E(1) => dist(E)=7
    // Both give cost 7. Wait, C->E is cost 2. Path: A->B->C->E.
    const result = algorithm.findShortestPath(graph, 'A', 'E');
    expect(result.found).toBe(true);
    expect(result.distance).toBe(7);
    expect(result.path).toEqual(['A', 'B', 'C', 'E']); // A-B-C-E is shorter than A-B-C-D-E in hops, same cost
  });

  it('should allow negative weights', () => {
    const graph = new AdjacencyListGraph<string>(true, true);
    ['A', 'B', 'C'].forEach(v => graph.addVertex(v));
    graph.addEdge('A', 'B', 5);
    graph.addEdge('B', 'C', -10);
    graph.addEdge('A', 'C', -2);

    const result = algorithm.findShortestPath(graph, 'A', 'C');
    expect(result.found).toBe(true);
    expect(result.distance).toBe(-5);
    expect(result.path).toEqual(['A', 'B', 'C']);
  });

  it('should return found=false if no path exists', () => {
    const graph = new AdjacencyListGraph<string>(true, true);
    ['A', 'B'].forEach(v => graph.addVertex(v));

    const result = algorithm.findShortestPath(graph, 'A', 'B');
    expect(result.found).toBe(false);
    expect(result.distance).toBe(Infinity);
    expect(result.path).toEqual([]);
  });

  it('should handle missing arguments via execute correctly', () => {
    const graph = SampleGraphs.dagGraph;
    expect(() => algorithm.execute(graph, undefined as unknown as string, undefined as unknown as string)).toThrow(ArgumentError);
  });
});
