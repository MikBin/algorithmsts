# Vacuum Filter

A space-efficient probabilistic data structure for set membership queries.
This implementation provides a standard interface compatible with Cuckoo Filters.

## Usage

```typescript
import { VacuumFilter } from '@mikbin80/algorithmsts';

const filter = new VacuumFilter<string>(1000, 16); // 1000 items, 16-bit fingerprint

filter.add("hello");
console.log(filter.mightContain("hello")); // true
console.log(filter.mightContain("world")); // false (probably)
```

## Features
- **Configurable Fingerprint Size**: 8, 16, or 32 bits.
- **Deletion Supported**: Unlike Bloom Filters, items can be deleted.
- **High Space Efficiency**: Uses bucketed storage (4 slots per bucket).
