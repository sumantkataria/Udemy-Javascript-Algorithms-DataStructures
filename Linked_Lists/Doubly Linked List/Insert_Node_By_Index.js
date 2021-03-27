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

    setNodeByIndex (index, val) {
        if(index < 0 || index > this.length) return null
        let newNode = new Node(val)
        // Insert at Head
        if(index === 0) {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        //Insert at tail
        else if(index === this.length) {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        // Insert at any node
        else {
            if(index*2 < this.length) {
                let currentNode = this.head, count = 1
                while(currentNode.next) {
                    if(index === count) {
                        newNode.next = currentNode.next
                        currentNode.next.prev = newNode
                        currentNode.next = newNode
                        newNode.prev = currentNode
                        break;
                    } else {
                        currentNode = currentNode.next; count++
                    }
                }
            } else {
                let currentNode = this.tail, count = this.length-1
                while(currentNode.prev) {
                    if(index === count) {
                        newNode.prev = currentNode.prev
                        currentNode.prev.next = newNode
                        currentNode.prev = newNode
                        newNode.next = currentNode
                        break;
                    } else {
                        currentNode = currentNode.prev; count--
                    }
                }
            }
            this.length++
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
list.setNodeByIndex(1, 15)
list.setNodeByIndex(5, 55)