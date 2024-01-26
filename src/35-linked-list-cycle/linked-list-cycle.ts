// @ts-ignore
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let tail = head;
  const visited: Map<ListNode, boolean> = new Map();

  while (tail) {
    visited.set(tail, true);

    if (!tail.next) {
      return false;
    }

    if (visited.has(tail.next)) {
      return true;
    }

    tail = tail.next;
  }

  return false;
}

export default hasCycle;
