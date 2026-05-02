/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */

Array.prototype.myReduce = function <T extends unknown[]>(
  callbackFn: (prev: T, current: T) => T,
  initialValue?: T,
) {
  if (this.length === 0 && initialValue === undefined) {
    throw Error('');
  }

  let result = initialValue ?? 0;

  if (this.length === 0) {
    return result;
  }

  for (let i = 0; i < this.length; i++) {
    if (this[i] !== undefined) {
      result = callbackFn.call(this, result, this[i], i, this);
    }
  }

  return result;
};
const add = (prev: any, curr: any) => prev + curr;
const multiplyByIndex = (prev: number, curr: number, index: number) =>
  prev + curr * index;
const subtract = (prev: number, curr: number) => prev - curr;
const sumOfSquares = (prev: any, curr: any, index: number, array: Array<any>) =>
  prev + curr * array[index];
const combineObj = (prev: Object, curr: Object) => ({ ...prev, ...curr });
const combineArr = (prev: Array<any>, curr: any) => [...prev, curr];
// console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0));
// console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 4));
// console.log([-1, -3, 4, , ,].myReduce(sumOfSquares, 0));
console.log([].myReduce(add, 0))
console.log([].myReduce(subtract, 0))
