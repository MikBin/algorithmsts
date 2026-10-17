import { describe, it, expect } from "vitest";
import { MonotonicQueue } from "../../../src/data-structures/monotonic-queue/monotonicQueue";

describe("MonotonicQueue", () => {
  it("handles empty cases", () => {
    const ds = new MonotonicQueue<number>((a, b) => a - b);

    expect(ds.front()).toBeUndefined();
  });
  it("handles single elements", () => {
    const ds = new MonotonicQueue<number>((a, b) => a - b);
    ds.push(5);

    expect(ds.front()).toBe(5);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new MonotonicQueue<number>((a, b) => a - b);
    ds.push(5);
    ds.push(2);
    ds.push(7);
    ds.push(3);
    expect(ds.front()).toBe(2);
  });
});
