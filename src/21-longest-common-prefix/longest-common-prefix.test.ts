import longestCommonPrefix from './longest-common-prefix';

describe('Longest common prefix tests', () => {
  test('returns the only element when there is only one element in the array', () =>
    expect(longestCommonPrefix(['test'])).toBe('test'));

  test('return empty string when there is no common string', () =>
    expect(longestCommonPrefix(['dog', 'flow', 'flight'])).toBe(''));

  test('return the common string when there is a common', () =>
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl'));
});
