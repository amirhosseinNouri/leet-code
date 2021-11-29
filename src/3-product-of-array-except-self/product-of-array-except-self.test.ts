import productExceptSelf, {
  calculateProduct,
} from './product-of-array-except-self';

test('Calculate product with no zero element', () => {
  expect(calculateProduct([1, 2, 3, 4])).toBe(24);
});

test('Calculate product with zero element', () =>
  expect(calculateProduct([1, 2, 0, 4])).toBe(0));

test('Array without zero element', () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

test('Array with zero element', () => {
  expect(productExceptSelf([1, 2, 0, 4])).toEqual([0, 0, 8, 0]);
});

test('Array with zero and negative elements', () => {
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
});

test('Array without zero and with negative product of all', () => {
  expect(productExceptSelf([-5, 1, -1, 3, -2])).toEqual([6, -30, 30, -10, 15]);
});
