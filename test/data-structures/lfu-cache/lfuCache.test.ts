import { describe, it, expect } from "vitest";
import { LFUCache } from "../../../src/data-structures/lfu-cache/lfuCache";

describe("LFUCache", () => {
  it("handles empty cases", () => {
    const ds = new LFUCache<number, string>(5);
    expect((ds as any).get(1)).toBeUndefined();
  });
  it("handles single elements", () => {
    const ds = new LFUCache<number, string>(5);
    ds.set(1, "a");

    expect((ds as any).get(1)).toBe("a");
  });
  it("handles duplicates and multiple items", () => {
    const ds = new LFUCache<number, string>(2);
    ds.set(1, "a");
    ds.set(2, "b");
    ds.get(1); // 1 is now more frequently used
    ds.set(3, "c"); // evicts 2

    expect((ds as any).get(2)).toBeUndefined();
    expect((ds as any).get(1)).toBe("a");
    expect((ds as any).get(3)).toBe("c");
  });
  it("throws on invalid input", () => {
    expect(() => new LFUCache<number, string>(0)).toThrow(Error);
  });
});
