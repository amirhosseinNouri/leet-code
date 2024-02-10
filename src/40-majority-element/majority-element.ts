function majorityElement(nums: number[]): number {
  const target = Math.floor(nums.length / 2);

  const seen: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const prevSeen = seen.get(currentNumber) || 0;
    const newSeen = prevSeen + 1;

    if (newSeen > target) {
      return currentNumber;
    }

    seen.set(currentNumber, newSeen);
  }

  return 0;
}

export default majorityElement;
