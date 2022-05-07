function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length <= 1) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    const startIndex = i + 1;
    const endIndex = i + k > nums.length - 1 ? nums.length - 1 : i + k;
    if (nums.slice(startIndex, endIndex + 1).indexOf(currentElement) !== -1) {
      return true;
    }
  }

  return false;
}

export default containsNearbyDuplicate;
