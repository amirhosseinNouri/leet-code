export default function productExceptSelf(numbers: number[]): number[] {
  const productOfAll = calculateProduct(numbers);

  return numbers.map((item, index) => {
    if (item === 0) {
      return calculateProduct([
        ...numbers.slice(0, index),
        ...numbers.slice(index + 1),
      ]);
    }

    return productOfAll === 0 ? 0 : productOfAll / item;
  });
}

export function calculateProduct(numbers: number[]): number {
  return numbers.reduce((acc, curr) => (acc *= curr), 1);
}