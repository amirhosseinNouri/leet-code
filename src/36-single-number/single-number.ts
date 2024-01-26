function singleNumber(nums: number[]): number {
  const seen = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (seen.has(current)) {
      seen.delete(current);
    } else {
      seen.add(current);
    }
  }

  return [...seen][0];
}

export default singleNumber;
