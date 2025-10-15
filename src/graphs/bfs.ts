
import { IGraph } from './IGraph';

export const bfs = <T>(graph: IGraph<T>, startNode: T): T[] => {
  const visited: Set<T> = new Set();
  const queue: T[] = [];
  const result: T[] = [];

  visited.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    result.push(currentNode);

    const neighbors = graph.getNeighbors(currentNode);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
};
