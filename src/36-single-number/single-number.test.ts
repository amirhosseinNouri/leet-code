import singleNumber from './single-number';

describe('singleNumber tests', () => {
  it('should return the single number correctly', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  it('should return the single number correctly when there is only one number in the array', () => {
    expect(singleNumber([1])).toBe(1);
  });
});
