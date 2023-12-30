function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const midElement = nums[mid];

    if (midElement === target) {
      return mid;
    }

    if (midElement < target) {
      left++;
    } else {
      right--;
    }
  }

  return left;
}

export default searchInsert;
