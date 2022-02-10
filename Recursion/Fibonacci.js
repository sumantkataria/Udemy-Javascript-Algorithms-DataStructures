// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num, sum, count=1, first=1,second=1) {
    if(num === count) return first
    return fib(num, sum = first + second, ++count, first = second, second = sum)
}

// Alternate Solution
// function fib(n) s{
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }