import isPalindrome from './valid-palindrome';

describe('isPalindrome tests', () => {
  it('should return true when the input is palindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return false when the input is not palindrome', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  it('should return true when the input is an empty string', () => {
    expect(isPalindrome(' ')).toBe(true);
    expect(isPalindrome('')).toBe(true);
  });
});
