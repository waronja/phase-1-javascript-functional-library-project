function myEach(testArr, alert) {
    Object.values(testArr).forEach(test => {
        alert(test)
    })
    return testArr;
}

function myMap(testArr, callback) {
    const objValues = Object.values(testArr);
    callback = objValues.map(test => test * 3)
    return callback;
}

function myReduce(collection, callback, acc) {
    const objValues = Object.values(collection)
    if (acc){
        let objtotal = objValues.reduce(function(previousValue, currentValue) {
            return previousValue + (currentValue * 3)
        },acc)
    return objtotal;
    }else {
        let objtotal = objValues.reduce(function(previousValue, currentValue) {
            return previousValue + (currentValue * 3)
    })
    return objtotal;
}
}

function myFind(testArr, target){
    testArr = Object.values(testArr)
    for(let i = 0; i < testArr.length; i++)
    if (target(testArr[i])) return testArr[i]
    return undefined
}

function myFilter(testArr, val) {
  let objValues = Object.values(testArr);
  return objValues.filter((num) => num > 10);
}

function mySize(testArr) {
    let objValues = Object.values(testArr)
    const newArr = new Set(objValues)
    return newArr.size;
}

function myFirst(testArr, n) {
    let objValues = Object.values(testArr)
    if (n) {
        return objValues.slice(0, n)
    }
    return objValues[0]
}

function myLast(testArr, n) {
    let objValues = Object.values(testArr)
    if (n) {
        return objValues.slice(-n)
    }
    let last = objValues.slice(-1)
    return last[0]
}

function myKeys(testArr) {
    return Object.keys(testArr)
}

function myValues(testArr) {
    return Object.values(testArr)
}