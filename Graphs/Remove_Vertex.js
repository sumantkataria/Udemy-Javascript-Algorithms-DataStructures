class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex (vertex) {
        if(this.adjacencyList[vertex]) {
            console.log('Error')
        } else {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge (vertex1, vertex2) {
        if(Object.keys(this.adjacencyList).length) {
                this.adjacencyList[vertex1].push(vertex2)
                this.adjacencyList[vertex2].push(vertex1)
        } else return undefined
    }

    removeEdge(vertex1, vertex2) {
        if(Object.keys(this.adjacencyList).length) {
            let index1 = this.adjacencyList[vertex1].indexOf(vertex2)
            if(index1 > -1) {
                this.adjacencyList[vertex1].splice(index1, 1)
            }
            let index2 = this.adjacencyList[vertex2].indexOf(vertex1)
            if(index2 > -1) {
                this.adjacencyList[vertex2].splice(index2, 1)
            }
        } else return undefined
    }

    removeVertex (vertex) {
        if(Object.keys(this.adjacencyList).length) {
            while(this.adjacencyList[vertex].length) {
                const vertex2 = this.adjacencyList[vertex].pop()
                this.removeEdge(vertex, vertex2)
            }
            delete this.adjacencyList[vertex]
        } else return undefined
    }
}

let g = new Graph()
g.addVertex('Delhi')
g.addVertex('Mumbai')
g.addVertex('Chennai')
g.addVertex('Kolkata')
g.addVertex('Bangalore')
g.addVertex('Hyderabad')
g.addVertex('Chandigarh')
g.addEdge('Delhi', 'Mumbai')
g.addEdge('Delhi', 'Chennai')
g.addEdge('Delhi', 'Kolkata')
g.addEdge('Mumbai', 'Chennai')
g.removeVertex('Delhi')