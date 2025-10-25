import { describe, expect, it } from 'vitest';
import { BTree } from '../../../src/data-structures/b-tree';

describe('BTree', () => {
  it('should be empty initially', () => {
    const tree = new BTree<number>(3);
    expect(tree.isEmpty()).toBe(true);
    expect(tree.size).toBe(0);
  });

  it('should add elements to the tree', () => {
    const tree = new BTree<number>(3);
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);
    expect(tree.size).toBe(3);
    expect(tree.toArray()).toEqual([5, 10, 20]);
  });

  it('should convert to an array', () => {
    const tree = new BTree<number>(3);
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);
    expect(tree.toArray()).toEqual([5, 10, 20]);
  });

  it('should be iterable', () => {
    const tree = new BTree<number>(3);
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);
    const arr: number[] = [];
    const iterator = tree.iterator();
    while (iterator.hasNext()) {
      arr.push(iterator.next());
    }
    expect(arr).toEqual([5, 10, 20]);
  });

  it('should clear the tree', () => {
    const tree = new BTree<number>(3);
    tree.insert(10);
    tree.insert(20);
    tree.insert(5);
    tree.clear();
    expect(tree.isEmpty()).toBe(true);
    expect(tree.size).toBe(0);
    expect(tree.toArray()).toEqual([]);
  });

  describe('search', () => {
    it('should find an existing key', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      expect(tree.search(20)).not.toBeNull();
    });

    it('should not find a non-existing key', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      expect(tree.search(15)).toBeNull();
    });
  });

  describe('contains', () => {
    it('should return true for an existing key', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      expect(tree.contains(20)).toBe(true);
    });

    it('should return false for a non-existing key', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      expect(tree.contains(15)).toBe(false);
    });
  });

  describe('findMin', () => {
    it('should find the minimum key', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      expect(tree.findMin()).toBe(5);
    });
  });

  describe('findMax', () => {
    it('should find the maximum key', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      expect(tree.findMax()).toBe(20);
    });
  });

  describe('getHeight', () => {
    it('should return the correct height', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      tree.insert(15);
      tree.insert(25);
      tree.insert(30);
      expect(tree.getHeight()).toBe(1);
    });
  });

  describe('rangeQuery', () => {
    it('should return the keys within the given range', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      tree.insert(15);
      tree.insert(25);
      tree.insert(30);
      expect(tree.rangeQuery(10, 25)).toEqual([10, 15, 20, 25]);
    });
  });

  describe('delete', () => {
    it('should correctly delete a key after merging with the previous sibling', () => {
      const tree = new BTree<number>(3);
      [10, 20, 30, 40, 50, 60, 70, 80, 90].forEach(k => tree.insert(k));
      tree.delete(70);
      tree.delete(80);
      tree.delete(60);
      expect(tree.toArray()).toEqual([10, 20, 30, 40, 50, 90]);
    });

    it('should delete a key from a leaf node', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      tree.delete(5);
      expect(tree.toArray()).toEqual([10, 20]);
    });

    it('should delete a key from an internal node', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      tree.insert(15);
      tree.insert(25);
      tree.insert(30);
      tree.delete(20);
      expect(tree.toArray()).toEqual([5, 10, 15, 25, 30]);
    });

    it('should handle underflow by borrowing from a sibling', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      tree.insert(15);
      tree.insert(25);
      tree.insert(30);
      tree.delete(5);
      tree.delete(10);
      expect(tree.toArray()).toEqual([15, 20, 25, 30]);
    });

    it('should handle underflow by merging nodes', () => {
      const tree = new BTree<number>(3);
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      tree.insert(15);
      tree.delete(10);
      tree.delete(15);
      expect(tree.toArray()).toEqual([5, 20]);
    });
  });
});
