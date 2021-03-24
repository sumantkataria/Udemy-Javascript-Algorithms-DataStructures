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

    getByIndex (index) {
        if(index < 0 || index >= this.length) return null
        let currentNode = this.head, counter = 0 
        while(counter !== index) {
            currentNode = currentNode.next;counter++
        }
        return currentNode
    }
    
}

let list = new SinglyLinkedList()
list.pushToHead('Hi')
list.pushToHead('Hello')
list.pushToHead('Good')
list.pushToHead('Bye')
list.getByIndex(2)