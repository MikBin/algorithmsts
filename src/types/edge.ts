/**
 * Generic Edge Type Definition
 *
 * Represents a connection between two nodes in a graph or similar structure.
 */

export interface Edge<T = any> {
  /** The source node or value of the connection */
  source: T;
  /** The target node or value of the connection */
  target: T;
  /** Optional weight or cost associated with traversing the edge */
  weight?: number;
  /** Optional label describing the edge */
  label?: string;
  /** Optional metadata */
  metadata?: Record<string, any>;
}
