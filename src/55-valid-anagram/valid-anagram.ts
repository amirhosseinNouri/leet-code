function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map<string, number>();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of t) {
    const currentCount = map.get(char);
    if (!currentCount) {
      return false;
    }
    map.set(char, currentCount - 1);
  }

  return true;
}

export { isAnagram };
