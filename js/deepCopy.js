function getNotObjConditon(obj) {
  const notObjCondition = obj === null || typeof obj !== 'object'

  return notObjCondition
}

function getObjectKey(obj) {
  const objArr = Object.entries(obj)
  return objArr
}

function makeUpObj(objKeyArr) {
  const result = {}
  objKeyArr.forEach(([key, value], index) => {
    result[key] = deepCopyMainFnc(value)
  })

  return result
}

function deepCopyConstructor(obj) {
  const result = new obj.constructor(obj)
  return result
}

function getConstructorDecision(obj) {
  const constructorDeciision =
    Array.isArray(obj) ||
    obj instanceof Date ||
    obj instanceof RegExp ||
    obj instanceof Map ||
    obj instanceof Set ||
    obj instanceof WeakMap ||
    obj instanceof WeakSet

  return constructorDeciision
}

function determineObjFnc(obj) {
  const constructorStaus = getConstructorDecision(obj)
  if (constructorStaus === true) {
    return deepCopyConstructor(obj)
  } else {
    const objKeysArr = getObjectKey(obj)
    return makeUpObj(objKeysArr)
  }
}

export function deepCopyMainFnc(obj) {
  const objTypeStatus = getNotObjConditon(obj)
  if (objTypeStatus) return obj

  return determineObjFnc(obj)
}

// function deepCopySet(obj) {
//   const result = new Set([...obj])
//   return result
// }

// function deepCopyMap(obj) {
//   console.log('map', obj)
//   const result = new Map(obj)
//   return result
// }
