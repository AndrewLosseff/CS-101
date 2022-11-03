// To run test use this:
// yarn jest src/LinkedList/003-SumLinkedList --watch

import { linkedListMock } from '../mock'
import { sumLinkedList, sumLinkedListRecursive } from './003-SumLinkedList'

test('Linked List Sum', () => {
    expect(sumLinkedList).toBeDefined();
});

test('sumLinkedList, linkedListMock', () => {
    expect(sumLinkedList(linkedListMock)).toEqual(18)
});

test('Linked List Recursive Sum', () => {
    expect(sumLinkedListRecursive).toBeDefined();
});

test('sumLinkedList, linkedListMock', () => {
    expect(sumLinkedListRecursive(linkedListMock, 0)).toEqual(18)
});