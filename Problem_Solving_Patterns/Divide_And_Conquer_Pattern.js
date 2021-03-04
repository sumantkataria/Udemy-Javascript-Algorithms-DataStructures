/**
 * Divide & Conquer pattern
 * Binary search
 */
const binarySearch = (array, val) => {
    let min = 0, middle
    let max = array.length - 1

    while (min <= max) {
      
      middle = Math.floor((min+max)/2)
      if(array[middle] < val) {
        min = middle + 1
      } else if(middle > val) {
        max = middle - 1
      } else {
        return middle
      }
    }
    return -1

}