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
});
