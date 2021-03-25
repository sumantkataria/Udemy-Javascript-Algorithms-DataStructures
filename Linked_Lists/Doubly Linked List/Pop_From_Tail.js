class Node {
    constructor(val) {
        this.next = null
        this.prev = null
        this.val = val
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    pushToTail (val) {
        let newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode;
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
        this.length++
        return this
    }

    popFromTail () {
        // Check for empty list
        if(this.length === 0) {
            return undefined
        }
        let node = this.tail
        // Check for 1 node
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = node.prev
            this.tail.next = null
            node.prev = null
        }
        this.length--
        return node
    }
}

let list = new DoublyLinkedList()
list.pushToTail(10)
list.pushToTail(20)
list.pushToTail(30)
list.pushToTail(40)
list.popFromTail()