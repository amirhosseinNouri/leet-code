function maxProfit(prices: number[]): number {
  let max = prices[0];
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const current = prices[i];

    if (current < min) {
      maxProfit = Math.max(maxProfit, max - min);
      min = current;
      max = current;
      continue;
    }

    if (current > max) {
      max = current;
    }
  }

  maxProfit = Math.max(maxProfit, max - min);

  return maxProfit;
}

export default maxProfit;
