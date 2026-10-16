import { describe, it, expect } from "vitest";
import { SparseSet } from "../../../src/data-structures/sparse-set/sparseSet";

describe("SparseSet", () => {
  it("handles empty cases", () => {
    const ds = new SparseSet(100);
    ds as any;
    expect(ds.size).toBe(0);
    expect(ds.has(10)).toBe(false);
  });
  it("handles single elements", () => {
    const ds = new SparseSet(100);
    ds as any;
    ds.add(5);
    expect(ds.size).toBe(1);
    expect(ds.has(5)).toBe(true);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new SparseSet(100);
    ds as any;
    ds.add(10);
    ds.add(5);
    expect(ds.add(5)).toBe(false);
    expect(ds.size).toBe(2);
    expect(ds.has(10)).toBe(true);
    expect(ds.has(5)).toBe(true);
  });
  it("throws on invalid input", () => {
    expect(() => new SparseSet(-5)).toThrow(Error);
  });
});
