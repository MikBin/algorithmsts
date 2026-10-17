import { describe, it, expect } from "vitest";
import { FenwickTree } from "../../../src/data-structures/fenwick-tree/fenwickTree";

describe("FenwickTree", () => {
  it("handles empty cases", () => {
    const ds = new FenwickTree(0);
    expect(ds.size).toBe(0);
    expect(ds.query(-1)).toBe(0);
  });

  it("handles single elements", () => {
    const ds = new FenwickTree([5]);
    expect(ds.size).toBe(1);
    expect(ds.query(0)).toBe(5);
  });

  it("handles updates and queries", () => {
    const ds = new FenwickTree([1, 2, 3, 4]);
    expect(ds.query(3)).toBe(10); // sum up to index 3 is 1+2+3+4=10
    expect(ds.rangeQuery(1, 2)).toBe(5); // index 1 and 2 is 2+3=5
    ds.update(2, 5); // add 5 to index 2
    expect(ds.query(3)).toBe(15);
  });

  it('throws on invalid input', () => { const ds = new FenwickTree(5); expect(() => ds.update(5, 1)).toThrow(/out of bounds/i); expect(() => ds.query(5)).toThrow(/out of bounds/i); expect(() => ds.rangeQuery(3, 1)).toThrow(/invalid range/i); });

  it('should create a Fenwick tree of a given size', () => {
    const tree = new FenwickTree(10);
    expect(tree.size).toBe(10);
  });

  it('should create a Fenwick tree from an array', () => {
    const tree = new FenwickTree([1, 2, 3, 4, 5]);
    expect(tree.size).toBe(5);
    expect(tree.query(4)).toBe(15);
  });

  it('should update a value and get the correct prefix sum', () => {
    const tree = new FenwickTree(10);
    tree.update(0, 1);
    tree.update(1, 2);
    tree.update(2, 3);
    expect(tree.query(2)).toBe(6);
  });

  it('should set a value and get the correct prefix sum', () => {
    const tree = new FenwickTree([1, 2, 3, 4, 5]);
    tree.set(2, 10);
    expect(tree.query(4)).toBe(22);
  });

  it('should perform a range query', () => {
    const tree = new FenwickTree([1, 2, 3, 4, 5]);
    expect(tree.rangeQuery(1, 3)).toBe(9);
  });

  it('should find the kth smallest element', () => {
    const tree = new FenwickTree([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]);
    expect(tree.findKth(3)).toBe(4);
  });

  it('should find the prefix sum', () => {
    const tree = new FenwickTree([1, 2, 3, 4, 5]);
    expect(tree.findPrefixSum(6)).toBe(2);
  });

  it('should handle an empty tree', () => {
    const tree = new FenwickTree(0);
    expect(tree.size).toBe(0);
    expect(tree.isEmpty()).toBe(true);
  });

  it('should handle a single-element tree', () => {
    const tree = new FenwickTree([10]);
    expect(tree.size).toBe(1);
    expect(tree.query(0)).toBe(10);
  });

  it('should clear the tree', () => {
    const tree = new FenwickTree([1, 2, 3]);
    tree.clear();
    expect(tree.query(2)).toBe(0);
  });

  it('should clone the tree', () => {
    const tree = new FenwickTree([1, 2, 3]);
    const clone = tree.clone();
    expect(clone.query(2)).toBe(6);
    tree.update(0, 10);
    expect(clone.query(2)).toBe(6);
  });
});
