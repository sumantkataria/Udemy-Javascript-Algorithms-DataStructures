/**
 * Sliding Window pattern
 * maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
 * maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5 
 * maxSubarraySum([100,200,300,400], 2) // 700
 */
function maxSubarraySum(arr, num) {
    if(!arr.length || arr.length < num || num < 1) return null
    let maxSum = 0, tempSum = 0
    for(let i=0; i<num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i=num; i<arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)