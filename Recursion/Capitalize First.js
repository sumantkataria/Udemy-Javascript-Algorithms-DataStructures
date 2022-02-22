function capitalizeFirst (arr) {
    if(arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].substr(1)]
    let output = capitalizeFirst(arr.slice(0, -1))
    output.push(arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1))
    return output
  }
  
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  