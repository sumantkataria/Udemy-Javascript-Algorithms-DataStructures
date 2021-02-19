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

// Remove Head
// 1. If No Head, means Empty List
// 2. Point Head to next Head
// 3. Set new Head prev as null
// 4. Check if only 1 element in list then set tail as null
LinkedList.prototype.removeHead = function() {
  if(!this.head) return null
  let val = this.head.value
  this.head = this.head.next
  if(this.head) this.head.prev = null
  else this.tail = null
  return val
}

let LL = new LinkedList()
LL.addToTail(10)
LL.addToTail(20)
LL.addToTail(30)
console.log(LL.removeHead())