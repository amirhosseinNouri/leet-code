function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let copy = x;
  let reversed = 0;

  while (copy > 0) {
    reversed = reversed * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }

  return reversed === x;
}
export default isPalindrome;
