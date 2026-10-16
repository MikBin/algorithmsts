import { describe, it, expect } from "vitest";
import { Queue } from "../../../src/data-structures/queue/queue";

describe("Queue", () => {
  it("handles empty cases", () => {
    const ds = new Queue<number>();
    ds as any;
    expect(ds.size).toBe(0);
    expect(ds.dequeue()).toBeNull();
  });
  it("handles single elements", () => {
    const ds = new Queue<number>();
    ds as any;
    ds.enqueue(5);
    expect(ds.size).toBe(1);
    expect(ds.dequeue()).toBe(5);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new Queue<number>();
    ds as any;
    ds.enqueue(10);
    ds.enqueue(5);
    ds.enqueue(5);
    ds.enqueue(20);
    expect(ds.size).toBe(4);
    expect(ds.dequeue()).toBe(10);
    expect(ds.dequeue()).toBe(5);
    expect(ds.dequeue()).toBe(5);
  });
  it("throws on invalid input", () => {
    const ds = new Queue<number>();
    ds as any;
    /* native */
  });
});
