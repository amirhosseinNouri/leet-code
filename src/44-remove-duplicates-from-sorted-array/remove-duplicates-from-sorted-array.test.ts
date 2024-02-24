import removeDuplicates from './remove-duplicates-from-sorted-array';

describe('removeDuplicates tests', () => {
  it('should remove duplicates and keep the order correctly', () => {
    const arr = [1, 1, 2];
    expect(removeDuplicates(arr)).toBe(2);
  });

  it('should remove duplicates correctly when there are no duplicate element in the array', () => {
    expect(removeDuplicates([1, 2, 3])).toBe(3);
  });

  it('should work correctly when there are negative numbers in the array', () => {
    expect(removeDuplicates([1, 2, 3])).toBe(3);
  });
});
