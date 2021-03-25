// Unshift
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

    pushToHead (value) {
        let newNode = new Node(value)
        // Check for empty list
        if(this.length === 0) {
            this.head = newNode; this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
}

let list = new DoublyLinkedList()
list.pushToHead(10)
list.pushToHead(20)
list.pushToHead(30)
list.pushToHead(40)