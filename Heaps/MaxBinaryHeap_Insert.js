class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    maxBinaryHeapInsert (nodeValue) {
        this.values.push(nodeValue)
        this.bubbleUp()
    }

    bubbleUp () {
        let index = this.values.length - 1
        const element = this.values[index]
        while(index > 0) {
            let parentIndex = ~~((index-1)/2)
            let parentValue = this.values[parentIndex]
            if(element <= parentValue) break
            this.values[parentIndex] = element
            this.values[index] = parentValue
            index = parentIndex
        }
    }
}

let heap = new MaxBinaryHeap()
heap.maxBinaryHeapInsert(55)