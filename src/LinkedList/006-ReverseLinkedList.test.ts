// To run test use this:
// yarn jest src/LinkedList/006-ReverseLinkedList --watch

import { linkedListMock, linkedListRevesedMock } from './mock'
import { reverseLinkedList, reverseRecursiveLinkedList } from './006-ReverseLinkedList'

test('Linked List Node Value', () => {
    expect(reverseLinkedList).toBeDefined();
});

test('reverseLinkedList, linkedListMock', () => {
    expect(reverseLinkedList(linkedListMock)).toEqual(linkedListRevesedMock)
});

test('Linked List Recursive Node Value', () => {
    expect(reverseRecursiveLinkedList).toBeDefined();
});

test('reverseRecursiveLinkedList, linkedListMock', () => {
    expect(reverseRecursiveLinkedList(linkedListMock, null)).toEqual(linkedListRevesedMock)
});
