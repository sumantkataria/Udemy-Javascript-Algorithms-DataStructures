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

    //Unshift
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
    
}

let list = new SinglyLinkedList()
list.pushToHead('Hi')
list.pushToHead('Hello')
list.pushToHead('Good')
list.pushToHead('Bye')