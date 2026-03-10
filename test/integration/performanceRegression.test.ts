import { describe, expect, it } from 'vitest';
import { PerformanceMonitor } from '../../src/performance';
import { PerformanceData } from '../algorithms/fixtures/PerformanceData';
import { CountingSort } from '../../src/algorithms/sorting';
import { BinarySearch } from '../../src/algorithms/searching/binary-search';
import { NgramSimilarity } from '../../src/algorithms/strings';