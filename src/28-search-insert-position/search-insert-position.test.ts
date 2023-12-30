import searchInsert from './search-insert-position';

describe('searchInsert tests', () => {
  it('should return the index of target when target is inside the array', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  it('should return the index of target in a sorted array when item is not inside the array', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  it('should work correctly when item is the only element inside the array', () => {
    expect(searchInsert([1], 1)).toBe(0);
  });

  it('should work correctly when item is not inside an array with only one element', () => {
    expect(searchInsert([5], 1)).toBe(0);
  });
});
