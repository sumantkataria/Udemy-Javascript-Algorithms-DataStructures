class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }

    // Insert
    enqueue (val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        if(this.values.length > 1) this.bubbleUp()
        return this.values
    }

    bubbleUp () {
        let currentIndex = this.values.length - 1, currentPriority = this.values[currentIndex].priority
        while(currentIndex > 0) {
            let parentIndex = ~~((currentIndex - 1)/2), parentPriority = this.values[parentIndex].priority
            if(parentPriority >= currentPriority) break
            [this.values[parentIndex], this.values[currentIndex]] 
                = [this.values[currentIndex], this.values[parentIndex]]
            currentIndex = parentIndex
        }
    }

    // Remove
    dequeue () {
        [this.values[0], this.values[this.values.length-1]] 
            = [this.values[this.values.length-1], this.values[0]]
        let node = this.values.pop()
        if(this.values.length) this.bubbleDown()
        return node
    }

    bubbleDown () {
        let parentIndex = 0, parentPriority = this.values[0].priority, len = this.values.length
        while(true) {
            let leftIndex = 2 * parentIndex + 1
            let rightIndex = 2 * parentIndex + 2
            let leftPriority, rightPriority, swapIndex = null
            if(leftIndex < len) {
                leftPriority = this.values[leftIndex].priority
                if(leftPriority < parentPriority) {
                    swapIndex = leftIndex
                }
            }
            if(rightIndex < len) {
                rightPriority = this.values[rightIndex].priority
                if((swapIndex === null && rightPriority > parentPriority)
                    || (swapIndex !== null && rightPriority > leftPriority)) {
                        swapIndex = rightIndex
                    }
            }
            if(swapIndex === null) break
            [this.values[parentIndex], this.values[swapIndex]] 
                = [this.values[swapIndex], this.values[parentIndex]]
            parentIndex = swapIndex
        }
    }
}

let ER = new PriorityQueue()
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)