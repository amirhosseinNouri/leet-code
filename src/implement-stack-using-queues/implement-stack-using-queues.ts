class Queue<T> {
  elements: T[] = [];

  head: number = 0;

  tail: number = 0;

  constructor() {}

  enqueue(element: T) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  dequeue(): T {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;

    return item;
  }

  peek(): T {
    return this.elements[this.head];
  }

  isEmpty(): boolean {
    return this.head === this.tail;
  }
}

class MyStack {
  queue: Queue<number>;

  constructor() {
    this.queue = new Queue();
  }

  push(x: number): void {
    this.queue.enqueue(x);
  }

  pop(): number {
    if (this.queue.isEmpty()) {
      throw new Error('Can not operate pop on an empty stack');
    }

    const newQueue = new Queue<number>();

    while (!this.queue.isEmpty()) {
      const headElement = this.queue.dequeue();

      const isTheLastElement = this.queue.isEmpty();

      if (isTheLastElement) {
        this.queue = newQueue;
        return headElement;
      }

      newQueue.enqueue(headElement);
    }

    return -1;
  }

  top(): number {
    if (this.queue.isEmpty()) {
      throw new Error('Can not operate top on an empty stack');
    }

    const element = this.pop();
    this.push(element);

    return element;
  }

  empty(): boolean {
    return this.queue.isEmpty();
  }
}

export { Queue, MyStack };
