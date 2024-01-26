function isPalindrome(s: string): boolean {
  const clean = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

export default isPalindrome;
