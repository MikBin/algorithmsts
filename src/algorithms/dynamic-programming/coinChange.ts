import { BaseAlgorithm } from '../../core/abstracts/BaseAlgorithm';
import { IAlgorithm } from '../../core/interfaces/IAlgorithm';

export interface CoinChangeInput {
  coins: number[];
  amount: number;
}

export interface CoinChangeOutput {
  minCoins: number;
  combinations: number; // Number of ways to make the change
}

/**
 * Coin Change Algorithm
 *
 * Solves the coin change problem. Finds the minimum number of coins to make a given amount,
 * and the total number of combinations that make up that amount.
 *
 * @complexity Time: O(n * amount) where n is the number of coins | Space: O(amount) for DP arrays
 */
export class CoinChange extends BaseAlgorithm<CoinChangeInput, CoinChangeOutput> implements IAlgorithm<CoinChangeInput, CoinChangeOutput> {
  constructor() {
    super('CoinChange', 'O(n * amount)', 'O(amount)');
  }

  public execute(input: CoinChangeInput): CoinChangeOutput {
    const { coins, amount } = input;

    // dpMin[i] = min coins to make amount i
    const dpMin = new Array(amount + 1).fill(Infinity);
    dpMin[0] = 0;

    // dpWays[i] = number of combinations to make amount i
    const dpWays = new Array(amount + 1).fill(0);
    dpWays[0] = 1;

    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        // Update min coins
        if (dpMin[i - coin] !== Infinity) {
          dpMin[i] = Math.min(dpMin[i], dpMin[i - coin] + 1);
        }

        // Update ways
        dpWays[i] += dpWays[i - coin];
      }
    }

    return {
      minCoins: dpMin[amount] === Infinity ? -1 : dpMin[amount],
      combinations: dpWays[amount],
    };
  }
}
