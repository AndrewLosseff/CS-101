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

export const linkedListRevesedMock: ListNode = {
    val: 10,
    next: {
        val: 3,
        next: {
            val: 5,
            next: null,
        },
    },
}

export const zipperResultsFirst: ListNode = {
    val: 5,
    next: {
        val: 10,
        next: {
            val: 3,
            next: {
                val: 3,
                next: {
                    val: 10,
                    next: {
                        val: 5,
                        next: null,
                    }
                }
            }
        }
    }
}

export const shortList: ListNode = {
    val: 99,
    next: null
}

export const zipperResultsSecons: ListNode = {
    val: 5,
    next: {
        val: 99,
        next: {
            val: 10,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: {
                        val: 10,
                        next: {
                            val: 5,
                            next: null,
                        }
                    }
                }
            } 
        }
    }
}

export const emptyArray = []

