function getNotObjConditon(obj) {
  const notObjCondition =
    Array.isArray(obj) ||
    obj === null ||
    obj instanceof Date ||
    obj instanceof RegExp ||
    obj instanceof Map ||
    obj instanceof Set ||
    obj instanceof WeakMap ||
    obj instanceof WeakSet ||
    typeof obj === 'symbol' ||
    typeof obj !== 'object'

  return notObjCondition
}

function getObjectKey(obj) {
  const objKeyArr = Object.keys(obj)

  return objKeyArr
}

function makeUpObj(objKeyArr, obj) {
  const result = {}
  objKeyArr.forEach(element => {
    result[element] = deepCopyMainFnc(obj[element])
  })

  return result
}

export function deepCopyMainFnc(obj) {
  const objTypeStatus = getNotObjConditon(obj)
  if (objTypeStatus) return obj

  const objKeyArr = getObjectKey(obj)
  return makeUpObj(objKeyArr, obj)
}
