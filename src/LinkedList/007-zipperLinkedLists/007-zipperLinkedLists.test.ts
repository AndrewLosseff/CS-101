// To run test use this:
// yarn jest src/LinkedList/007-zipperLinkedLists --watch

import { zipperLinkedLists } from './007-zipperLinkedLists';
import { linkedListMock, linkedListRevesedMock, zipperResultsFirst, shortList, zipperResultsSecons } from '../mock';


test('Linked List Zipper', () => {
    expect(zipperLinkedLists).toBeDefined();
});

test('reverseLinkedList, linkedListMock', () => {
    expect(zipperLinkedLists(linkedListMock, linkedListRevesedMock)).toEqual(zipperResultsFirst)
});

test('reverseLinkedList, linkedListMock', () => {
    expect(zipperLinkedLists(zipperResultsFirst, shortList)).toEqual(zipperResultsSecons)
});

