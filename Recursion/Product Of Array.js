// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
const productOfArray = (arr) => {
    if(arr.length === 1) return arr[0]
    return arr[0]*productOfArray(arr.slice(1))
}