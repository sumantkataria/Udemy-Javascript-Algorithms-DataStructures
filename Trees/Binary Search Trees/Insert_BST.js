class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    
    insertToTree (val) {
        let newNode = new Node(val)
        if(this.root === null) {
            this.root = newNode
            return this
        } else {
            this.iterateTree(this.root, newNode)
        }
        return this
    }

    iterateTree (currentNode, newNode) {

        if(currentNode.val < newNode.val && currentNode.right !== null) {
            // go to right node
            this.iterateTree(currentNode.right, newNode)
        } else if(currentNode.val > newNode.val && currentNode.left !== null) {
            // go to left node
            this.iterateTree(currentNode.left, newNode)
        } else if(currentNode.val < newNode.val) {
            // set to right node
            currentNode.right = newNode
        } else if(currentNode.val > newNode.val) {
            // set to left node
            currentNode.left = newNode
        } else {
            return undefined;
        }
    }
}

let tree = new BinarySearchTree()
tree.insertToTree(10)
tree.insertToTree(1)
tree.insertToTree(15)
tree.insertToTree(12)
tree.insertToTree(18)
tree.insertToTree(0)
tree.insertToTree(5)