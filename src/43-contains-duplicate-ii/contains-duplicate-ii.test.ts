import containsNearbyDuplicate from './contains-duplicate-ii';

describe('containsNearbyDuplicate tests', () => {
  it('should return true when there are nearby duplicates', () => {
    const arr = [1, 2, 3, 1];
    expect(containsNearbyDuplicate(arr, 3)).toBe(true);
  });

//   it('should return false when there are not nearby duplicates', () => {
//     const arr = [1, 2, 3, 1, 2, 3];
//     expect(containsNearbyDuplicate(arr, 2)).toBe(false);
//   });

//   it('should return false when there is only one element in the array', () => {
//     expect(containsNearbyDuplicate([1], 1)).toBe(false);
//   });

//   it('should return false when there are only unique element inside the array', () => {
//     expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 6], 1)).toBe(false);
//   });

//   it('should always return false when k is zero', () => {
//     expect(containsNearbyDuplicate([1, 2, 3, 1], 0)).toBe(false);
//   });
});
