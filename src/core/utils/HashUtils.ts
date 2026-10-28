/**
 * Shared hash and serialization utilities for hash-based data structures.
 *
 * Centralizes the 32-bit FNV-1a hash and the default JSON serializer that
 * were previously redeclared independently by the probabilistic and
 * hash-based modules (hyperloglog, hash-map, cuckoo-filter, count-min-sketch,
 * binary-fuse-filter, ribbon-filter, quotient-filter).
 */

/**
 * FNV-1a 32-bit hash basis (2166136261 === 0x811c9dc5).
 */
const FNV1A_32_BASIS = 2166136261;

/**
 * FNV-1a 32-bit hash prime (16777619 === 0x01000193).
 */
const FNV1A_32_PRIME = 16777619;

/**
 * Computes the 32-bit FNV-1a hash of a string, optionally seeded.
 *
 * The seed is XOR-ed into the initial hash basis, so `fnv1a32(s)` with the
 * default seed of 0 matches the unseeded FNV-1a specification exactly.
 *
 * @param str The string to hash.
 * @param seed Seed value XOR-ed into the initial basis. Defaults to 0.
 * @returns The unsigned 32-bit hash value.
 * @complexity Time: O(L) where L is the length of the string | Space: O(1)
 */
export function fnv1a32(str: string, seed = 0): number {
  let h = FNV1A_32_BASIS ^ seed;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, FNV1A_32_PRIME);
  }
  return h >>> 0;
}

/**
 * Serializes an item to a string suitable for hashing: strings pass through
 * unchanged, every other value is JSON-encoded.
 *
 * @param item The item to serialize.
 * @returns The string form of the item.
 * @complexity Time: O(L) where L is the length of the serialized output | Space: O(L)
 */
export function jsonSerializer(item: unknown): string {
  if (typeof item === "string") return item;
  return JSON.stringify(item);
}
