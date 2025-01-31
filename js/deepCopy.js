function getNotObjConditon(obj) {
  const notObjCondition =
    // Array.isArray(obj) ||
    obj === null ||
    // obj instanceof Date ||
    // obj instanceof RegExp ||
    // obj instanceof Map ||
    // obj instanceof Set ||
    // obj instanceof WeakMap ||
    // obj instanceof WeakSet ||
    // typeof obj === 'symbol' ||
    typeof obj !== 'object'

  return notObjCondition
}

// function determineArrType(obj) {
//   const arrType = Array.isArray(obj) || obj instanceof Set
//   return arrType
// }

function getObjectKey(obj) {
  console.log('3333', obj)
  // const target = determineArrType(obj) ? [...obj] : obj
  const objArr = Object.entries(obj)
  return objArr
}

function makeUpObj(objKeyArr, obj) {
  const result = {}
  console.log('objKeARR', objKeyArr)

  objKeyArr.forEach(([key, value], index) => {
    console.log('objE', key, value)
    result[key] = deepCopyMainFnc(value)
  })

  return result
}

function deepCopyConstructor(obj) {
  const result = new obj.constructor([...obj])
  return result
}

function deepCopySet(obj) {
  const result = new Set([...obj])
  return result
}

function deepCopyMap(obj) {
  console.log('map', obj)
  const result = new Map(obj)
  return result
}

// function

export function deepCopyMainFnc(obj) {
  const objTypeStatus = getNotObjConditon(obj)
  if (objTypeStatus) return obj
  function determineObjFnc() {
    if (Array.isArray(obj)) {
      return deepCopyConstructor(obj)
    } else if (obj instanceof Set) {
      return deepCopyConstructor(obj)
    } else if (obj instanceof Map) {
      return deepCopyConstructor(obj)
    } else {
      const objKeysArr = getObjectKey(obj)
      return makeUpObj(objKeysArr)
    }
  }

  return determineObjFnc(obj)

  // const objKeyArr = getObjectKey(obj)
  // return makeUpObj(objKeyArr, obj)
}
