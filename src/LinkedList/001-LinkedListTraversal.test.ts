// To run test use this:
// yarn jest src/LinkedList/001-LinkedListTraversal --watch

import { linkedListTraversal, linkedListReqursiveTraversal } from './001-LinkedListTraversal'
import { linkedListMock } from './mock'

test('Linked List Traversal', () => {
    expect(linkedListTraversal).toBeDefined();
});

test('head = linkedListMock', () => {
    expect(linkedListTraversal(linkedListMock)).toEqual(linkedListMock)
});

test('Linked List Reqursive Traversal', () => {
    expect(linkedListReqursiveTraversal).toBeDefined();
});

test('Reqursive head = linkedListMock', () => {
    expect(linkedListReqursiveTraversal(linkedListMock)).toEqual(null)
});