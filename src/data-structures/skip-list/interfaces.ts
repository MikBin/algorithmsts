/**
 * Node interface for SkipList elements
 */
export interface SkipNode<T> {
  /** Array of pointers to the next node at each level */
  pointers: (SkipNode<T> | undefined)[];
  /** The value stored in the node */
  value: T;
  /** Counter for the number of times this value has been inserted */
  count: number;
}

/**
 * Binary comparison routine for ordering elements
 */
export type BinaryComparisonRoutine<T> = (x: T, y: T) => number;
