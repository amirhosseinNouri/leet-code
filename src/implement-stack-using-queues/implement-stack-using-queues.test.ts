import { Queue, MyStack } from './implement-stack-using-queues';

describe('Queue tests', () => {
  it('should be empty at first', () => {
    expect(new Queue().isEmpty()).toBe(true);
  });

  it('should add an element to the queue when using enqueue method', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
  });

  it('should remove the first entered element from the queue when using dequeue method', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).not.toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  it('should work correctly when executing enqueue and dequeue consecutively', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.isEmpty()).toBe(false);

    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });
});

describe('Queued-base stack tests', () => {
  it('should be empty at first', () => {
    const stack = new MyStack();
    expect(stack.empty()).toBe(true);
  });

  it('should not be empty after one push', () => {
    const stack = new MyStack();
    stack.push(1);
    expect(stack.empty()).toBe(false);
  });

  it('should pop an element correctly', () => {
    const stack = new MyStack();
    stack.push(1);
    expect(stack.pop()).toBe(1);
  });

  it('should throw an error when popping an empty stack', () => {
    expect(new MyStack().pop).toThrow();
  });

  it('should work correctly when having multiple push and pop operations', () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('should throw an error when popping an empty stack', () => {
    expect(new MyStack().top).toThrow();
  });

  it('should get the last item using the top method correctly', () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);
    expect(stack.top()).toBe(2);
  });
});
