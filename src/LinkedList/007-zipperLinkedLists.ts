import { ListNode } from "./mock";

export function zipperLinkedLists(node1: ListNode | null, node2: ListNode | null): ListNode | null {

    let newNode: ListNode | null = node1
    let current1 = node1?.next
    let current2 = node2
    let counter = 0

    while(current1 !== null && current2 !== null) {
        if(counter % 2 === 0) {
            newNode!.next = current2
            current2 = current2.next
        } else {
            newNode!.next = current1
            current1 = current1?.next
        }

        newNode = newNode!.next
        counter++
    }

    if(current1 !== null) newNode!.next = current1
    if(current2 !== null) newNode!.next = current2

    return node1

}