import convertToTitle from './excel-sheet-column-title';

describe('convertToTitle tests', () => {
  it('should convert number to column correctly', () => {
    expect(convertToTitle(1)).toBe('A');
    expect(convertToTitle(2)).toBe('B');
    expect(convertToTitle(28)).toBe('AB');
    expect(convertToTitle(701)).toBe('ZY');
  });
});
