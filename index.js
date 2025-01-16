import { DeepCopyFnc } from './js/deepCopy.js'

const obj = {
  num: 123,
  str: 'abc',
  arr: ['a', 1, 'b', '2'],
  obj: {
    title: 'deepcopy',
    content: 'create',
    innerArr: [1, 2, 3, 4, 5],
    innerObj: {
      innerTitle: 'innerDeep',
    },
  },
}

const resultCopy = DeepCopyFnc(obj)

resultCopy.obj.title = 'test'
resultCopy.num = 456
resultCopy.arr[3] = '333'
resultCopy.obj.innerArr.push(100)
resultCopy.obj.innerObj.innerTitle = 'inner 결과'

console.log('original : ', obj)
console.log('deep copy : ', resultCopy)

console.log('is this real deepCopy no2 : ', obj === resultCopy)
