// To run test use this:
// yarn jest src/LinkedList/004-LinkedListFind --watch

import { linkedListMock } from '../mock'
import { linkedListFind, linkedListRecursiveFind } from './004-LinkedListFind'

test('Linked List Find', () => {
    expect(linkedListFind).toBeDefined();
});

test('linkedListFind, linkedListMock', () => {
    expect(linkedListFind(linkedListMock, 5)).toEqual(true)
});

test('linkedListFind, linkedListMock', () => {
    expect(linkedListFind(linkedListMock, 4)).toEqual(false)
});

test('Linked List Recursive Find', () => {
    expect(linkedListRecursiveFind).toBeDefined();
});

test('linkedListFind, linkedListMock', () => {
    expect(linkedListRecursiveFind(linkedListMock, 5)).toEqual(true)
});

test('linkedListFind, linkedListMock', () => {
    expect(linkedListRecursiveFind(linkedListMock, 4)).toEqual(false)
});