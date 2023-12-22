import findPeaks from './find-the-peaks';

describe('findPeaks tests', () => {
  it('should return an empty array when there is no peak', () => {
    expect(findPeaks([2, 4, 4])).toEqual([]);
  });

  it('should return the correct peaks when there is a peak', () => {
    expect(findPeaks([1, 4, 3, 8, 5])).toEqual([1, 3]);
  });
});
