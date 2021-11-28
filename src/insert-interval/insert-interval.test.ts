import insert from './insert-interval';

test('Insert intervals test 1', () => {
  expect(
    insert(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
    ),
  ).toEqual([
    [1, 5],
    [6, 9],
  ]);
});
