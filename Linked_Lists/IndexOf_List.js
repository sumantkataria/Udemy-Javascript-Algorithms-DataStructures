function LinkedList () {
    this.head = null
    this.tail = null

}

function Node (value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
}

// Adding to Tail
// 1. Create NewNode
// 2. NewNode is wired with existing LinkedList
// 3. Point tail pointer to newNode
// 4. If list is empty, point head pointer to newNode as well
LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail)
  this.tail ? this.tail.next = newNode : this.head = newNode
  this.tail = newNode
};

LinkedList.prototype.indexOf = function(searchValue) {
  let outputArr = [], index = 0
  let currentNode = this.head
  while(currentNode) {
    if(currentNode.value === searchValue) outputArr.push(index)
    currentNode = currentNode.next
    index++
  }
  return outputArr
}

let LL = new LinkedList()
LL.addToTail(10)
LL.addToTail(20)
LL.addToTail(10)
console.log(LL.indexOf(10))