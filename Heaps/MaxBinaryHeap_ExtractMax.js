class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    maxBinaryHeapExtract () {
        [this.values[0], this.values[this.values.length-1]] = [this.values[this.values.length-1], this.values[0]]
        let val = this.values.pop()
        this.bubbleDown()
        return val
    }

    bubbleDown () {
        let parentIndex = 0, parentValue = this.values[0], len = this.values.length
        while(true) {
            let leftChildIndex = 2 * parentIndex + 1, rightChildIndex = 2 * parentIndex + 2
            let leftChild, rightChild, swapIndex = null
            if(leftChildIndex < len) {
                leftChild = this.values[leftChildIndex]
                swapIndex = leftChildIndex
            }
            if(rightChildIndex < len) {
                rightChild = this.values[rightChildIndex]
                if((swapIndex === null && rightChild > parentValue) ||
                    (swapIndex !== null && rightChild > leftChild)) {
                        swapIndex = rightChildIndex
                    }
            }
            if(swapIndex === null) break
            [this.values[parentIndex], this.values[swapIndex]] 
                = [this.values[swapIndex], this.values[parentIndex]]
            parentIndex = swapIndex
        }
    }
}

let heap = new MaxBinaryHeap()
heap.maxBinaryHeapExtract()