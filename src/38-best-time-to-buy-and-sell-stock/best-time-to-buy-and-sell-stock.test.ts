import maxProfit from './best-time-to-buy-and-sell-stock';

describe('maxProfit tests', () => {
  it('should return the max profit correctly', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
  });

  it('should return the max profit correctly', () => {
    const prices = [2, 4, 1];
    expect(maxProfit(prices)).toBe(2);
  });

  it('should return zero when no transaction is possible', () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });

  it('should return zero when there is only one price', () => {
    const prices = [0];
    expect(maxProfit(prices)).toBe(0);
  });
});
