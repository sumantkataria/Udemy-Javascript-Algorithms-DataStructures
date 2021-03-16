function binarySearch(arr, val) {

    let start = 0, end = arr.length-1, mid = ~~((start+end)/2)  
    while(start <= end) {
        if(arr[mid] === val) {
            return mid
        }
        else if(arr[mid] > val) {
            start = start+1; end = mid-1; mid = ~~((start+end)/2);
        }
        else {
            start = mid+1; mid = ~~((start+end)/2);
        }
    }
    return -1
}

//binarySearch([1,2,3,4,5],2) // 1
//binarySearch([1,2,3,4,5],3) // 2
//binarySearch([1,2,3,4,5],5) // 4
//binarySearch([1,2,3,4,5],6) // -1
