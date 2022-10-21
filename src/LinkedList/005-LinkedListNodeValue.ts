import { ListNode } from "./mock";

export function linkedListNodeValue(node: ListNode | null, nodePosition: number): number | null { 

    let currentNode = node
    let counter = 0

    while(currentNode !== null) {
        if(nodePosition === counter) return currentNode.val
        counter++
        currentNode = currentNode.next
    }

    return null
}

export function linkedListRecursiveNodeValue(node: ListNode | null, nodePosition: number, counter: number): number | null { 

    if(node === null) return null
    if(nodePosition === counter) return node.val
    counter++
    return linkedListRecursiveNodeValue(node.next, nodePosition, counter)

}