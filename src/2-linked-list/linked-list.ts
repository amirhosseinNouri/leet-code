type LinkListNode = {
  val: number;
  next?: LinkListNode | null;
};

interface MyLinkedListInterface {
  get: (index: number) => number;
  addAtHead: (val: number) => void;
  addAtTail: (val: number) => void;
  addAtIndex: (index: number, val: number) => void;
  deleteAtIndex: (index: number) => void;
}

class MyLinkedList implements MyLinkedListInterface {
  head: LinkListNode | null = null;
  tail: LinkListNode | null = null;
  size: number;

  constructor() {
    this.size = 0;
  }

  get(index: number): number {
    if (!this.head) {
      return -1;
    }
    if (index >= this.size) {
      return -1;
    }
    const node = this.getNode(index)!;
    return node.val;
  }

  addAtHead(val: number): void {
    const newNode: LinkListNode = { val };
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    const newNode: LinkListNode = { val };

    if (this.head) {
      this.tail!.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    if (index === this.size) {
      this.addAtTail(val);
      return;
    }

    if (index > this.size) {
      return;
    }

    const prevNode = this.getNode(index - 1)!;

    const nextNode: LinkListNode = prevNode.next!;
    const newNode: LinkListNode = { val, next: nextNode };
    prevNode.next = newNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index >= this.size) {
      return;
    }

    if (!this.head) {
      return;
    }

    if (index === 0) {
      const newHead = this.head.next;
      this.head = newHead!;
      this.size--;
      return;
    }

    const prevNode = this.getNode(index - 1)!;

    if (index === this.size - 1) {
      this.tail = prevNode;
      prevNode.next = null;
      this.size--;
      return;
    }

    const targetNode: LinkListNode = prevNode.next!;
    const nextNode: LinkListNode = targetNode.next!;
    prevNode.next = nextNode;
    this.size--;
  }

  private getNode(index: number): LinkListNode | null {
    if (!this.head) {
      return null;
    }

    if (index === this.size - 1) {
      return this.tail;
    }

    let current: LinkListNode = this.head;
    while (index > 0 && current.next) {
      index--;
      current = current.next;
    }
    return current;
  }
}

export default MyLinkedList;
