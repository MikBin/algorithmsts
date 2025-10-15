
import { IGraph } from './IGraph';

export const dfs = <T>(graph: IGraph<T>, startNode: T): T[] => {
  const visited: Set<T> = new Set();
  const result: T[] = [];

  const dfsRecursive = (node: T) => {
    visited.add(node);
    result.push(node);

    const neighbors = graph.getNeighbors(node);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfsRecursive(neighbor);
      }
    }
  };

  dfsRecursive(startNode);
  return result;
};
