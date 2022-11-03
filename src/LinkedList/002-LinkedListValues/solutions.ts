import { ListNode } from "../mock";

export function linkedListValues(node: ListNode | null): number[] {

    let currentNode = node
    const arrayOfNodes: number[] = []

    while(currentNode !== null) {
        arrayOfNodes.push(currentNode.val)
        currentNode = currentNode.next
    }

    return arrayOfNodes
}

export function linkedListRecursiveValues(node: ListNode | null, arrayOfNodes: number[] = []): number[] {
  
    if(node === null) return arrayOfNodes

    arrayOfNodes.push(node.val)

    linkedListRecursiveValues(node.next, arrayOfNodes)

    return arrayOfNodes
    
}
