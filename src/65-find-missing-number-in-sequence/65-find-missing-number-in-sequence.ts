/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers: number[]) {
  const n = numbers.length;
  let expectedSum = (n * (n + 1)) / 2;
  numbers.forEach((num) => {
    expectedSum -= num;
  });

  return expectedSum;
}
