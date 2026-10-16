import { describe, it, expect } from "vitest";
import { Deque } from "../../../src/data-structures/deque/deque";

describe("Deque", () => {
  it("handles empty cases", () => {
    const ds = new Deque<number>();
    ds as any;
    expect(ds.size).toBe(0);
    expect(ds.removeFirst()).toBeNull();
  });
  it("handles single elements", () => {
    const ds = new Deque<number>();
    ds as any;
    ds.addLast(5);
    expect(ds.size).toBe(1);
    expect(ds.removeFirst()).toBe(5);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new Deque<number>();
    ds as any;
    ds.addLast(5);
    ds.addFirst(10);
    ds.addLast(15);
    expect(ds.size).toBe(3);
    expect(ds.removeFirst()).toBe(10);
    expect(ds.removeFirst()).toBe(5);
    expect(ds.removeFirst()).toBe(15);
  });
});
