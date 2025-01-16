import { DeepCopyFnc } from '../js/deepCopy'

describe('deepcopy check test', () => {
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
        innerObjArr: [23, 3, 2, 4, 2],
        dobuleInnerObj: {
          dobuleInnerTitle: 'wow',
        },
      },
    },
  }

  const resultCopy = DeepCopyFnc(obj)

  resultCopy.obj.title = 'test'
  resultCopy.num = 456
  resultCopy.arr[3] = '333'
  resultCopy.obj.innerArr.push(100)
  resultCopy.obj.innerObj.innerTitle = 'inner 결과'
  resultCopy.obj.innerObj.dobuleInnerObj.dobuleInnerTitle = 'wow wow wow'
  resultCopy.obj.innerObj.innerObjArr[4] = 10000

  test('obj와 resultcopy는 다르다', () => {
    expect(obj).not.toEqual(resultCopy)
  })
})
