import LinkedList from './linked-list';

let list: LinkedList;
beforeEach(() => {
  list = new LinkedList();
});

test('Instance of list should not be null', () => {
  expect(list).not.toBeNull();
});

test('Newly created list should have a zero size', () => {
  expect(list.size).toBe(0);
});

test('Calling addAtHead should increment the size of the list', () => {
  list.addAtHead(1);
  expect(list.size).toBe(1);
  list.addAtHead(2);
  expect(list.size).toBe(2);
});

test('Get item with invalid index', () => {
  expect(list.get(999)).toBe(-1);
  expect(list.get(-1)).toBe(-1);
});

test('Get added items using addAtHead should return them correctly', () => {
  list.addAtHead(1);
  list.addAtHead(2);
  list.addAtHead(3);
  expect(list.get(0)).toBe(3);
  expect(list.get(1)).toBe(2);
  expect(list.get(2)).toBe(1);
});

test('Get added items using addAtTail should return them correctly', () => {
  list.addAtTail(1);
  list.addAtTail(2);
  list.addAtTail(3);
  list.addAtTail(4);
  list.addAtTail(5);
  expect(list.size).toBe(5);
  expect(list.get(0)).toBe(1);
  expect(list.get(1)).toBe(2);
  expect(list.get(2)).toBe(3);
  expect(list.get(3)).toBe(4);
  expect(list.get(4)).toBe(5);
});

test('Invalid index in addAtIndex will be ignored', () => {
  list.addAtIndex(1000, 1);
  expect(list.size).toBe(0);
});

test('Get added items using addAtIndex should return them correctly', () => {
  list.addAtIndex(0, 0);
  expect(list.get(0)).toBe(0);
  list.addAtIndex(1, 1);
  expect(list.size).toBe(2);
  expect(list.get(1)).toBe(1);
});

test('Delete with invalid index will be ignored', () => {
  list.addAtHead(0);
  list.deleteAtIndex(1000);
  expect(list.size).toBe(1);
});

test('Delete added item to list, should remove them correctly', () => {
  list.addAtHead(0);
  list.addAtTail(1);
  list.addAtTail(2);
  list.deleteAtIndex(1);
  expect(list.size).toBe(2);
  expect(list.get(2));
  expect(list.get(1)).toBe(2);
  expect(list.get(0)).toBe(0);
});

test('Use all methods together should work as expected', () => {
  list.addAtHead(1);
  list.addAtTail(3);
  list.addAtIndex(1, 2);
  expect(list.get(1)).toBe(2);
  list.deleteAtIndex(1);
  expect(list.get(1)).toBe(3);
});

test('Remove last item using deleteAtIndex should just delete the last item', () => {
  list.addAtHead(0);
  list.addAtTail(1);
  list.addAtTail(2);
  list.deleteAtIndex(2);
  expect(list.get(2)).toBe(-1);
  expect(list.size).toBe(2);
});

test('Random test  1', () => {
  list.addAtHead(1);
  list.addAtTail(3);
  list.addAtIndex(1, 2);
  expect(list.get(1)).toBe(2);
  list.deleteAtIndex(0);
  expect(list.get(0)).toBe(2);
});

test('Random test 2', () => {
  list.addAtIndex(0, 10);
  list.addAtIndex(0, 20);
  list.addAtIndex(1, 30);
  expect(list.get(0)).toBe(20);
});

test('Random test 3', () => {
  list.addAtHead(4);
  expect(list.get(1)).toBe(-1);
  list.addAtHead(1);
  list.addAtHead(5);
  list.deleteAtIndex(3);
  list.addAtHead(7);
  expect(list.get(3)).toBe(4);
  expect(list.get(3)).toBe(4);
  expect(list.get(3)).toBe(4);
  list.addAtHead(1);
  list.deleteAtIndex(4);
});
