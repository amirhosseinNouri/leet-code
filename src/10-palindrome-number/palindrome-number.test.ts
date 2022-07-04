import isPalindrome from './palindrome-number';

describe('isPalindrome tests', () => {
  test('return false on negative numbers', () => {
    expect(isPalindrome(-120)).toBe(false);
  });

  test('return true on 121', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('returns true on zero', () => {
    expect(isPalindrome(0)).toBe(true);
  });

  test('returns false on non-palindrome number', () => {
    expect(isPalindrome(12)).toBe(false);
  });
});
