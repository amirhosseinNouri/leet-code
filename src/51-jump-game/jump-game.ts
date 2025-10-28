function canJump(nums: number[]): boolean {
  let bestIndex = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= bestIndex) {
      bestIndex = i;
    }
  }

  return bestIndex === 0;
}

export default canJump;
