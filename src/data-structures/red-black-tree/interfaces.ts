export type Color = 'red' | 'black';

export interface RBNode<T> {
  value: T;
  left: RBNode<T> | null;
  right: RBNode<T> | null;
  parent: RBNode<T> | null;
  color: Color;
}
