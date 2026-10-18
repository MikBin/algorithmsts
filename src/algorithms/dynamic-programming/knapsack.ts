import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';

export interface KnapsackItem {
  weight: number;
  value: number;
}

export interface KnapsackInput {
  capacity: number;
  items: KnapsackItem[];
}

export interface KnapsackOutput {
  maxValue: number;
  selectedItems: KnapsackItem[];
}

/**
 * 0/1 Knapsack Algorithm
 *
 * Solves the 0/1 knapsack problem using dynamic programming.
 * Given weights and values of n items, put these items in a knapsack of capacity W
 * to get the maximum total value in the knapsack.
 *
 * @complexity Time: O(n * W) where n is the number of items and W is the capacity | Space: O(n * W) for the DP table
 */
export class Knapsack extends BaseAlgorithm<KnapsackInput, KnapsackOutput> implements IAlgorithm<KnapsackInput, KnapsackOutput> {
  constructor() {
    super('Knapsack', 'O(n * W)', 'O(n * W)');
  }

  public execute(input: KnapsackInput): KnapsackOutput {
    const { capacity, items } = input;
    const n = items.length;

    // dp[i][w] represents max value considering first i items and capacity w
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      const item = items[i - 1];
      for (let w = 0; w <= capacity; w++) {
        if (item.weight <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - item.weight] + item.value);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }

    // Reconstruct solution
    const selectedItems: KnapsackItem[] = [];
    let w = capacity;
    for (let i = n; i > 0 && w > 0; i--) {
      if (dp[i][w] !== dp[i - 1][w]) {
        // Item i was included
        selectedItems.push(items[i - 1]);
        w -= items[i - 1].weight;
      }
    }

    return {
      maxValue: dp[n][capacity],
      selectedItems: selectedItems.reverse(), // Optional: return in original order
    };
  }
}
