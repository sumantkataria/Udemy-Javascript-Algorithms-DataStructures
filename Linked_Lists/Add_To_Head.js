function LinkedList () {
    this.head = null
    this.tail = null

}

function Node (value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
}

// Adding to Head
// 1. Create NewNode
// 2. NewNode is wired with existing LinkedList
// 3. Point head pointer to newNode
LinkedList.prototype.addToHead = function(value) {
    let newNode = new Node(value, this.head, null)
    this.head ? this.head.prev = newNode : this.tail = newNode
    this.head = newNode
};

var LL = new LinkedList()
LL.addToHead(100)
LL.addToHead(200)
LL.addToHead(300)
console.log(LL)