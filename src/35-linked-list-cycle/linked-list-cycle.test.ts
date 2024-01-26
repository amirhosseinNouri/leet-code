import hasCycle, { ListNode } from './linked-list-cycle';

describe('hasCycle tests', () => {
  it('should return true if there is a cycle inside the linked list', () => {
    const node4: ListNode = { val: -4, next: null };
    const node3: ListNode = { val: 0, next: node4 };
    const node2: ListNode = { val: 2, next: node3 };
    const node1: ListNode = { val: 3, next: node2 };

    node4.next = node2;

    expect(hasCycle(node1)).toBe(true);
  });

  it('should return false when there is only one node in the list', () => {
    const list: ListNode = { val: 1, next: null };
    expect(hasCycle(list)).toBe(false);
  });

  it('should return false when there is no node in the list', () => {
    expect(hasCycle(null)).toBe(false);
  });
});
