import twosum from './two-sum';

describe('twoSum tests', () => {
  it('should return two indices correctly', () => {
    expect(twosum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
