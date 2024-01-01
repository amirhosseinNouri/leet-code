import plusOne from './plus-one';

describe('plusOne tests', () => {
  it('should add one to the number in case there is no carry', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it('should add one the the number in case there is a carry', () => {
    expect(plusOne([1, 8, 9])).toEqual([1, 9, 0]);
  });

  it('should handle the case that after addition, number of digits increases', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
