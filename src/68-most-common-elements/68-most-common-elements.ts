/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
export default function mostCommonElements(numbers: number[], k: number) {
  const freqMap = new Map();
  const n = numbers.length;

  for (let i = 0; i < n; i++) {
    const current = numbers[i];
    freqMap.set(current, (freqMap.get(current) || 0) + 1);
  }

  console.log(freqMap);

  const result: number[] = [];

  freqMap.forEach((_, key) => {
    result.push(key);
    result.sort((a, b) => (freqMap.get(a) || 0) - (freqMap.get(b) || 0));
  });

  console.log(result);

  return result.slice(-k);
}

console.log(mostCommonElements([4, 4, 4, 6, 6, 5, 5, 5], 2));
