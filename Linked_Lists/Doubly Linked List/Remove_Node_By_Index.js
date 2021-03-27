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

    removeNodeByIndex (index) {
        if(index < 0 || index >= this.length) return undefined
        let removedNode
        // Remove from Head
        if(index === 0) {
            removedNode = this.head
            this.head = removedNode.next
            removedNode.next = null
            this.head.prev = null
        }
        // Remove at tail
        else if(index === this.length-1) {
            removedNode = this.tail
            this.tail = removedNode.prev
            removedNode.prev = null
            this.tail.next = null
        }
        // Remove at any node
        else {
            if(index*2 < this.length) {
                let currentNode = this.head, count = 1
                while(currentNode.next) {
                    if(index === count) {
                        removedNode = currentNode.next
                        currentNode.next = removedNode.next
                        removedNode.next.prev = currentNode
                        removedNode.next = null
                        removedNode.prev = null
                        break;
                    } else {
                        currentNode = currentNode.next; count++
                    }
                }
            } else {
                let currentNode = this.tail, count = this.length-2
                while(currentNode.prev) {
                    if(index === count) {
                        removedNode = currentNode.prev
                        removedNode.prev.next = currentNode
                        currentNode.prev = removedNode.prev
                        removedNode.next = null
                        removedNode.prev = null
                        break;
                    } else {
                        currentNode = currentNode.prev; count--
                    }
                }
            }
        }
        this.length--
        return removedNode
    }
}

let list = new DoublyLinkedList()
list.pushToHead(60)
list.pushToHead(50)
list.pushToHead(40)
list.pushToHead(30)
list.pushToHead(20)
list.pushToHead(10)
list.removeNodeByIndex(0)
list.removeNodeByIndex(4)