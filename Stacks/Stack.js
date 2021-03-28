class Node {
    constructor(val) {
        this.next = null
        this.val = val
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    pushToStack (val) {
        let newNode = new Node(val)
        if(this.size === 0) {
            this.first = newNode; this.last = newNode;
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        this.size++
        return this
    }

    popFromStack () {
        if(this.size === 0) {
            return undefined
        }
        let poppedNode = this.first
        if(this.size === 1) {
            this.first = null; this.last = null;
        } else {
            this.first = poppedNode.next;
            poppedNode.next = null
        }
        this.size--;
        return poppedNode.val;
    }
}

let list = new Stack()
list.pushToStack(4)
list.pushToStack(3)
list.pushToStack(2)
list.pushToStack(1)
list.popFromStack()