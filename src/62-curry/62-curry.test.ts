import curry from './62-curry';
import { describe, expect, test } from 'bun:test';

function add(a: number, b: number): number {
  return a + b;
}

describe('curry', () => {
  test('should functions correctly', () => {
    const curriedAdd = curry(add);
    expect(curriedAdd(1)(2)).toBe(3);
  });
});
