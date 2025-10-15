
import { dfs } from '../../src/graphs/dfs';
import { AdjacencyListGraph } from './AdjacencyListGraph';
import { describe, it, expect } from 'vitest';

describe('DFS', () => {
  it('should traverse the graph in DFS order', () => {
    const graph = new AdjacencyListGraph<number>();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);

    const result = dfs(graph, 1);
    expect(result).toEqual([1, 2, 4, 3, 5]);
  });

  it('should handle a disconnected graph', () => {
    const graph = new AdjacencyListGraph<number>();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);

    graph.addEdge(1, 2);

    const result = dfs(graph, 1);
    expect(result).toEqual([1, 2]);
  });

  it('should handle a graph with a single node', () => {
    const graph = new AdjacencyListGraph<number>();
    graph.addNode(1);

    const result = dfs(graph, 1);
    expect(result).toEqual([1]);
  });

  it('should handle object nodes correctly', () => {
    const graph = new AdjacencyListGraph<{ id: number }>();
    const node1 = { id: 1 };
    const node2 = { id: 2 };
    const node3 = { id: 3 };

    graph.addNode(node1);
    graph.addNode(node2);
    graph.addNode(node3);

    graph.addEdge(node1, node2);

    const result = dfs(graph, node1);
    expect(result).toEqual([node1, node2]);
  });
});
