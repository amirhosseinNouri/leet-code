import romanToInt from './roman-to-integer';

describe('romanToInt tests', () => {
  it('should return the correct number for a roman input', () => {
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('LVIII')).toBe(58);
  });
});
