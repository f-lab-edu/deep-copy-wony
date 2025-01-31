import { deepCopyMainFnc } from '../js/deepCopy'

// tobe는 프리미티어 타입
// toEqual는 객체와 같은 참조 타입

describe('deepcopy check test', () => {
  // test('원시 타입 복사', () => {
  //   const num = 123
  //   const copied = deepCopyMainFnc(num)
  //   expect(num).toBe(copied)
  // })
  // test('null값 check', () => {
  //   const nullValue = null
  //   const copied = deepCopyMainFnc(nullValue)
  // })
  test('객체 복사', () => {
    const obj = { num: 123, obj: { objNum: 456, str: '가나다' } }
    const copied = deepCopyMainFnc(obj)
    console.log('copied', copied)
    copied.obj.str = '라마바'
    expect(copied).not.toEqual(obj)
    expect(copied.obj.objNum).toBe(obj.obj.objNum)
    expect(copied.obj.str).not.toBe(obj.obj.str)
  })
  // test('객체 안의 Date 복사', () => {
  //   const date = { date: new Date() }
  //   const copied = deepCopyMainFnc(date)
  //   const editDate = new Date(copied.date).getFullYear(2030)
  //   expect(editDate).not.toEqual(date)
  //   // 수정한 날짜의 값 메모리가 확실히 바뀐 건지 확인하기 위함
  // })
  // test('정규식 복사', () => {
  //   const reg = { reg: new RegExp(/[^0-9]/) }
  //   const copied = deepCopyMainFnc(reg)
  //   copied.reg = new RegExp(/[^a-z]/)
  //   expect(copied.reg).not.toEqual(reg.reg)
  // })
  test('Map 복사', () => {
    const map = new Map([['name', '이방원']])
    const copied = deepCopyMainFnc(map)
    copied.set('22', 3)
    console.log('original', map, 'cccopied', copied)
    // copied.set('like', 'jejus')
    // copied.map.set('like', 'jejus')
    expect(copied).not.toEqual(map)
  })
  test('Set 복사', () => {
    const arr = ['set', '이방원']
    const setValue = new Set(arr)
    console.log('1111', setValue)
    const copied = deepCopyMainFnc(setValue)
    copied.add('set추가')
    console.log('')
    console.log('첫번쩨', setValue, '<====> 두번째', copied)
    expect(copied).not.toEqual(setValue)
  })
  test('Array 복사', () => {
    const arr = ['set', '이방원']
    // console.log('1111', setValue)
    const copied = deepCopyMainFnc(arr)
    copied.push('fefefe')
    console.log('')
    console.log('첫번쩨', arr, '<====> 두번째', copied)
    expect(copied).not.toEqual(arr)
  })
})
