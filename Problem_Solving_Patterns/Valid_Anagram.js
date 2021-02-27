const validAnagram = (str1, str2) => {

    if(str1.length !== str2.length) return false
    
    let jsonArray1 = {}, jsonArray2 = {}
    for(let item of str1) {
      jsonArray1[item] = (jsonArray1[item] || 0) + 1
    }
    for(let item of str2) {
      jsonArray2[item] = (jsonArray2[item] || 0) + 1
    }
    for(let item in jsonArray1) {
      if(!(item in jsonArray2)) return false
      if(jsonArray2[item] !== jsonArray1[item]) return false
    }
    return true
  }