export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0;
  let result = null;
  let resultFirstNode = null;
  while (l1 || l2 || carry) {
    const digit1 = l1?.val ?? 0;
    const digit2 = l2?.val ?? 0;

    const sum = digit1 + digit2 + carry;

    carry = Math.floor(sum / 10);
    const resultDigit = sum < 10 ? sum : sum % 10;

    if (result === null) {
      result = new ListNode(resultDigit);
      resultFirstNode = result;
    } else {
      result.next = new ListNode(resultDigit);
      result = result.next;
    }

    l1 = l1?.next!;
    l2 = l2?.next!;
  }

  return resultFirstNode;
}
