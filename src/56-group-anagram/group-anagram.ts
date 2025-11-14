// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const clean = strs[i].split('').sort().join();
    const arr = map.get(clean);

    if (arr) {
      map.set(clean, [...arr, strs[i]]);
    } else {
      map.set(clean, [strs[i]]);
    }
  }

  return Array.from(map.values());
}

export { groupAnagrams };
