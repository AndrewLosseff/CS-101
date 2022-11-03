import { ListNode } from "./mock";

export function linkedListFind(node: ListNode | null, nodeVal: number): boolean { 

    let currentNode = node

    while(currentNode !== null) {
        if (currentNode.val === nodeVal) return true
        currentNode = currentNode.next
    }

    return false
}

export function linkedListRecursiveFind(node: ListNode | null, nodeVal: number): boolean { 

    if(node === null) return false
    if(node.val === nodeVal) return true

    return linkedListRecursiveFind(node.next, nodeVal)
    
}