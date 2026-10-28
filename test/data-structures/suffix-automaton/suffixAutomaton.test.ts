import { describe, it, expect } from "vitest";
import { SuffixAutomaton } from "../../../src/data-structures/suffix-automaton/suffixAutomaton";

describe("SuffixAutomaton", () => {
  it("handles empty cases", () => {
    const ds = new SuffixAutomaton();
    ds.build("");
    expect(ds.contains("a")).toBe(false);
  });
  it("handles single elements", () => {
    const ds = new SuffixAutomaton();
    ds.build("test");
    expect(ds.contains("es")).toBe(true);
    expect(ds.contains("x")).toBe(false);
  });
  it("handles duplicates and multiple items", () => {
    const ds = new SuffixAutomaton();
    ds.build("banana");
    expect(ds.contains("ana")).toBe(true);
    expect(ds.contains("ban")).toBe(true);
  });
  it("throws on invalid input", () => {
    const ds = new SuffixAutomaton();
    expect(() => ds.build(null as unknown as string)).toThrow(TypeError);
  });
});
