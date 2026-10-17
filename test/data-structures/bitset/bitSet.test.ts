import { describe, it, expect } from "vitest";
import { BitSet } from "../../../src/data-structures/bitset/bitSet";

describe("BitSet", () => {
  it("handles empty cases", () => {
    const ds = new BitSet(32);
    expect(ds.size).toBe(32);
    expect(ds.count()).toBe(0);
    expect(ds.get(5)).toBe(false);
  });
  it("handles single elements", () => {
    const ds = new BitSet(32);
    ds.set(5);
    expect(ds.count()).toBe(1);
    expect(ds.get(5)).toBe(true);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new BitSet(32);
    ds.set(5);
    ds.set(5);
    ds.set(10);
    expect(ds.count()).toBe(2);
    expect(ds.get(5)).toBe(true);
    expect(ds.get(10)).toBe(true);
    expect(ds.toArray()).toEqual([5, 10]);
  });
  it("throws on invalid args", () => {
    expect(() => new BitSet(0)).toThrow(Error);

    const ds = new BitSet(32);
    const ds2 = new BitSet(64);
    expect(() => ds.union(ds2)).toThrow(Error);
  });
});
