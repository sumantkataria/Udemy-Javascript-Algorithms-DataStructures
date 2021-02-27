const handleClick = () => {

    let arr1 = [1,2,3,2,5], arr2 = [9,1,4,4,25]
    
    if(arr1.length !== arr2.length) return false

    let frequencyCounter1 = {}, frequencyCounter2 = {}
    for(let item of arr1) {
      frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1
    }
    for(let item of arr2) {
      frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1
    }
    for(let item in frequencyCounter1) {
      if(!(item*item in frequencyCounter2)) return false
      if(frequencyCounter2[item*item] !== frequencyCounter1[item]) return false
    }
    return true
}