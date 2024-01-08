import merge from './merge-sorted-array';

describe('merge tests', () => {
  it('should merge two arrays correctly', () => {
    const num1 = [1, 2, 3, 0, 0, 0];
    merge(num1, 3, [2, 5, 6], 3);
    expect(num1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('should merge two arrays correctly when there are negative numbers in arrays', () => {
    const num1 = [-10, -1, 0, 1];
    const num2 = [-15, 2, 3];
    const expected = [-15, -10, -1, 0, 2, 3];
    merge(num1, 3, num2, 3);
    expect(num1).toEqual(expected);
  });

  it('should merge the two arrays correctly when m is 1', () => {
    const num1 = [1];
    merge(num1, 1, [], 0);
    expect(num1).toEqual([1]);
  });

  it('should merge the two arrays correctly when m is 0', () => {
    const num1 = [0];
    merge(num1, 0, [1], 1);
    expect(num1).toEqual([1]);
  });
});
