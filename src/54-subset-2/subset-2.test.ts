import { subsetsWithDup } from './subset-2';

test('calculates twoSum correctly', () => {
  expect(subsetsWithDup([1, 2, 2])).toEqual([
    [],
    [1],
    [1, 2],
    [1, 2, 2],
    [2],
    [2, 2],
  ]);

  expect(subsetsWithDup([0])).toEqual([[], [0]]);
});
