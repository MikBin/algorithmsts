import { describe, expect, it } from 'vitest';
import {
  CountingSort,
  BinarySearch,
  LinkedList,
  Trie,
  NgramSimilarity,
  SparseTable
} from '../../src/algorithmsts';

/**
 * Real-World Scenarios End-to-End Tests
 *
 * Tests that simulate real-world usage scenarios to ensure
 * the library works correctly in practical applications.
 */
describe('Real-World Scenarios E2E Tests', () => {
  describe('E-commerce Product Search', () => {
    it('should handle product inventory sorting and search', () => {
      // Simulate sorting products by price
      const products = [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Mouse', price: 25 },
        { id: 3, name: 'Keyboard', price: 75 },
        { id: 4, name: 'Monitor', price: 300 }
      ];

      const prices = products.map(p => p.price);
      const countingSort = new CountingSort();
      const sortedPrices = countingSort.execute({ array: [...prices] });

      expect(sortedPrices.result).toEqual([25, 75, 300, 1200]);

      // Search for a specific price
      const binarySearch = new BinarySearch<number>();
      const searchResult = binarySearch.execute({
        array: sortedPrices.result,
        value: 300,
        compareFn: (a, b) => a - b
      });

      expect(searchResult.result).toBe(2); // 300 is at index 2 in sorted array
    });

    it('should handle product name search with fuzzy matching', () => {
      const productNames = ['Wireless Mouse', 'Gaming Keyboard', 'USB Cable', 'Bluetooth Speaker'];

      // Create a trie for product names
      const trie = new Trie<string>();
      productNames.forEach((name, index) => {
        trie.add(name, index);
      });

      // Test exact matches
      expect(trie.contains('Wireless Mouse')).toBe(true);
      expect(trie.contains('USB Cable')).toBe(true);

      // Test fuzzy matching with string similarity
      const ngramSimilarity = new NgramSimilarity();
      const similarity = ngramSimilarity.execute({
        str1: 'Wireless Mouse',
        str2: 'Wireless mouse' // Case difference
      });

      expect(similarity.result).toBeGreaterThan(0.8); // Should be very similar
    });
  });

  describe('Financial Data Analysis', () => {
    it('should handle stock price analysis with range queries', () => {
      // Simulate stock prices over time
      const stockPrices = [100, 105, 102, 108, 115, 112, 118, 120, 117, 122];

      // Create sparse table for range queries
      const sparseTable = new SparseTable(stockPrices, (a, b) => Math.min(a, b));

      // Query minimum price in different ranges
      const minPriceRange1 = sparseTable.query(0, 4); // First 5 days
      const minPriceRange2 = sparseTable.query(5, 9); // Last 5 days

      expect(minPriceRange1).toBe(100); // Minimum in first range
      expect(minPriceRange2).toBe(112); // Minimum in second range
    });

    it('should handle transaction sorting by amount', () => {
      const transactions = [
        { id: 'TXN001', amount: 150.50 },
        { id: 'TXN002', amount: 25.00 },
        { id: 'TXN003', amount: 75.25 },
        { id: 'TXN004', amount: 300.00 }
      ];

      const amounts = transactions.map(t => Math.floor(t.amount)); // Convert to integers for counting sort
      const countingSort = new CountingSort();
      const sortedAmounts = countingSort.execute({ array: amounts });

      expect(sortedAmounts.result).toEqual([25, 75, 150, 300]);
    });
  });

  describe('Text Processing Application', () => {
    it('should handle dictionary word storage and retrieval', () => {
      const words = ['apple', 'application', 'apply', 'banana', 'band', 'bandwidth'];

      // Store words in a trie
      const trie = new Trie<number>();
      words.forEach((word, index) => {
        trie.add(word, index);
      });

      // Test prefix searches
      expect(trie.contains('app')).toBe(true); // Prefix exists
      expect(trie.contains('apple')).toBe(true); // Full word exists
      expect(trie.contains('band')).toBe(true); // Another prefix

      // Test non-existent words
      expect(trie.contains('zebra')).toBe(false);
    });

    it('should handle text similarity for spell checking', () => {
      const dictionary = ['hello', 'world', 'algorithm', 'typescript'];
      const misspelled = 'helo'; // Missing 'l'

      const ngramSimilarity = new NgramSimilarity();
      let bestMatch = '';
      let bestSimilarity = 0;

      // Find best match
      for (const word of dictionary) {
        const similarity = ngramSimilarity.execute({
          str1: misspelled,
          str2: word
        });

        if (similarity.result > bestSimilarity) {
          bestSimilarity = similarity.result;
          bestMatch = word;
        }
      }

      expect(bestMatch).toBe('hello');
      expect(bestSimilarity).toBeGreaterThan(0.5); // Should be reasonably similar
    });
  });

  describe('Social Network Analysis', () => {
    it('should handle friend connection management', () => {
      // Simulate user connections using linked list
      const userConnections = new LinkedList<number>();

      // Add friend IDs
      [101, 102, 103, 104, 105].forEach(id => userConnections.add(id));

      expect(userConnections.size).toBe(5);

      // Convert to array for processing
      const connections = userConnections.toArray();
      expect(connections).toEqual([101, 102, 103, 104, 105]);

      // Sort connections by ID
      const countingSort = new CountingSort();
      const sortedConnections = countingSort.execute({ array: connections });

      expect(sortedConnections.result).toEqual([101, 102, 103, 104, 105]); // Already sorted
    });

    it('should handle user search in connection lists', () => {
      const connections = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];

      // Search for specific user
      const binarySearch = new BinarySearch<number>();
      const searchResult = binarySearch.execute({
        array: connections,
        value: 105,
        compareFn: (a, b) => a - b
      });

      expect(searchResult.result).toBe(4); // 105 is at index 4
    });
  });

  describe('Database Index Simulation', () => {
    it('should handle database-like indexing and searching', () => {
      // Simulate database records with IDs
      const records = [
        { id: 1001, name: 'Alice' },
        { id: 1002, name: 'Bob' },
        { id: 1003, name: 'Charlie' },
        { id: 1004, name: 'Diana' },
        { id: 1005, name: 'Eve' }
      ];

      const ids = records.map(r => r.id);

      // Create sorted index
      const countingSort = new CountingSort();
      const sortedIds = countingSort.execute({ array: [...ids] });

      expect(sortedIds.result).toEqual([1001, 1002, 1003, 1004, 1005]);

      // Search for record by ID
      const binarySearch = new BinarySearch<number>();
      const searchResult = binarySearch.execute({
        array: sortedIds.result,
        value: 1003,
        compareFn: (a, b) => a - b
      });

      expect(searchResult.result).toBe(2); // 1003 is at index 2
    });

    it('should handle range queries on indexed data', () => {
      const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

      // Create sparse table for range queries
      const sparseTable = new SparseTable(values, (a, b) => Math.min(a, b));

      // Query minimum in range [2, 7] (values 30, 40, 50, 60, 70, 80)
      const minInRange = sparseTable.query(2, 7);
      expect(minInRange).toBe(30);

      // Query minimum in range [5, 9] (values 60, 70, 80, 90, 100)
      const minInRange2 = sparseTable.query(5, 9);
      expect(minInRange2).toBe(60);
    });
  });

  describe('Game Development Scenarios', () => {
    it('should handle leaderboard score sorting', () => {
      const scores = [1250, 980, 1540, 780, 1120, 1680, 920];

      const countingSort = new CountingSort();
      const sortedScores = countingSort.execute({ array: [...scores] });

      expect(sortedScores.result).toEqual([780, 920, 980, 1120, 1250, 1540, 1680]);
    });

    it('should handle player ranking search', () => {
      const rankings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Player ranks

      const binarySearch = new BinarySearch<number>();
      const playerRank = binarySearch.execute({
        array: rankings,
        value: 7,
        compareFn: (a, b) => a - b
      });

      expect(playerRank.result).toBe(6); // Rank 7 is at index 6 (0-based)
    });
  });

  describe('Scientific Computing', () => {
    it('should handle experimental data analysis', () => {
      // Simulate experimental measurements
      const measurements = [15.2, 14.8, 15.5, 14.9, 15.1, 15.3, 14.7, 15.0];

      // Convert to integers for sorting (multiply by 10)
      const intMeasurements = measurements.map(m => Math.floor(m * 10));
      const countingSort = new CountingSort();
      const sortedMeasurements = countingSort.execute({ array: intMeasurements });

      expect(sortedMeasurements.result).toEqual([147, 148, 149, 150, 151, 152, 153, 155]);
    });

    it('should handle data range queries', () => {
      const dataPoints = [12, 15, 18, 21, 24, 27, 30, 33, 36, 39];

      const sparseTable = new SparseTable(dataPoints, (a, b) => Math.max(a, b));

      // Find maximum in range [3, 7] (values 21, 24, 27, 30, 33)
      const maxInRange = sparseTable.query(3, 7);
      expect(maxInRange).toBe(33);
    });
  });

  describe('IoT Data Processing', () => {
    it('should handle sensor data streams', () => {
      // Simulate temperature sensor readings
      const temperatures = [22.5, 23.1, 22.8, 23.5, 22.2, 23.8, 22.9, 23.3];

      // Convert to integers for processing
      const intTemps = temperatures.map(t => Math.floor(t * 10));
      const countingSort = new CountingSort();
      const sortedTemps = countingSort.execute({ array: intTemps });

      expect(sortedTemps.result).toEqual([222, 225, 228, 229, 231, 233, 235, 238]);
    });

    it('should handle device ID lookups', () => {
      const deviceIds = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008];

      const binarySearch = new BinarySearch<number>();
      const deviceIndex = binarySearch.execute({
        array: deviceIds,
        value: 1005,
        compareFn: (a, b) => a - b
      });

      expect(deviceIndex.result).toBe(4); // Device 1005 is at index 4
    });
  });
});
