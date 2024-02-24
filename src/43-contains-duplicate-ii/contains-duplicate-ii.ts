function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const prevIndex = map.get(nums[i]);

    if (prevIndex !== undefined && Math.abs(i - prevIndex) <= k) {
      return true;
    }

    map.set(nums[i], i);
  }

  return false;
}

export default containsNearbyDuplicate;
