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

    BFSTraversal (start) {
        let queue = [start], result = [], visited = {}, current
        visited[start] = true
        while(queue.length) {
             current = queue.shift()
             result.push(current)
             this.adjacencyList[current].forEach(neighbor => {
                 if(!visited[neighbor]) {
                     visited[neighbor] = true
                     queue.push(neighbor)
                 }
             })
        }
        return result
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
g.addEdge('Kolkata', 'Chennai')
g.addEdge('Mumbai', 'Kolkata')
g.addEdge('Bangalore', 'Hyderabad')
g.addEdge('Chennai', 'Hyderabad')
g.addEdge('Delhi', 'Chandigarh')
g.BFSTraversal('Delhi')