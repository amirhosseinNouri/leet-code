class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const result: ListNode = { val: 0, next: null };
  let resultTail = result;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      resultTail.next = list1;
      list1 = list1.next;
    } else {
      resultTail.next = list2;
      list2 = list2.next;
    }
    resultTail = resultTail.next;
  }

  if (list1) {
    resultTail.next = list1;
  } else {
    resultTail.next = list2;
  }
  return result.next;
}

export default mergeTwoLists;
