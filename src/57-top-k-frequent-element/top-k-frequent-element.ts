function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, { key: number; count: number }>();

  for (let i = 0; i < nums.length; i++) {
    const current = map.get(nums[i]);

    if (current) {
      current.count++;
    } else {
      map.set(nums[i], { key: nums[i], count: 1 });
    }
  }

  return Array.from(map.values())
    .sort((a, b) => {
      return a.count - b.count;
    })
    .map((obj) => obj.key)
    .slice(0, k);
}

console.log(topKFrequent([1, 2, 1, 2, 2, 3], 2));

export { topKFrequent };
