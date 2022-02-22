function collectStrings(jsonArray, output = []) {
    for(let i=0; i<Object.keys(jsonArray).length; i++) {
      if(typeof Object.values(jsonArray)[i] === 'object') {
        output = output.concat(collectStrings(Object.values(jsonArray)[i]))
      } else if(typeof Object.values(jsonArray)[i] === 'string') {
        output.push(Object.values(jsonArray)[i].toString())
      }
    }
    return output
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])