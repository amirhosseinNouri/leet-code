export default function maxSumSubArray(numbers: number[]): number {
  const n = numbers.length;
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  for (let i = 0; i < n; i++) {
    const currentElement = numbers[i];
    currentSum = Math.max(currentElement, currentSum + currentElement);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSumSubArray([-1, 5, -3, 9, -11]));
