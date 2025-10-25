export interface AVLNode<T> {
  value: T;
  left: AVLNode<T> | null;
  right: AVLNode<T> | null;
  parent: AVLNode<T> | null;
  height: number;
}
