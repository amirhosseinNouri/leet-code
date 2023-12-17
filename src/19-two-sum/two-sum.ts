function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const other = map.get(target - nums[i]);
    if (other !== undefined) {
      return [other, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

export default twoSum;
