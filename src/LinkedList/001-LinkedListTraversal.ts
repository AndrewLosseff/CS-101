import { ListNode } from "./mock";

export function linkedListTraversal(node: ListNode | null) {
   
    let currentNode = node

    while(currentNode !== null) {
        console.log(currentNode?.val)
        currentNode = currentNode.next
    }

    return node
}

export function linkedListReqursiveTraversal(node: ListNode | null) { 
    if( node === null) return node

    console.log(node?.val)

    return linkedListReqursiveTraversal(node?.next || null)
}