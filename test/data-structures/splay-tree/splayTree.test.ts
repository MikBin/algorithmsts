import { describe, it, expect } from "vitest";
import { SplayTree } from "../../../src/data-structures/splay-tree/splayTree";

describe("SplayTree", () => {
  it("handles empty cases", () => {
    const ds = new SplayTree<number>((a, b) => a - b);
    expect(ds.size).toBe(0);
    expect(ds.contains(10)).toBe(false);
  });
  it("handles single elements", () => {
    const ds = new SplayTree<number>((a, b) => a - b);
    ds.add(5);
    expect(ds.size).toBe(1);
    expect(ds.contains(5)).toBe(true);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new SplayTree<number>((a, b) => a - b);
    ds.add(10);
    ds.add(5);
    ds.add(5);
    ds.add(20);
    expect(ds.size).toBe(3); // Set semantics
    expect(ds.contains(10)).toBe(true);
    expect(ds.contains(20)).toBe(true);
    expect(ds.toArray()).toEqual([5, 10, 20]);
  });
  it("throws on invalid input", () => {
    /* native */
  });
});
