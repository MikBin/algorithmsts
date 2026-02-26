/**
 * Generic Node Type Definition
 *
 * Represents a fundamental unit in data structures like trees, graphs, and linked lists.
 * This interface is intended to be a base or common definition.
 */

export interface Node<T = any> {
  /** The value stored in the node */
  value: T;
  /** Optional unique identifier for the node */
  id?: string | number;
  /** Optional metadata associated with the node */
  metadata?: Record<string, any>;
}
