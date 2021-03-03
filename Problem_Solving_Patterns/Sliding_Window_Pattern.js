/**
 * Sliding Window Pattern
 * e.g. find longest sequence of unique chars without repetition
 * e.g. "hellothere" // lother
 * maxSubarraySum([1,2,5,2,8,1,5], 2) //10 -> 2,8
 * maxSubarraySum([1,2,5,2,8,1,5], 4) //17 -> 2,5,2,8
 * maxSubarraySum([4,2,1,6], 1) //6 -> 6
 * maxSubarraySum([4,2,1,6,2], 4) //13 -> 4,2,1,6
 * maxSubarraySum([], 4) //null
 * Logic - Add first n digits. Then add next n digits & subtract first digit from sum & add last+1 digit in Sum.
 * And then keep comparing to get max sum of n digits  
 */
const maxSubarraySum = (arr, num) => {
    if(num > arr.length) return null

    let maxSum = 0, tempSum = 0
    for(let i=0; i<num; i++) maxSum += arr[i]
    tempSum = maxSum

    for(let i=num; i<arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i]
      maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}