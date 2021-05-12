class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    rotate (index) {
        if(index < 0 || index > this.length) return null
        if(index === 0 || index === this.length) return this
        else {
            let currentNode = this.head, counter = 1
            while(currentNode) {
                if(counter === index) {
                    this.tail.next = this.head
                    this.head = currentNode.next
                    currentNode.next = null
                    this.tail = currentNode
                    break
                } else {
                    currentNode = currentNode.next
                    counter++
                }
            }
        }
        return this
    }
}

var list = new SinglyLinkedList()
list.push(1).push(2).push(3).push(4).push(5)
list.rotate(2)