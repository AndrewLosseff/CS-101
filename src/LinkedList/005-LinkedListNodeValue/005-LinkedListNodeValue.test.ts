// To run test use this:
// yarn jest src/LinkedList/005-LinkedListNodeValue --watch

import { linkedListMock } from '../mock'
import { linkedListNodeValue, linkedListRecursiveNodeValue } from './005-LinkedListNodeValue'

test('Linked List Node Value', () => {
    expect(linkedListNodeValue).toBeDefined();
});

test('linkedListNodeValue, linkedListMock', () => {
    expect(linkedListNodeValue(linkedListMock, 1)).toEqual(3)
});

test('linkedListNodeValue, linkedListMock', () => {
    expect(linkedListNodeValue(linkedListMock, 4)).toEqual(null)
});

test('Linked List Recursive Node Value', () => {
    expect(linkedListRecursiveNodeValue).toBeDefined();
});

test('linkedListRecursiveNodeValue, linkedListMock', () => {
    expect(linkedListRecursiveNodeValue(linkedListMock, 1, 0)).toEqual(3)
});

test('linkedListRecursiveNodeValue, linkedListMock', () => {
    expect(linkedListRecursiveNodeValue(linkedListMock, 4, 0)).toEqual(null)
});