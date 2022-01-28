/**
 * Multiple Pointer pattern
 * isSubsequence("hello", "hello string") // true
 * isSubsequence("abc", "acb") // false
 * 
 */
function isSubsequence(str1, str2) {
    let ptr1 = 0, ptr2 = 0
    if(ptr1.length === 0) return true
    while(ptr2 < str2.length) {
    	if(str1[ptr1] === str2[ptr2]) ptr1++
    	if(ptr1 === str1.length) return true
    	ptr2++
    }
    return false
}

isSubsequence("sing", "sting")