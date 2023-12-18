import isPalindrome from './palindrome-number';

describe('isPalindrome tests', () => {
  it('should return true for a palindrome number', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it('should return false for a non-palindrome number', () => {
    expect(isPalindrome(123)).toBe(false);
  });

  it('should return false for negative numbers', () => {
    expect(isPalindrome(-121)).toBe(false);
  });
});
