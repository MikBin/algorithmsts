
import { DepthFirstSearch } from '../../../../src/algorithms/graphs/traversal';
import { AdjacencyListGraph } from '../../../graphs/structures/adjacencyListGraph.test';
import { describe, it, expect } from 'vitest';

// Re-export for use in tests
const TestAdjacencyListGraph = AdjacencyListGraph;

describe('DepthFirstSearch', () => {
  it('should traverse the graph in DFS order', () => {
    const graph = new AdjacencyListGraph<number>();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);

    const dfs = new DepthFirstSearch<number>();
    const result = dfs.execute({ graph, startNode: 1 });
    expect(result.traversalOrder).toEqual([1, 2, 4, 3, 5]);
  });

  it('should handle a disconnected graph', () => {
    const graph = new AdjacencyListGraph<number>();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);

    graph.addEdge(1, 2);

    const dfs = new DepthFirstSearch<number>();
    const result = dfs.execute({ graph, startNode: 1 });
    expect(result.traversalOrder).toEqual([1, 2]);
  });

  it('should handle a graph with a single node', () => {
    const graph = new AdjacencyListGraph<number>();
    graph.addVertex(1);

    const dfs = new DepthFirstSearch<number>();
    const result = dfs.execute({ graph, startNode: 1 });
    expect(result.traversalOrder).toEqual([1]);
  });

  it('should handle object nodes correctly', () => {
    const graph = new AdjacencyListGraph<{ id: number }>();
    const node1 = { id: 1 };
    const node2 = { id: 2 };
    const node3 = { id: 3 };

    graph.addVertex(node1);
    graph.addVertex(node2);
    graph.addVertex(node3);

    graph.addEdge(node1, node2);

    const dfs = new DepthFirstSearch<{ id: number }>();
    const result = dfs.execute({ graph, startNode: node1 });
    expect(result.traversalOrder).toEqual([node1, node2]);
  });
});
