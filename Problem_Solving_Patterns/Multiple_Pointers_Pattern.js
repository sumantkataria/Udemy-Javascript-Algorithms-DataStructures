/**
 * Sum Zero
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 * sumZero([1,2,3]) // undefined
 */
const sumZero = (arr) => {
    let left = 0, right = arr.length - 1, sum
    while(left < right) {
      sum = arr[left] + arr[right]
      if(sum === 0){
        return [arr[left], arr[right]]
      } else if(sum > 0) {
        right--
      } else {
        left++
      }
    }
    return undefined
}