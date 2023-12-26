function removeElement(nums: number[], val: number): number {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      counter++;
      nums[i] = Number.MAX_SAFE_INTEGER;
    }
  }

  nums.sort();

  return nums.length - counter;
}

export default removeElement;
