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
    
    deleteNodeByIndex (index) {
        if(index < 0 || index >= this.length) return null
        //Remove head
        if(index === 0) {
            let node = this.head
            this.head = node.next
            node.next = null
            this.length--
            return true
        }
        //Remove from any location
        else {
            let current = this.head, count = 1
            while(current.next) {
                if(count === index) {
                    // Remove tail
                    if(index === this.length-1) this.tail = current
                    let node = current.next
                    current.next = node.next
                    this.length--
                    return node
                } else {
                    current = current.next;count++
                }
            }
        }
    }
}

let list = new SinglyLinkedList()
list.pushToHead(400)
list.pushToHead(300)
list.pushToHead(101)
list.pushToHead(100)
list.deleteNodeByIndex(2)