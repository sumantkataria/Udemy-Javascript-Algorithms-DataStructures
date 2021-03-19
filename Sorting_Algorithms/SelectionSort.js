const selectionSort = (arr) => {

    let len = arr.length, min
    for(let i=0; i<len; i++) {
        min = i
        for(let j=i+1; j<len; j++) {
            if(arr[j] < arr[min]) min = j
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}