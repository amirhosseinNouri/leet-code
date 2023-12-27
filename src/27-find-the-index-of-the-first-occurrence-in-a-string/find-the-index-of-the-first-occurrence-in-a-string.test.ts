import indexofNeedle from './find-the-index-of-the-first-occurrence-in-a-string';

describe('indexofNeedle test', () => {
  it('should return the first index of occurrence', () => {
    expect(indexofNeedle('sadbutsad', 'sad')).toBe(0);
  });

  it('should return -1 when the string is not inside the haystack', () => {
    expect(indexofNeedle('leetcode', 'test')).toBe(-1);
  });
});
