function longestCommonPrefix(strs: string[]): string {
  let res = '';
  const firstElement = strs[0];
  for (let i = 0; i < firstElement.length; i++) {
    for (const s of strs) {
      if (i == s.length || s[i] !== firstElement.charAt(i)) {
        return res;
      }
    }

    res += firstElement.charAt(i);
  }

  return res;
}

export default longestCommonPrefix;
