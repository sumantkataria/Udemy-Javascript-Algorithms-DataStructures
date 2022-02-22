function nestedEvenSum (jsonArray, count = 0) {
    for(let i=0; i<Object.keys(jsonArray).length; i++) {
        if(typeof Object.values(jsonArray)[i] === 'object') {
        count += nestedEvenSum(Object.values(jsonArray)[i])
        } else if(typeof Object.values(jsonArray)[i] === 'number' && Object.values(jsonArray)[i] %2 === 0) {
        count += Object.values(jsonArray)[i]
        }
    }
    return count
}
  
  
let obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
  
let obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10