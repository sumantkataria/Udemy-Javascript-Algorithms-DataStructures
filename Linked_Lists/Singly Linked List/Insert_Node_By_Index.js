class Node {
    constructor(val, next) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    pushToHead (val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode; this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++
        return this
    }

    insertNodeByIndex (index, value) {
        if(index < 0 || index > this.length) return false
        let newNode = new Node(value)
        // Push from Head
        if(index === 0) {
            newNode.next = this.head
            this.head = newNode
            this.length++
            return true;
        } 
        // Push from tail
        else if (index === this.length) {
            this.tail.next = newNode
            this.tail = newNode
            this.length++
            return true
        }
        // Push from any position
        else {
            let count = 1
            let currentNode = this.head
            while(currentNode) {
                if(index === count) {
                    newNode.next = currentNode.next
                    currentNode.next = newNode
                    this.length++
                    return true
                } else {
                    currentNode = currentNode.next;
                    count++
                }
            }
            return false
        }
    }
    
}

let list = new SinglyLinkedList()
list.pushToHead(400)
list.pushToHead(300)
list.pushToHead(101)
list.pushToHead(100)
list.insertNodeByIndex(2, 500)