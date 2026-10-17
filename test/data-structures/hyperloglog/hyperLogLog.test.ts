import { describe, it, expect } from "vitest";
import { HyperLogLog } from "../../../src/data-structures/hyperloglog/hyperLogLog";

describe("HyperLogLog", () => {
  it("handles empty cases", () => {
    const ds = new HyperLogLog(10);
    expect(ds.count()).toBe(0);
  });
  it("handles single elements", () => {
    const ds = new HyperLogLog(10);
    ds.add("test");
    expect(ds.count()).toBeGreaterThanOrEqual(1);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new HyperLogLog(10);
    ds.add("test");
    ds.add("test");
    ds.add("other");
    expect(ds.count()).toBeGreaterThanOrEqual(2);
  });
  it("throws on invalid input", () => {
    expect(() => new HyperLogLog(3)).toThrow(Error);
  });
});
