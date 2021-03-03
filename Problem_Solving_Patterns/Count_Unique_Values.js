/**
 * Mutiple Pointer Pattern
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,12,12,14]) // 7
 */
const countUniqueValues = (arr) => {
    if(arr.length > 0) {
        let left = 0, right = 1, diff
        while(right <= arr.length - 1) {
          diff = arr[right] - arr[left]
          if(diff === 0){
            right++
          } else if(diff > 0) {
            arr[++left] = arr[right];right++
          }
        }
        return ++left
      } else {
        return 0
      }
}