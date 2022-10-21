export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export const linkedListMock: ListNode = {
    val: 5,
    next: {
        val: 3,
        next: {
            val: 10,
            next: null,
        },
    },
}

export const emptyArray = []