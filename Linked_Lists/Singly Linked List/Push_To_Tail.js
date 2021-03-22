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
}

let list = new SinglyLinkedList()
list.pushToTail('Hi')
list.pushToTail('Hello')