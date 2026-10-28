import { describe, it, expect } from "vitest";
import { fnv1a32, jsonSerializer } from "../../../src/core/utils/HashUtils";

describe("fnv1a32", () => {
  it("matches the FNV-1a 32-bit reference vectors", () => {
    // Reference vectors from the FNV-1a 32-bit test suite
    expect(fnv1a32("")).toBe(0x811c9dc5);
    expect(fnv1a32("a")).toBe(0xe40c292c);
    expect(fnv1a32("b")).toBe(0xe70c2de5);
    expect(fnv1a32("foobar")).toBe(0xbf9cf968);
  });

  it("returns an unsigned 32-bit integer for every input", () => {
    const inputs = ["", "a", "hello world", "ØØØ", "𝒜".repeat(10), "x".repeat(1000)];
    for (const s of inputs) {
      const h = fnv1a32(s);
      expect(Number.isInteger(h)).toBe(true);
      expect(h).toBeGreaterThanOrEqual(0);
      expect(h).toBeLessThanOrEqual(0xffffffff);
    }
  });

  it("is deterministic for the same input and seed", () => {
    expect(fnv1a32("determinism")).toBe(fnv1a32("determinism"));
    expect(fnv1a32("determinism", 7)).toBe(fnv1a32("determinism", 7));
  });

  it("is a pure function of (input, seed): different seeds may differ, seed 0 equals unseeded", () => {
    expect(fnv1a32("seeded", 0)).toBe(fnv1a32("seeded"));
    expect(fnv1a32("seeded", 1)).not.toBe(fnv1a32("seeded", 2));
  });

  it("treats seed 0 as identity on the basis (seed 0 === unseeded for all inputs)", () => {
    for (const s of ["", "a", "abc", "zzz", "no seed"]) {
      expect(fnv1a32(s, 0)).toBe(fnv1a32(s));
    }
  });

  it("distributes distinct strings over the full 32-bit range (no trivial collisions on a sample)", () => {
    const seen = new Set<number>();
    for (let i = 0; i < 10000; i++) {
      seen.add(fnv1a32(`item-${i}`));
    }
    expect(seen.size).toBe(10000);
  });
});

describe("jsonSerializer", () => {
  it("passes strings through unchanged", () => {
    expect(jsonSerializer("")).toBe("");
    expect(jsonSerializer("hello")).toBe("hello");
    expect(jsonSerializer("123")).toBe("123");
  });

  it("JSON-encodes non-string values", () => {
    expect(jsonSerializer(42)).toBe("42");
    expect(jsonSerializer(true)).toBe("true");
    expect(jsonSerializer(null)).toBe("null");
    expect(jsonSerializer([1, 2, 3])).toBe("[1,2,3]");
    expect(jsonSerializer({ a: 1, b: "x" })).toBe('{"a":1,"b":"x"}');
  });

  it("is deterministic across calls for equal inputs", () => {
    const input = { z: [1, { y: null }], a: "s" };
    expect(jsonSerializer(input)).toBe(jsonSerializer({ z: [1, { y: null }], a: "s" }));
  });
});
