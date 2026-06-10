/**
 * @param {number[]} numbers
 * @return {number[]}
 */
export default function arrayProductExcludingCurrent(numbers: number[]) {
  const n = numbers.length;

  const prefix = new Array(n);
  const suffix = new Array(n);

  prefix[0] = 1;
  suffix[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * numbers[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * numbers[i + 1];
  }

  return prefix.map((p, i) => p * suffix[i]);
}

console.log(arrayProductExcludingCurrent([2, 3, 4, 5]));
