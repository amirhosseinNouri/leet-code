function removeDuplicates(nums: number[]): number {
  const seen = new Map<number, number>();

  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    const repeats = seen.get(nums[i]) || 0;

    if (repeats === 2) {
      nums[i] = Number.MAX_SAFE_INTEGER;
      counter++;
      continue;
    }
    seen.set(nums[i], repeats + 1);
  }

  nums.sort((a, b) => a - b);

  return nums.length - counter;
}

export default removeDuplicates;
