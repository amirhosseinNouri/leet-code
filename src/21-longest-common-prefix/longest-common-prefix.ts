function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }

  const sorted = strs.sort();
  const { 0: first, length, [length - 1]: last } = sorted;
  let res = '';
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== last[i]) {
      return res;
    }
    res += first[i];
  }

  return res;
}

export default longestCommonPrefix;
