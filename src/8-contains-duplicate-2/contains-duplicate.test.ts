import containsNearbyDuplicate from './contains-duplicate';

describe('containsNearbyDuplicate test', () => {
  test('should return false when array has one element', () => {
    expect(containsNearbyDuplicate([1], 2)).toBe(false);
  });

  test('should return false on empty array', () => {
    expect(containsNearbyDuplicate([], 2)).toBe(false);
  });

  test('test case 1', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
  });

  test('test case 2', () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
  });

  test('test case 3', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
  });
});
