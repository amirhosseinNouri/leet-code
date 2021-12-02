import addTwoNumbers, { ListNode } from './add-two-numbers';

describe('addTwoNumbers test', () => {
  test('should have a return value', () => {
    expect(
      addTwoNumbers(new ListNode(1, null), new ListNode(2, null)),
    ).not.toBeNull();
  });

  test('should always return a ListNode', () => {
    expect(
      addTwoNumbers(new ListNode(1, null), new ListNode(2, null)),
    ).toBeInstanceOf(ListNode)
  });
});
