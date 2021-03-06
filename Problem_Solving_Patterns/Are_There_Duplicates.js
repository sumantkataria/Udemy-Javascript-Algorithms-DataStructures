/**
 * Multiple Pointers Pattern/Set
 * areThereDuplicates(1, 2, 3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c' , 'a') // true
 */
const areThereDuplicates = (...numbers) => {
    return (new Set(numbers).length !== numbers.length)
  }