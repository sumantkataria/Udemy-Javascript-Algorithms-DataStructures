# Udemy-Javascript-Algorithms-DataStructures
# Solution to various problems in Udemy for Algorithms &amp; Data Structures in JavaScript

# Data Structures are a way of Organising data that is stored in a computer or database
# Each type of Data structure represents a different way of organising the data
# Have big impact on how performant, quick & efficiently a program runs

# Big-O notation measures number of operations
# Space compexity -
# - Primitives are constant space.
# - Strings require O(n) space(where n is the string length)
# - Reference types are generally O(n), where n is the length(for arrays) or the number of keys(for objects)
# Big-O Cheat Sheet -  https://www.bigocheatsheet.com/
# Rules
    - Constants doesn't matter.
    - Smaller terms don't matter.
    - Arithmetic operations are constant.
    - Variable assignment is constant.
    - Accessing elements in an Array is constant.
    - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

# Objects - when ordering is not required, objects are excellent choice.
# Big O of Objects -
# 1. Insertion - O(1)
# 2. Removal - O(1)
# 3. Searching - O(N)
# 4. Access - O(1)
# Big O of Object Methods -
# 1. Object.keys - O(N)
# 2. Object.values - O(N)
# 3. Object.entries - O(N)
# 4. hasOwnProperty - O(1)

# Arrays -
# 1. Indexed in Order.
# 2. Insertion & Deletion can be expensive.
# 3. Can quickly be accessed at a specific index.
# Big O of Arrays -
# 1. Insertion - O(N) start of array, O(1) end of array
# 2. Removal - O(N) start of array, O(1) end of array
# 3. Searching - O(N)
# 4. Access - O(1)

# Problem Solving Patterns -
# 1. Frequency Counters -
# - This pattern uses objects or sets to collect values/frequencies of values
# - This can often avoid the need for O(n^2) operations with arrays/strings
# 2. Multiple Pointers -
# - Creating pointers or values that correspond to an index or position & move towards the beginning, end or middle based on a certain condition.
# - Very efficient for problem solving with minimal space complexity as well.
# 3. Sliding Window -
# - This pattern involves creating a pattern which can either be an array or number from one position to another.
# - Depending on a certain condition, the window either increases or closes(and a new window is created).
# - Very useful for keeping track of a subset of data in an array/string etc.
# 4. Divide & Conquer Pattern
# - This pattern involves dividing a data set into smaller chunks & then repeating a process with a subset of data.
# - This pattern can tremendously decrease time complexity.

# Searching
# - Searching is the process of finding item from the collection/list.

# Sorting
# -Sorting is the process of rearranging the items in the collection(e.g. an array) so that the items are in some kind of order.
# Bubble Sort - O(n^2)
# Insertion Sort - O(n^2)
# Selection Sort - O(n^2)
# Merge Sort - O(n*logn)
# Quick Sort - O(n*logn)
# Radix Sort - O(n*logn)
# Comparison - https://www.toptal.com/developers/sorting-algorithms

# Radix Sort - Sorts numbers only.

# Recursion -
# - Used in JSON.parse, JSON.stringify, document.getElementById & DOM traversal algorithms.
# - Used in Object traversals.

# Linked List - 
# Memory Management benefits-
# 1. Data does not have to be stored together.
# Features -
# 1. Do not have indexes.
# 2. Connected via nodes with a next pointer.
# 3. Random access not allowed.
# 4. Fast at Storing data & not retrieving
# 5. Maintain Head & Tail of LL
# 6. Add/Remove new Node to/from Head/Tail(Time Complexity - O(1))
# 7. Search Linked List(Time Complexity - O(n))
# 8. Useful for Deques

# BIG O - Singly Linked List -
# 1. Insertion - O(1)
# 2. Deletion - O(1) or O(n)
# 3. Searching - O(n)
# 4. Accessing - O(n)

# BIG O - Doubly Linked List -
# 1. Insertion - O(1)
# 2. Deletion - O(1)
# 3. Searching - O(n)
# 4. Accessing - O(n)

# Stacks -
# - LIFO(Last In First Out) data structure.
# - Can be implemented via Array.
# - push method to insert & pop method to remove
# - unshift method to insert & shift method to remove
# - not a built-in structure in Javascript

# BIG O - Stacks -
# 1. Insertion - O(1)
# 2. Deletion - O(1)
# 3. Searching - O(n)
# 4. Accessing - O(n)

# Queues -
# FIFO(First In First Out) data structure.
# - Can be implemented via Array.
# - push method to insert & shift method to remove
# - unshift method to insert & pop method to remove

# - BIG O - Queues -
# 1. Insertion - O(1)
# 2. Deletion - O(1)
# 3. Searching - O(n)
# 4. Accessing - O(n)

# Trees -
# Non-linear Data Structure that consists of nodes in a parent/child relationship. 
# Terminologies -
# 1. Root - Top node of a tree.
# 2. Child - Node directly connected to another node when moving away from the root.
# 3. Parent - converse notion of the child.
# 4. Siblings - group of nodes with the same parent.
# 5. Leaf - Node with no children.
# 6. Edge - connection between one node & another.
# Applications-
# 1. HTML DOM
# 2. Network Routing(broadcast)
# 3. Abstract syntax tree
# 4. Artifical Intelligence
# 5. Computer file system(Windows folder/file structure)
# 6. JSON structure
# Types -
# 1. Trees
# 2. Binary Trees(max 2 child nodes)
# 3. Binary Search Trees(special type of binary trees)(sorted)(left node is smaller than parent & every right node is greater than parent)

# BIG O - Binary Search Tree -
# 1. Insertion - O(log n)
# 2. Searching - O(log n)

# Tree Traversal -
# Applications - DFS -
# InOrder - Used commonly with BST.
# PreOrder - Used in export cases (where clone/duplicate tree or flatten it out & then import)

# Heaps -
# Special tree-based data structure in which the tree is a complete binary tree. 
# Types -
# 1. MaxBinaryHeap - Parent nodes are larger than the children. And left children are fille out first.
# 2. MinBinaryHeap - Parent nodes are smaller than the children.
# Storing heaps -
# - For any index of an array n...
# - Left child is stored at 2n + 1.
# - Right child is stored at 2n + 2.
# - For any child at index n...
# - It's parent is at index (n-1)/2.

# Priority Queues -
# - data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.
# - can be implemented via Heaps.
# BIG O - Binary Heaps -
# 1. Insertion - O(log n)
# 2. Deletion - O(log n)
# 3. Search - O(n)

# Hash Tables -
# - Access data quickly
# - used to store key-value pairs.
# - like arrays, but keys are not ordered.
# - very fast for all operations - finding values, adding new values & removing values.
# - JS has Objects & Maps.
# BIG O - Hash Tables -
# 1. Insertion - O(1)
# 2. Deletion - O(1)
# 3. Access - O(1)

# Graphs -
# - a DS consists of a finite set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.
# Applications -
# 1. Social networks
# 2. Location/mapping
# 3. Routing algorithms
# 4. Visual Hierarchy
# 5. File system optimizations
# Terms -
# 1. Vertex - a node
# 2. Edge - connection between nodes
# 3. Weighted/Unweighted - values assigned
# 4. Directed(insta)/Undirected(fb) - 
# Traversal uses -
# 1. Peer to peer networking
# 2. Web crawlers
# 3. Finding 'closest' matches/recommendations
# 4. Shortest path problems
#   -  GPS navigation
#   - Solving mazes
#   - AI(shortest path to win the game)

# Dijkstra's Algorithm -
# - finds the shortest path between 2 vertices on a graph
# Uses -
# 1. GPS - finding fastest route.
# 2. Network routing - finds open shortest path for data
# 3. Biology - used to model the spread of viruses among humans
# 4. Airline tickets - finding cheapest route to your destination.

# Dynamic Programming -
# - method for solving complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once & storing their solutions.
# Used with problems having -
# 1. Optimal substructure - if an optimal solution can be constructed from optimal solutions of its subproblems
# 2. Overlapping subproblems - if it can be broken into subproblems that can be reused several times