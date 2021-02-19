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

// Remove Tail
// 1. If no tail, means Empty List
// 2. Set Tail to prev Tail
// 3. Set new Tail next as null
// 4. Check if only 1 element in List, then set Head as null
LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null
  let val = this.tail.value
  this.tail = this.tail.prev
  if(this.tail) this.tail.next = null
  else this.head = null
  return val
}

let LL = new LinkedList()
LL.addToTail(10)
LL.addToTail(20)
LL.addToTail(30)
console.log(LL.removeTail())
console.log(LL)