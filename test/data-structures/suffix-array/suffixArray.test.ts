import { describe, it, expect } from "vitest";
import { SuffixArray } from "../../../src/data-structures/suffix-array/suffixArray";

describe("SuffixArray", () => {
  it("handles empty cases", () => {
    const ds = new SuffixArray();
    ds.build("");
    expect(ds.search("a")).toEqual([]);
  });
  it("handles single elements", () => {
    const ds = new SuffixArray();
    ds.build("test");
    expect(ds.search("e")).toEqual([1]);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new SuffixArray();
    ds.build("banana");
    const res = ds.search("ana");
    expect(res.length).toBe(2);
    expect(res.includes(1)).toBe(true);
    expect(res.includes(3)).toBe(true);
  });
  it("throws on invalid input", () => {
    const ds = new SuffixArray();
    expect(() => ds.build(null as unknown as string)).toThrow(TypeError);
  });
});
