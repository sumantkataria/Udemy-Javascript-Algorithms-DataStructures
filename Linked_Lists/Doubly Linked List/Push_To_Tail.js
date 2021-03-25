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
}

let list = new DoublyLinkedList()
list.pushToTail(10)
list.pushToTail(20)
list.pushToTail(30)
list.pushToTail(40)