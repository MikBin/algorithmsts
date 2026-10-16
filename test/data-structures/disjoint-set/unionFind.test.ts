import { describe, it, expect } from "vitest";
import { UnionFind } from "../../../src/data-structures/disjoint-set/unionFind";

describe("UnionFind", () => {
  it("handles empty cases", () => {
    const ds = new UnionFind(10);
    ds as any;

    expect(ds.setCount()).toBe(10);
    expect(ds.find(1)).toBe(1);
  });
  it("handles single elements", () => {
    const ds = new UnionFind(10);
    ds as any;
    ds.union(1, 2);
    expect(ds.setCount()).toBe(9);
    expect(ds.connected(1, 2)).toBe(true);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new UnionFind(10);
    ds as any;
    ds.union(1, 2);
    ds.union(2, 3);
    ds.union(1, 3);
    expect(ds.setCount()).toBe(8);
    expect(ds.connected(1, 3)).toBe(true);
  });
  it("throws on invalid input", () => {
    expect(() => new UnionFind(0)).toThrow(Error);

    const ds = new UnionFind(10);
    ds as any;
  });
});
