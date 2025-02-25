const checkTypeArr = target => Array.isArray(target)
const copyTypeArr = target => new Array(...target)

const checkTypeDate = target => target instanceof Date
const copyTypeDate = target => new Date(target)

const checkTypeRegExp = target => target instanceof RegExp
const copyTypeRegExp = target => new RegExp(target)

const checkTypeMap = target => target instanceof Map
const copyTypeMap = target => new Map(target)

const checkTypeSet = target => target instanceof Set
const copyTypeSet = target => new Set(target)

const checkJson = target => typeof target === 'object'
const copyJson = target => copyJsonObj(target)

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

const objActionList = [
  { check: checkTypeArr, copy: copyTypeArr },
  { check: checkTypeDate, copy: copyTypeDate },
  { check: checkTypeRegExp, copy: copyTypeRegExp },
  { check: checkTypeMap, copy: copyTypeMap },
  { check: checkTypeSet, copy: copyTypeSet },
  { check: checkJson, copy: copyJson },
]

function copyTarget(target) {
  for (const { check, copy } of objActionList) {
    if (check(target)) return copy(target)
  }
}

export function deepCopyMainFnc(target) {
  return copyTarget(target) ? copyTarget(target) : target
}
