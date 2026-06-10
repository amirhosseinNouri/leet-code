/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function maxProductSubArray(numbers: number[]): number {
  // [1,2,-3,5,1]

  const n = numbers.length;
  let max = Number.NEGATIVE_INFINITY;
  let pre = 1;
  let suff = 1;

  for (let i = 0; i < n; i++) {
    pre = pre === 0 ? numbers[i] : pre * numbers[i];
    suff = suff === 0 ? numbers[n - i - 1] : suff * numbers[n - i - 1];

    max = Math.max(max, Math.max(pre, suff));
  }

  return max;
}

console.log(maxProductSubArray([1, 2, -3, 5, 1]));
