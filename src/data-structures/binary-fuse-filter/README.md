# Binary Fuse Filter

A static, highly space-efficient probabilistic data structure for set membership queries.
It is generally smaller and faster than Bloom and Cuckoo filters but requires the full dataset to be known at construction time (immutable).

## Usage

```typescript
import { BinaryFuseFilter } from '@mikbin80/algorithmsts';

const items = ["apple", "banana", "cherry"];
const filter = new BinaryFuseFilter(items, 8); // 8-bit fingerprint

console.log(filter.mightContain("apple")); // true
console.log(filter.mightContain("grape")); // false
```

## Features
- **Static Construction**: Built once from a list of items.
- **High Efficiency**: Uses 3-way XORing with a fuse graph structure (Peeling).
- **Configurable**: Supports 8, 16, or 32-bit fingerprints.
