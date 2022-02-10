/**
 * Multiple Pointers Pattern
 * Given Sorted Array
 * Check if average of a pair matches with the number
 * averagePair([1,2,3], 2.5) // true
 * averagePair([1,2,3,5,6,7,10,12,19], 8) // true
 * averagePair([-1,0,3,4,5,6], 4.1) // false
 * averagePair([], 4) // false
 */
const averagePair = (arr, val) => {
    if(arr.length === 0) return false
    let start = 0, end = arr.length - 1, avg
    while(start < end) {
      avg = (arr[start] + arr[end])/2
      if(avg === val) {
        return true
      } else if(avg > val) {
        end--
      } else {
        start++
      }
    }
    return false
}