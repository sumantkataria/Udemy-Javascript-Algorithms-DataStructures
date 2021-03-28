class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last  = null
        this.size = 0
    }

    // Push to tail
    enqueue (val) {
        let newNode = new Node(val)
        if(this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        ++this.size
        return this
    }

    // Remove from head
    dequeue () {
        if(this.size === 0) return undefined
        let poppedNode = this.first
        if(this.size === 1) {
            this.first = null; this.last = null;
        } else {
            this.first = poppedNode.next
            poppedNode.next = null
        }
        --this.size
        return poppedNode
    }
}

let q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue()
q.dequeue()