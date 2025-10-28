import maxProfit from './best-time-to-buy-and-sell-stock-ii';

test('Insert intervals test 1', () => {
  const input = [2, 4, 1];
  const result = maxProfit(input);
  expect(result).toBe(2);
});

test('Corner case', () => {
  const input = [1];
  const result = maxProfit(input);
  expect(result).toBe(0);
});
