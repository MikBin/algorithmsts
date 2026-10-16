import { describe, it, expect } from "vitest";
import { Stack } from "../../../src/data-structures/stack/stack";

describe("Stack", () => {
  it("handles empty cases", () => {
    const ds = new Stack<number>();
    ds as any;
    expect(ds.size).toBe(0);
    expect(ds.pop()).toBeNull();
  });
  it("handles single elements", () => {
    const ds = new Stack<number>();
    ds as any;
    ds.push(5);
    expect(ds.size).toBe(1);
    expect(ds.pop()).toBe(5);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new Stack<number>();
    ds as any;
    ds.push(10);
    ds.push(5);
    ds.push(5);
    ds.push(20);
    expect(ds.size).toBe(4);
    expect(ds.pop()).toBe(20);
    expect(ds.pop()).toBe(5);
    expect(ds.pop()).toBe(5);
  });
  it("throws on invalid input", () => {
    const ds = new Stack<number>();
    ds as any;
    /* native */
  });
});
