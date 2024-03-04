import summaryRanges from './summary-ranges';

describe('summaryRanges tests', () => {
  it('should return the summary ranges correctly', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7']);
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual([
      '0',
      '2->4',
      '6',
      '8->9',
    ]);
  });

  it('should return an empty array when the parameter is also an empty array', () => {
    expect(summaryRanges([])).toEqual([]);
  });
});
