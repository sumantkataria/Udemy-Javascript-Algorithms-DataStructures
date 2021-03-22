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

    popFromTail () {
        if(!this.head) return undefined;
        let current = this.head
        let newTail = current
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
}

let list = new SinglyLinkedList()
list.pushToTail('Hi')
list.pushToTail('Hello')
list.pushToTail('Good')
list.pushToTail('Bye')
list.popFromTail()