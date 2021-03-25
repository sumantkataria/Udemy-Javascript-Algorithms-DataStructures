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

    getNodeByIndex (index) {
        if(index < 0 || index >= this.length) return null
        // Check for iterating from head
        else if(index*2 < this.length) {
            let currentNode = this.head, count = 0
            while(currentNode.next) {
                if(index === count) {
                    return currentNode
                } else {
                    currentNode = currentNode.next;count++
                }
            }
        }
        // Check for iterating from tail
        else {
            let currentNode = this.tail, count = this.length-1
            while(currentNode) {
                if(index === count) {
                    return currentNode
                } else {
                    currentNode = currentNode.prev; count--
                }
            }
        }
    }
}

let list = new DoublyLinkedList()
list.pushToHead(60)
list.pushToHead(50)
list.pushToHead(40)
list.pushToHead(30)
list.pushToHead(20)
list.pushToHead(10)