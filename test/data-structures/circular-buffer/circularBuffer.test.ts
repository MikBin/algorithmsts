import { describe, it, expect } from "vitest";
import { CircularBuffer } from "../../../src/data-structures/circular-buffer/circularBuffer";

describe("CircularBuffer", () => {
  it("handles empty cases", () => {
    const ds = new CircularBuffer<number>(5);
    ds as any;
    expect(ds.size).toBe(0);
    expect(ds.popFront()).toBeNull();
  });
  it("handles single elements", () => {
    const ds = new CircularBuffer<number>(5);
    ds as any;
    ds.pushBack(5);
    expect(ds.size).toBe(1);
    expect(ds.popFront()).toBe(5);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new CircularBuffer<number>(5);
    ds as any;
    ds.pushBack(5);
    ds.pushBack(5);
    ds.pushBack(10);
    expect(ds.size).toBe(3);
    expect(ds.toArray()).toEqual([5, 5, 10]);
  });
  it("throws on invalid input", () => {
    const ds = new CircularBuffer<number>(2);
    ds as any;
    ds.pushBack(1);
    ds.pushBack(2);
    expect(() => ds.pushBack(3)).toThrow(Error); // 'Buffer full'
    expect(() => new CircularBuffer<number>(0)).toThrow(Error);
  });
});
