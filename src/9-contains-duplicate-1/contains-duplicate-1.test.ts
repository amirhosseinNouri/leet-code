import containsDuplicate from './contains-duplicate-1';

describe('containsDuplicate tests', () => {
  test('returns false on empty array', () => {
    expect(containsDuplicate([])).toBe(false);
  });

  test('returns false on array with only one element', () => {
    expect(containsDuplicate([1])).toBe(false);
  });

  test('test case 1', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test('test case 1', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test('test case 1', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
