function solution(s, t) {
  // 같은 문자열이면 false
  if (s === t) {
    return false;
  }

  // 문자열 길이는 최대 1까지 차이날 수 있다.
  if (Math.abs(s.length - t.length) > 1) {
    return false;
  }

  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    // 다른 문자를 찾았으면 3가지 방법 확인
    if (s[i] !== t[i]) {
      // 문자 변환
      if (s.substring(i + 1) === t.substring(i + 1)) {
        return true;
      }
      // 문자 제거
      if (s.substring(i + 1) === t.substring(i)) {
        return true;
      }
      // 문자 추가
      if (s.substring(i) === t.substring(i + 1)) {
        return true;
      }
      return false;
    }
  }

  // 마지막 문자가 제거되거나, 마지막에 문자가 추가된 경우
  return Math.abs(s.length - t.length) === 1;
}
