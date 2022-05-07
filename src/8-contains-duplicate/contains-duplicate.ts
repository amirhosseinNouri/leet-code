function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];

    if (map.has(currentElement) === false) {
      map.set(currentElement, i);
      continue;
    }

    const indexDiff = i - map.get(currentElement);

    if (indexDiff <= k) {
      return true;
    }

    map.set(currentElement, i);
  }

  return false;
}

export default containsNearbyDuplicate;
