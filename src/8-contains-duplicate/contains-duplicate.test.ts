import containsNearbyDuplicate from './contains-duplicate';

describe('containsNearbyDuplicate test', () => {
  test('should return false when array has one element', () => {
    expect(containsNearbyDuplicate([1], 2)).toBe(false);
  });
});
