// Normal Recursive solution
function fib (n) {
    if(n <= 2) return 1
    return fib(n-1) + fib(n-2)
}
// Big O - O(2^n)

// Memoization solution
function fib (n, memo = []) {
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1
    let res =  fib(n-1, memo) + fib(n-2, memo)
    memo[n] = res
    return res
}
// Big O - O(n)
// Issue - fib(10000) - Call stack size exceeds error

// Tabulation solution(better space complexity)
function fib (n) {
    if(n <= 2) return 1
    let fibNumbers = [0, 1, 1]
    for(let i=3; i<=n; i++) {
        fibNumbers[i] = fibNumbers[i-1] + fibNumbers[i-2]
    }
    return fibNumbers[n]
}
// Big O - O(n)