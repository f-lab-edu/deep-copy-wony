export function DeepCopyFnc(obj) {
  // 복사 될 객체를 담을 변수 선언
  const result = {}
  // 파라미터의 타입이 객체가 아니거나 null일 그대로 다시 반환하는 코드를 작성. 객체가 아니라는 이유로 에러를 일으킬 수 없기 때문에
  if (typeof obj !== 'object' || obj === null) return obj

  // 파라미터로 넘겨받은 객체의 key만 따로 뽑기 위한 코드
  const objKeys = Object.keys(obj)

  objKeys.map((objKey, index) => {
    // 객체의 값 중 배열인 경우와 그렇지 않은 경우를 조건문을 통해 구분, 이 조건을 하지 않을 경우 배열로 복사되어야 할 값이 객체로 복사된다.
    Array.isArray(obj[objKey])
      ? (result[objKey] = Object.values(DeepCopyFnc(obj[objKey])))
      : (result[objKey] = DeepCopyFnc(obj[objKey]))
  })

  return result
}
