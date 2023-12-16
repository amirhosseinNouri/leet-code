import isAnagram from './valid-anagram';

describe('isAnagram tests', () => {
  it('should return true if the second parameter is anagram of the fist one', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('should return false when the second parameter is not anagram of the first one', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('should return false when the second parameter is not anagram of the first one', () => {
    expect(isAnagram('aacc', 'ccac')).toBe(false);
  });

  it('should return false when two parameters have different lengths', () => {
    expect(isAnagram('c', 'cc')).toBe(false);
  });
});
