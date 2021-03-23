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
    pushToTail(val) {
        let newNode = new Node(val)
        if(!this.head) {
          this.head = newNode; this.tail = newNode;
        } else {
            this.tail.next = newNode; this.tail = newNode;
        }
        this.length += 1;
        return this 
    }

    popFromHead () {
        if(!this.head) return undefined
        let node = this.head
        this.head = this.head.next
        this.length--;
        if(this.length === 0) this.tail = null
        return node
    }
}

let list = new SinglyLinkedList()
list.pushToTail('Hi')
list.pushToTail('Hello')
list.pushToTail('Good')
list.pushToTail('Bye')
list.popFromHead()