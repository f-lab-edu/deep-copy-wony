const copyTypeArr = target => Array.isArray(target) && new Array(...target)

const copyTypeDate = target => target instanceof Date && new Date(target)

const copyTypeRegExp = target => target instanceof RegExp && new RegExp(target)

const copyTypeMap = target => target instanceof Map && new Map(target)

const copyTypeSet = target => target instanceof Set && new Set(target)

const copyJson = target => typeof target === 'object' && copyJsonObj(target)

function checkTypeNotObj(target) {
  const notObjCondition = target === null || typeof target !== 'object'
  return notObjCondition
}

function getTargetArr(target) {
  const targetArr = Object.entries(target)
  return targetArr
}

function copyJsonObj(target) {
  const targetArr = getTargetArr(target)
  const result = {}
  targetArr.forEach(([key, value]) => {
    result[key] = deepCopyMainFnc(value)
  })

  return result
}

function copyTarget(target) {
  if (copyTypeArr(target)) return copyTypeArr(target)
  if (copyTypeDate(target)) return copyTypeDate(target)
  if (copyTypeRegExp(target)) return copyTypeRegExp(target)
  if (copyTypeMap(target)) return copyTypeMap(target)
  if (copyTypeSet(target)) return copyTypeSet(target)
  if (copyJson(target)) return copyJson(target)
}

export function deepCopyMainFnc(target) {
  const objTypeStatus = checkTypeNotObj(target)
  if (objTypeStatus) return target

  return copyTarget(target)
}
