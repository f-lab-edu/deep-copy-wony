const checkTypeArr = obj => {
  return Array.isArray(obj)
}
const checkTypeDate = obj => {
  return obj instanceof Date
}
const checkTypeRegExp = obj => {
  return obj instanceof RegExp
}
const checkTypeMap = obj => {
  return obj instanceof Map
}
const checkTypeSet = obj => {
  return obj instanceof Set
}

function getNotObjConditon(obj) {
  const notObjCondition = obj === null || typeof obj !== 'object'

  return notObjCondition
}

function getObject(obj) {
  const objArr = Object.entries(obj)
  return objArr
}

function makeUpObj(objArr) {
  const result = {}
  objArr.forEach(([key, value]) => {
    result[key] = deepCopyMainFnc(value)
  })

  return result
}

function getConstructorDecision(obj) {
  const constructorDeciision =
    checkTypeArr(obj) ||
    checkTypeDate(obj) ||
    checkTypeMap(obj) ||
    checkTypeRegExp(obj) ||
    checkTypeSet(obj)

  return constructorDeciision
}

function CopyConstructor(obj) {
  const result = checkTypeArr(obj)
    ? new obj.constructor(...obj) //obj타입이 Array일 경우 스프레드 연산자를 사용함. 사용하지 않을 경우 반환될 때 이중배열로 반환됨.
    : new obj.constructor(obj) // obj 타입의 새로운 객체를 생성하는 방법.

  return result
}

function determineObjFnc(obj) {
  const constructorStaus = getConstructorDecision(obj)

  if (constructorStaus) {
    return CopyConstructor(obj)
  } else {
    const objKeysArr = getObject(obj)
    return makeUpObj(objKeysArr)
  }
}

export function deepCopyMainFnc(obj) {
  console.log('obj@@', obj)
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
