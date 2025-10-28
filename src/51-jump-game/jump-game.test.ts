import canJump from './jump-game';

test('Insert intervals test 1', () => {
  const input = [2, 3, 1, 1, 4];
  expect(canJump(input)).toBe(true);
});
