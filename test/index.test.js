import { deepCopyMainFnc } from '../js/deepCopy'

// tobe는 프리미티어 타입
// toEqual는 객체와 같은 참조 타입

describe('deepcopy check test', () => {
  test('원시 타입 복사', () => {
    const num = 123
    const copied = deepCopyMainFnc(num)
    expect(num).toBe(copied)
  })

  test('객체 복사', () => {
    const obj = { num: 123, obj: { objNum: 456, str: '가나다' } }
    const copied = deepCopyMainFnc(obj)
    copied.obj.str = '라마바'
    console.log('copied', copied)
    expect(copied).not.toBe(obj)
  })
  test('객체 안의 Date 복사', () => {
    const date = new Date()
    const copied = deepCopyMainFnc(date)
    copied.setFullYear(2030)
    console.log('date ex', date, '<====>', copied)
    expect(copied).not.toBe(date)
    // 수정한 날짜의 값 메모리가 확실히 바뀐 건지 확인하기 위함
  })
  test('정규식 복사', () => {
    const reg = new RegExp(/[^0-9]/)
    const copied = deepCopyMainFnc(reg)
    // copied.reg = new RegExp(/[^a-z]/)
    expect(copied).not.toBe(reg)
  })
  test('Map 복사', () => {
    const map = new Map([['name', '이방원']])
    const copied = deepCopyMainFnc(map)
    copied.set('22', 3)
    console.log('original', map, 'cccopied', copied)
    expect(copied).not.toBe(map)
  })
  test('Set 복사', () => {
    const setValue = new Set()
    const copied = deepCopyMainFnc(setValue)
    expect(copied).not.toBe(setValue)
  })
  test('Array 복사', () => {
    const arr = ['set', '이방원']
    // console.log('1111', setValue)
    const copied = deepCopyMainFnc(arr)
    expect(copied).not.toBe(arr)
  })
})
