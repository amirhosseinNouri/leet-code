/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const rotation = k % nums.length;
  const toRotate = nums.splice(-rotation);
  nums.unshift(...toRotate);
}

export default rotate;
