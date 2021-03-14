// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num, sum, count = 1, first = 0, second = 1) {
    if(num === count) return second
    sum = first + second; first = second; second = sum 
    return fib(num, sum, ++count, first, second)
}

// Alternate Solution
// function fib(n) s{
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }