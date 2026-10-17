import { describe, it, expect } from "vitest";
import { CountMinSketch } from "../../../src/data-structures/count-min-sketch/countMinSketch";

describe("CountMinSketch", () => {
  it("handles empty cases", () => {
    const ds = new CountMinSketch(100, 10);
    expect(ds.estimate("test")).toBe(0);
  });
  it("handles single elements", () => {
    const ds = new CountMinSketch(100, 10);
    ds.add("test");
    expect(ds.estimate("test")).toBeGreaterThanOrEqual(1);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new CountMinSketch(100, 10);
    ds.add("test", 5);
    ds.add("other", 2);
    expect(ds.estimate("test")).toBeGreaterThanOrEqual(5);
    expect(ds.estimate("other")).toBeGreaterThanOrEqual(2);
  });
  it("throws on invalid input", () => {
    expect(() => new CountMinSketch(0, 10)).toThrow(Error);
    expect(() => new CountMinSketch(100, 0)).toThrow(Error);
  });
});
