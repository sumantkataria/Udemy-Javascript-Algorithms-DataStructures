function flatten(arr) {
    let output = []
    for(let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])) {
            output = output.concat(flatten(arr[i]))
        } else {
            output.push(arr[i])
        }
    }
    return output
}
  
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]