import descendingOrder from './descending-order';

describe('descendingOrder tests', () => {
  test('test case 1', () => {
    expect(descendingOrder(42145)).toBe(54421);
  });
});
