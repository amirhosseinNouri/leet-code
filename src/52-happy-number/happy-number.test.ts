import { isHappy } from './happy-number';

test('identifies happy numbers correctly', () => {
  expect(isHappy(19)).toBe(true);
  expect(isHappy(13)).toBe(true);
});

test('identifies unhappy numbers correctly', () => {
  expect(isHappy(2)).toBe(false);
});
