function removeDuplicates(nums: number[]): number {
  const seen = new Map<number, boolean>();

  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      nums[i] = Number.MAX_SAFE_INTEGER;
      counter++;
      continue;
    }
    seen.set(nums[i], true);
  }

  nums.sort((a, b) => a - b);

  return nums.length - counter;
}

export default removeDuplicates;
