import { BSTNode } from './interfaces';

export function* inOrderTraversal<T>(node: BSTNode<T> | null): Generator<T, void, unknown> {
  if (node) {
    yield* inOrderTraversal(node.left);
    yield node.value;
    yield* inOrderTraversal(node.right);
  }
}
