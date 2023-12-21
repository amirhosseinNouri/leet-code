type RomanSymbol = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';
const MAP_ROMAN_TO_INT: Record<RomanSymbol, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const numbers: number[] = s
    .split('')
    .map((v) => MAP_ROMAN_TO_INT[v as RomanSymbol]);
  return numbers.reduce(
    (acc, num, index) => (num < numbers[index + 1] ? acc - num : acc + num),
    0,
  );
}
export default romanToInt;
