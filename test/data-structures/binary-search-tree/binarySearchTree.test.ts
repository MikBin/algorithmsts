import { describe, it, expect } from 'vitest';
import { BinarySearchTree } from '../../../src/data-structures/binary-search-tree';

describe('BinarySearchTree', () => {
  it('should insert values correctly', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    expect(bst.traversalInOrder()).toEqual([3, 5, 7, 10, 15]);
  });

  it('should not insert duplicate values', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(10);
    expect(bst.getSize()).toBe(2);
  });

  it('should search for values', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    const node = bst.search(5);
    expect(node?.value).toBe(5);
    const nullNode = bst.search(100);
    expect(nullNode).toBe(null);
  });

  it('should delete leaf nodes', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.remove(5);
    expect(bst.traversalInOrder()).toEqual([10]);
  });

  it('should delete nodes with one child', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(3);
    bst.remove(5);
    expect(bst.traversalInOrder()).toEqual([3, 10]);
  });

  it('should delete nodes with two children', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    bst.remove(5);
    expect(bst.traversalInOrder()).toEqual([3, 7, 10, 15]);
  });

  it('should delete the root node', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.remove(10);
    expect(bst.traversalInOrder()).toEqual([5, 15]);
  });

  it('should return the correct size', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    expect(bst.getSize()).toBe(3);
    bst.remove(5);
    expect(bst.getSize()).toBe(2);
  });

  it('should check if it is empty', () => {
    const bst = new BinarySearchTree<number>();
    expect(bst.isEmpty()).toBe(true);
    bst.insert(10);
    expect(bst.isEmpty()).toBe(false);
  });

  it('should clear the tree', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.clear();
    expect(bst.isEmpty()).toBe(true);
    expect(bst.getSize()).toBe(0);
  });

  it('should find the minimum and maximum values', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    expect(bst.findMin()?.value).toBe(3);
    expect(bst.findMax()?.value).toBe(15);
  });

  it('should perform traversals correctly', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    expect(bst.traversalInOrder()).toEqual([3, 5, 7, 10, 15]);
    expect(bst.traversalPreOrder()).toEqual([10, 5, 3, 7, 15]);
    expect(bst.traversalPostOrder()).toEqual([3, 7, 5, 15, 10]);
    expect(bst.traversalLevelOrder()).toEqual([10, 5, 15, 3, 7]);
  });

  it('should be iterable', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    const values = [...bst];
    expect(values).toEqual([5, 10, 15]);
  });

  it('should handle a custom comparator', () => {
    const bst = new BinarySearchTree<string>((a, b) => a.length - b.length);
    bst.insert('apple');
    bst.insert('banana');
    bst.insert('kiwi');
    expect(bst.traversalInOrder()).toEqual(['kiwi', 'apple', 'banana']);
  });

  it('should convert the tree to a JSON string', () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    const json = bst.toJson();
    const expectedJson =
      '{"value":10,"left":{"value":5,"left":null,"right":null},"right":{"value":15,"left":null,"right":null}}';
    expect(json).toBe(expectedJson);
  });
});
