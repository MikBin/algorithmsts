/**
 * @module hash
 * Provides hash utilities for data structures.
 */
export type Hasher<K> = (key: K) => number;
export type Equality<K> = (a: K, b: K) => boolean;
export type CMSHash = (s: string, seed: number) => number;
export type HashFn = (str: string, seed: number) => number;
export type Serializer<T> = (item: T) => string;
export type HLLHash = (s: string) => number;

export const defaultHash: Hasher<any> = (k: any) => {
  const s = typeof k === "string" ? k : JSON.stringify(k);
  let h = 2166136261 >>> 0; // FNV-1a 32-bit
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
};

export const defaultEq: Equality<any> = (a, b) => a === b;

export const defaultHashSeeded: HashFn = (str: string, seed: number) => {
  let h = 2166136261 ^ seed;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

export const defaultBloomHash: HashFn = (str: string, seed: number) => {
  let h1 = 0x811c9dc5 ^ seed,
    h2 = 0x01000193 + seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 16777619);
    h2 = (h2 + ch + (h2 << 1) + (h2 << 4)) >>> 0;
  }
  return (h1 ^ (h2 >>> 1)) >>> 0;
};

export const defaultSerializer: Serializer<any> = (item: any): string => {
  if (typeof item === "string") return item;
  return JSON.stringify(item);
};

export const defaultHLLHash: HLLHash = (s: string) => {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};
