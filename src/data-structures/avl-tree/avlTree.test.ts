import { AVLTree } from './avlTree';

describe('AVLTree', () => {
  it('should insert values and maintain balance', () => {
    const tree = new AVLTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);
    tree.insert(50);
    tree.insert(25);

    expect(tree.isBalanced()).toBe(true);
    expect(tree.traversalInOrder()).toEqual([10, 20, 25, 30, 40, 50]);
    expect(tree.getSize()).toBe(6);
  });

  it('should handle left-right rotation', () => {
    const tree = new AVLTree<number>();
    tree.insert(30);
    tree.insert(10);
    tree.insert(20);
    expect(tree.isBalanced()).toBe(true);
    expect(tree.traversalInOrder()).toEqual([10, 20, 30]);
  });

  it('should handle right-left rotation', () => {
    const tree = new AVLTree<number>();
    tree.insert(10);
    tree.insert(30);
    tree.insert(20);
    expect(tree.isBalanced()).toBe(true);
    expect(tree.traversalInOrder()).toEqual([10, 20, 30]);
  });

  it('should delete values and maintain balance', () => {
    const tree = new AVLTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(40);
    tree.insert(50);
    tree.insert(25);

    tree.delete(40);
    expect(tree.isBalanced()).toBe(true);
    expect(tree.traversalInOrder()).toEqual([10, 20, 25, 30, 50]);
    expect(tree.getSize()).toBe(5);

    tree.delete(10);
    expect(tree.isBalanced()).toBe(true);
    expect(tree.traversalInOrder()).toEqual([20, 25, 30, 50]);
    expect(tree.getSize()).toBe(4);
  });

  it('should search for values', () => {
    const tree = new AVLTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);

    expect(tree.search(20)?.value).toBe(20);
    expect(tree.search(40)).toBe(null);
  });

  it('should find min and max values', () => {
    const tree = new AVLTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);

    expect(tree.findMin()?.value).toBe(10);
    expect(tree.findMax()?.value).toBe(30);
  });

  it('should return null for min and max in an empty tree', () => {
    const tree = new AVLTree<number>();
    expect(tree.findMin()).toBe(null);
    expect(tree.findMax()).toBe(null);
  });

  it('should perform traversals correctly', () => {
    const tree = new AVLTree<number>();
    tree.insert(30);
    tree.insert(20);
    tree.insert(40);
    tree.insert(10);
    tree.insert(25);

    expect(tree.traversalInOrder()).toEqual([10, 20, 25, 30, 40]);
    expect(tree.traversalPreOrder()).toEqual([30, 20, 10, 25, 40]);
    expect(tree.traversalPostOrder()).toEqual([10, 25, 20, 40, 30]);
    expect(tree.traversalLevelOrder()).toEqual([30, 20, 40, 10, 25]);
  });

  it('should clear the tree', () => {
    const tree = new AVLTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.clear();
    expect(tree.getSize()).toBe(0);
    expect(tree.root).toBe(null);
  });

  it('should handle custom comparators', () => {
    const tree = new AVLTree<{ key: number, value: string }>((a, b) => a.key - b.key);
    tree.insert({ key: 10, value: 'ten' });
    tree.insert({ key: 20, value: 'twenty' });
    tree.insert({ key: 5, value: 'five' });

    expect(tree.traversalInOrder().map(n => n.key)).toEqual([5, 10, 20]);
    expect(tree.search({ key: 20, value: '' })?.value).toEqual({ key: 20, value: 'twenty' });
  });

  it('should be iterable', () => {
    const tree = new AVLTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);

    const values = [...tree];
    expect(values).toEqual([5, 10, 20]);
  });

  it('should maintain correct parent pointers after rotations', () => {
    const tree = new AVLTree<number>();
    tree.insert(30);
    tree.insert(20);
    tree.insert(10); // Right rotation at root

    let root = tree.root!;
    expect(root.value).toBe(20);
    expect(root.parent).toBe(null);
    expect(root.left!.value).toBe(10);
    expect(root.left!.parent).toBe(root);
    expect(root.right!.value).toBe(30);
    expect(root.right!.parent).toBe(root);

    tree.insert(5);
    tree.insert(1); // Right rotation at node 10

    const node5 = tree.search(5)!;
    const node1 = tree.search(1)!;
    const node10 = tree.search(10)!;
    const node20 = tree.root!;

    expect(node20.left).toBe(node5);
    expect(node5.parent).toBe(node20);

    expect(node5.left).toBe(node1);
    expect(node1.parent).toBe(node5);

    expect(node5.right).toBe(node10);
    expect(node10.parent).toBe(node5);

    expect(node10.left).toBe(null);
    expect(node10.right).toBe(null);
  });
});
