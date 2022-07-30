import mergeTwoLists from './merge-two-sorted-lists';

describe('mergeTwoLists tests', () => {
  test('test case 1', () =>
    expect(
      mergeTwoLists(
        { val: 1, next: { val: 2, next: { val: 4, next: null } } },
        { val: 1, next: { val: 3, next: { val: 4, next: null } } },
      ),
    ).toMatchObject({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: { val: 3, next: { val: 4, next: { val: 4, next: null } } },
        },
      },
    }));
});
