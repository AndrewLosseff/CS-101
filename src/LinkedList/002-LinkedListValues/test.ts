// To run test use this:
// yarn jest src/LinkedList/002-LinkedListValues --watch

import { linkedListMock, emptyArray } from '../mock'
import { linkedListRecursiveValues, linkedListValues } from '.'

test('Linked List Values', () => {
    expect(linkedListValues).toBeDefined();
});

test('linkedListValues, linkedListMock', () => {
    expect(linkedListValues(linkedListMock)).toEqual([5,3,10])
});

test('Linked List Recursive Values', () => {
    expect(linkedListRecursiveValues).toBeDefined();
});

test('linkedListRecursiveValues, linkedListMock', () => {
    expect(linkedListRecursiveValues(linkedListMock, emptyArray )).toEqual([5,3,10])
});
