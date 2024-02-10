import majorityElement from './majority-element';

describe('majorityElement tests', () => {
  it('should return the majority element correctly', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it('should return the majority element correctly when there is only one element in the array', () => {
    expect(majorityElement([1])).toBe(1);
  });
});
