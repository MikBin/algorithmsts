import { describe, it, expect } from 'vitest';
import { RedBlackTree } from './redBlackTree';

describe('RedBlackTree', () => {
  it('should insert values and maintain properties', () => {
    const tree = new RedBlackTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(15);
    tree.insert(25);

    expect(tree.getSize()).toBe(5);
    expect(tree.isRedBlackTree()).toBe(true);
    expect(tree.traversalInOrder()).toEqual([10, 15, 20, 25, 30]);
  });

  it('should handle inserting duplicate values', () => {
    const tree = new RedBlackTree<number>();
    tree.insert(10);
    tree.insert(10);
    expect(tree.getSize()).toBe(2);
    expect(tree.isRedBlackTree()).toBe(true);
  });

  it('should delete values and maintain properties', () => {
    const tree = new RedBlackTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(15);
    tree.insert(25);

    tree.delete(20);
    expect(tree.getSize()).toBe(4);
    expect(tree.isRedBlackTree()).toBe(true);
    expect(tree.traversalInOrder()).toEqual([10, 15, 25, 30]);

    tree.delete(10);
    expect(tree.getSize()).toBe(3);
    expect(tree.isRedBlackTree()).toBe(true);
    expect(tree.traversalInOrder()).toEqual([15, 25, 30]);
  });

  it('should handle deleting a non-existent value', () => {
    const tree = new RedBlackTree<number>();
    tree.insert(10);
    const result = tree.delete(100);
    expect(result).toBe(false);
    expect(tree.getSize()).toBe(1);
  });

  it('should handle deleting from an empty tree', () => {
    const tree = new RedBlackTree<number>();
    const result = tree.delete(100);
    expect(result).toBe(false);
  });

  it('should search for values', () => {
    const tree = new RedBlackTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);

    expect(tree.search(20)).not.toBeNull();
    expect(tree.search(40)).toBeNull();
  });

  it('should handle searching in an empty tree', () => {
    const tree = new RedBlackTree<number>();
    expect(tree.search(10)).toBeNull();
  });

  it('should find min and max values', () => {
    const tree = new RedBlackTree<number>();
    tree.insert(10);
    tree.insert(20);
    tree.insert(30);
    tree.insert(5);

    expect(tree.findMin()).toBe(5);
    expect(tree.findMax()).toBe(30);
  });

  it('should handle find min and max in an empty tree', () => {
    const tree = new RedBlackTree<number>();
    expect(tree.findMin()).toBeNull();
    expect(tree.findMax()).toBeNull();
  });

  it('should perform traversals', () => {
    const tree = new RedBlackTree<number>();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(3);
    tree.insert(7);
    tree.insert(12);
    tree.insert(18);

    expect(tree.traversalInOrder()).toEqual([3, 5, 7, 10, 12, 15, 18]);
    expect(tree.traversalPreOrder()).toEqual([10, 5, 3, 7, 15, 12, 18]);
    expect(tree.traversalPostOrder()).toEqual([3, 7, 5, 12, 18, 15, 10]);
    expect(tree.traversalLevelOrder()).toEqual([10, 5, 15, 3, 7, 12, 18]);
  });

  it('should handle custom comparators', () => {
    type Person = { name: string; age: number };
    const tree = new RedBlackTree<Person>((a, b) => a.age - b.age);

    tree.insert({ name: 'Alice', age: 30 });
    tree.insert({ name: 'Bob', age: 20 });
    tree.insert({ name: 'Charlie', age: 25 });

    expect(tree.findMin()?.name).toBe('Bob');
    expect(tree.findMax()?.name).toBe('Alice');
  });
});
