import { describe, it, expect } from "vitest";
import {
  defaultHash,
  defaultHashSeeded,
  defaultBloomHash,
  defaultSerializer,
  defaultHLLHash,
} from "../../../src/core/utils/hash";

describe("Hash Utils", () => {
  it("defaultHash should return a number", () => {
    expect(typeof defaultHash("test")).toBe("number");
    expect(typeof defaultHash({ a: 1 })).toBe("number");
  });

  it("defaultHashSeeded should return different hashes for different seeds", () => {
    const h1 = defaultHashSeeded("test", 1);
    const h2 = defaultHashSeeded("test", 2);
    expect(h1).not.toBe(h2);
    expect(typeof h1).toBe("number");
  });

  it("defaultBloomHash should calculate hash", () => {
    expect(typeof defaultBloomHash("test", 1)).toBe("number");
  });

  it("defaultHLLHash should calculate hash", () => {
    expect(typeof defaultHLLHash("test")).toBe("number");
  });

  it("defaultSerializer should serialize items properly", () => {
    expect(defaultSerializer("test")).toBe("test");
    expect(defaultSerializer({ a: 1 })).toBe('{"a":1}');
  });
});
