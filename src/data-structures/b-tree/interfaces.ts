/**
 * @title B-Tree Node Interface
 * @notice Defines the structure of a node in the B-Tree
 * @dev This interface is used to represent a node in the B-Tree.
 * @template T The type of elements stored in the B-Tree.
 */
export interface BTreeNode<T> {
  /**
   * @notice The keys stored in the node.
   */
  keys: T[];

  /**
   * @notice The children of the node.
   */
  children: BTreeNode<T>[];

  /**
   * @notice A boolean flag indicating whether the node is a leaf.
   */
  isLeaf: boolean;

  /**
   * @notice An optional reference to the parent of the node.
   */
  parent?: BTreeNode<T>;
}
