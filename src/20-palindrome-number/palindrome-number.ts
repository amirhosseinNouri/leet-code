function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const arr = x.toString().split('');
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false;
    }
  }

  return true;
}

export default isPalindrome;
