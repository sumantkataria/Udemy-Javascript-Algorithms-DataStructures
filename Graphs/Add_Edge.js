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
}

let g = new Graph()
g.addVertex('Delhi')
g.addVertex('Mumbai')
g.addVertex('Chennai')
g.addVertex('Kolkata')
g.addVertex('Bangalore')
g.addVertex('Hyderabad')
g.addVertex('Chandigarh')