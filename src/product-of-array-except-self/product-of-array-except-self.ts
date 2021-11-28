export default function productExceptSelf(numbers: number[]): number[] {
  const productOfAll = calculateProduct(numbers);
  return numbers.map((item, index) => {
    if (item === 0) {
      return calculateProduct([
        ...numbers.slice(0, index),
        ...numbers.slice(index + 1),
      ]);
    }

    const result = productOfAll / item;

    return isZero(productOfAll) ? Math.abs(result) : result;
  });
}

export function calculateProduct(numbers: number[]): number {
  return numbers.reduce((acc, curr) => (acc *= curr), 1);
}

export function isZero(num: number): boolean {
  return Object.is(num, 0) || Object.is(num, -0);
}
