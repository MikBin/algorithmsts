import { describe, it, expect } from "vitest";
import { Treap } from "../../../src/data-structures/treap/treap";

describe("Treap", () => {
  it("handles empty cases", () => {
    const ds = new Treap<number>((a, b) => a - b);
    expect(ds.size).toBe(0);
    expect(ds.contains(10)).toBe(false);
  });
  it("handles single elements", () => {
    const ds = new Treap<number>((a, b) => a - b);
    ds.add(5);
    expect(ds.size).toBe(1);
    expect(ds.contains(5)).toBe(true);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new Treap<number>((a, b) => a - b);
    ds.add(10);
    ds.add(5);
    ds.add(5);
    ds.add(20);
    expect(ds.size).toBe(4);
    expect(ds.contains(10)).toBe(true);
    expect(ds.toArray()).toEqual([5, 5, 10, 20]);
  });
});
