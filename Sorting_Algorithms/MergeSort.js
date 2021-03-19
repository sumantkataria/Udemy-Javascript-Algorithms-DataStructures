const mergeSort = (arr) => {

    if(arr.length <= 1) return arr
    let mid = ~~(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

const merge = (arr1, arr2) => {

    let results = [], i = 0, j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
        results.push(arr1[i]);i++
        } else {
        results.push(arr2[j]);j++
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i]);i++
    }
    while(j < arr2.length) {
        results.push(arr2[j]);j++
    }
    return results
}

mergeSort([20, 15, 30, 10, 25, 5])