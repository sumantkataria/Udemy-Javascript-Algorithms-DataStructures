function stringifyNumbers (jsonArray) {
    let output = {}
    for(let i=0; i<Object.keys(jsonArray).length; i++) {
      if(typeof Object.values(jsonArray)[i] === 'object' && !Array.isArray(Object.values(jsonArray)[i])) {
        output[Object.keys(jsonArray)[i]] = stringifyNumbers(Object.values(jsonArray)[i])
      } else if(typeof Object.values(jsonArray)[i] === 'number') {
        output[Object.keys(jsonArray)[i]] = Object.values(jsonArray)[i].toString()
      } else {
        output[Object.keys(jsonArray)[i]] = Object.values(jsonArray)[i]
      }
    }
    return output
}
/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/