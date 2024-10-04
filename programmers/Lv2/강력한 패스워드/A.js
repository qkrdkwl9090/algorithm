function solution(s) {
  if (s.length < 6 || s.length > 20) {
    return false;
  }

  let lower = false;
  let upper = false;
  let digit = false;
  let special = false;

  // 문자열 -> 문자 컬렉션 변환
  const specialChars = new Set("!@#$%^&*()");

  for (let c of s) {
    // 각 문자가 하나 이상 있는지 체크합니다.
    if (c >= "a" && c <= "z") {
      lower = true;
    } else if (c >= "A" && c <= "Z") {
      upper = true;
    } else if (c >= "0" && c <= "9") {
      digit = true;
    } else if (specialChars.has(c)) {
      special = true;
    }
    // 하나씩 발견되면 곧바로 종료합니다.
    if (lower && upper && digit && special) {
      break;
    }
  }

  if (!(lower && upper && digit && special)) {
    return false;
  }

  let repeat = 0;
  let ascend = 0;
  let descend = 0;

  // 연속된 문자가 3개 이상 있는지(repeat)
  // 증가/감소하는 문자/숫자가 있는지(ascend/descend)
  const chars = s.toLowerCase().split("");
  for (let i = 1; i < s.length; i++) {
    if (chars[i] === chars[i - 1]) {
      repeat++;
      ascend = 0;
      descend = 0;
    } else if (chars[i].charCodeAt(0) - chars[i - 1].charCodeAt(0) === 1) {
      ascend++;
      descend = 0;
      repeat = 0;
    } else if (chars[i].charCodeAt(0) - chars[i - 1].charCodeAt(0) === -1) {
      descend++;
      ascend = 0;
      repeat = 0;
    } else {
      ascend = 0;
      repeat = 0;
    }

    if (repeat === 2 || ascend === 2 || descend === 2) {
      return false;
    }
  }

  return true;
}
