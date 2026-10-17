import { describe, it, expect } from "vitest";
import { MonotonicStack } from "../../../src/data-structures/monotonic-stack/monotonicStack";

describe("MonotonicStack", () => {
  it("handles empty cases", () => {
    const ds = new MonotonicStack<number>((a, b) => a - b);
    expect(ds.isEmpty()).toBe(true);
  });
  it("handles single elements", () => {
    const ds = new MonotonicStack<number>((a, b) => a - b);
    ds.push(5);
    expect(ds.top()).toBe(5);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new MonotonicStack<number>((a, b) => a - b);
    ds.push(5);
    ds.push(7);
    ds.push(2);
    ds.push(3);
    expect(ds.top()).toBe(3);
  });
});
