const typeArr = obj => {
  return Array.isArray(obj)
}
const typeDate = obj => {
  return obj instanceof Date
}
const typeRegExp = obj => {
  return obj instanceof RegExp
}
const typeMap = obj => {
  return obj instanceof Map
}
const typeSet = obj => {
  return obj instanceof Set
}
const typeWeakMap = obj => {
  return obj instanceof WeakMap
}
const typeWeakSet = obj => {
  return obj instanceof WeakSet
}

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
  objKeyArr.forEach(([key, value]) => {
    result[key] = deepCopyMainFnc(value)
  })

  return result
}

function getConstructorDecision(obj) {
  const constructorDeciision =
    typeArr(obj) ||
    typeDate(obj) ||
    typeMap(obj) ||
    typeRegExp(obj) ||
    typeSet(obj) ||
    typeWeakMap(obj) ||
    typeWeakSet(obj)

  return constructorDeciision
}

function deepCopyConstructor(obj) {
  const result = typeArr(obj)
    ? new obj.constructor(...obj)
    : new obj.constructor(obj)

  return result
}

function determineObjFnc(obj) {
  const constructorStaus = getConstructorDecision(obj)

  if (constructorStaus) {
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
