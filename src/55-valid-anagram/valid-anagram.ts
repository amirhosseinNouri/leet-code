function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sChars = s.split('').sort();
  const tCharts = t.split('').sort();

  for (let i = 0; i < s.length; i++) {
    if (sChars[i] !== tCharts[i]) {
      return false;
    }
  }

  return true;
}

export { isAnagram };
