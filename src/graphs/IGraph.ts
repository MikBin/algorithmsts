
export interface IGraph<T> {
  getNeighbors(node: T): T[];
}
