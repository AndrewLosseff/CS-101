// To run test use this:
// yarn jest src/LinkedList/001-LinkedListTraversal --watch

import { linkedListTraversal, linkedListRecursiveTraversal } from './001-LinkedListTraversal'
import { linkedListMock } from './mock'

test('Linked List Traversal', () => {
    expect(linkedListTraversal).toBeDefined();
});

test('head = linkedListMock', () => {
    expect(linkedListTraversal(linkedListMock)).toEqual(linkedListMock)
});

test('Linked List Recursive Traversal', () => {
    expect(linkedListRecursiveTraversal).toBeDefined();
});

test('Recursive head = linkedListMock', () => {
    expect(linkedListRecursiveTraversal(linkedListMock)).toEqual(null)
});