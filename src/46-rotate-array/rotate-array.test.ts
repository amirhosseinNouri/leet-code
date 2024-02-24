import rotate from './rotate-array';

describe('rotate tests', () => {
  it('should rotate the array correctly', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(rotate(arr, 1));
    expect(arr).toEqual([7, 1, 2, 3, 4, 5, 6]);
  });

  it('should rotate the array correctly when k is equal to the length of the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(rotate(arr, 7));
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should rotate the array correctly when k is greater than the length of the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(rotate(arr, 8));
    expect(arr).toEqual([7, 1, 2, 3, 4, 5, 6]);
  });

  it('should work correctly when k is zero (no rotation)', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(rotate(arr, 0));
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should work correctly when there is only one element in the array', () => {
    const arr = [1];
    expect(rotate(arr, 100));
    expect(arr).toEqual([1]);
  });
});
