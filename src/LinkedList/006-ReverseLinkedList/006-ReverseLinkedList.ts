import { ListNode } from "./mock";

export function reverseLinkedList(node: ListNode | null): ListNode | null { 

    let prevNode: ListNode | null = null
    let currentNode = node

    while(currentNode !== null) {
        const nextNode = currentNode.next
        currentNode.next = prevNode
        prevNode = currentNode
        currentNode = nextNode
    }

    return prevNode
}

// TODO: fix error in test
// Valid solution
export function reverseRecursiveLinkedList(node: ListNode | null, prevNode): ListNode | null {

    if(node === null) return prevNode
    const nextNode = node.next
    node.next = prevNode
    return reverseRecursiveLinkedList(nextNode, node)

}