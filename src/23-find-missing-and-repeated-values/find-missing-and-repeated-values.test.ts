import findMissingAndRepeatedValues from './find-missing-and-repeated-values';

describe('findMissingAndRepeatedValues tests', () => {
  // it('should return the correct index and missing number in a 2D matrix', () => {
  //   expect(
  //     findMissingAndRepeatedValues([
  //       [1, 3],
  //       [2, 2],
  //     ]),
  //   ).toEqual([2, 4]);
  // });

  it('should return the correct index and missing number in a 3D matrix', () => {
    expect(
      findMissingAndRepeatedValues([
        [9, 1, 7],
        [8, 9, 2],
        [3, 4, 6],
      ]),
    ).toEqual([9, 5]);
  });
});
