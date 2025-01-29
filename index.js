import { deepCopyMainFnc } from './js/deepCopy.js'

// const obj = [33]
const obj = {
  num: 123,
  str: 'bc',
  arr: ['a', 1, 'b', '2'],
  date: new Date(),
  obj: {
    title: 'deepcopy',
    content: 'create',
    innerArr: [1, 2, 3, 4, 5],
    innerObj: {
      innerTitle: 'innerDeep',
    },
  },
}

// const num = 3

// console.log('1번', deepCopyMainFnc(3))
// console.log('resultCoppy :', obj)

const resultCopy = deepCopyMainFnc(obj)

// resultCopy.obj.title = 'test'
// resultCopy.num = 456
// resultCopy.arr[3] = '333'
// resultCopy.obj.innerArr.push(100)
// resultCopy.obj.innerObj.innerTitle = 'inner 결과'

// console.log('original : ', obj)
// const dateV = new Date(resultCopy.date).getTime
console.log('deep copy : ', dateV)

// console.log('is this real deepCopy no2 : ', obj === resultCopy)

// console.log('ttest', deepCopyMainFnc(obj))

// console.log('coco', copyObj)
