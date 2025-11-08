import { subsets } from './subset';

test('calculates twoSum correctly', () => {
  expect(subsets([1, 2, 3])).toEqual([
    [],
    [1],
    [2],
    [1, 2],
    [3],
    [1, 3],
    [2, 3],
    [1, 2, 3],
  ]);

  expect(subsets([0])).toEqual([[], [0]]);
});
