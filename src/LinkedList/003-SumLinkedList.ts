import { ListNode } from "./mock";

export function sumLinkedList(node: ListNode | null): number { 

    let currentNode = node
    let sum = 0

    while(currentNode !== null) {
        sum += currentNode.val
        currentNode = currentNode.next
    }

    return sum
}

export function sumLinkedListRecursive(node: ListNode | null, sum: number): number { 

    if(node === null) return sum
    sum += node.val
    return sumLinkedListRecursive(node.next, sum)
}