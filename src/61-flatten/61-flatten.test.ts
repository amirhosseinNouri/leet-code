import flatten from './61-flatten';
import { describe, expect, test } from 'bun:test';

describe('flatten', () => {
  test('should flatten inner arrays into a single level correctly', () => {
    expect(flatten([1, 2, [3]])).toEqual([1, 2, 3]);
  });

  test('should flatten recursively', () => {
    const arr = [[1], [2], [[3], [4]]];
    expect(flatten(arr)).toEqual([1, 2, 3, 4]);
  });

  test('should keep single level arrays unaffected', () => {
    const arr = [1, 2, 3];
    expect(flatten(arr)).toEqual(arr);
  });
});
