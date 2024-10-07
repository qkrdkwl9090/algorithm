function solution(s) {
  let sb = [];
  s = s.trimStart();
  const chars = s.split("");
  for (let i = 0; i < s.length; i++) {
    // 맨 앞에 부호가 올 경우, 해당 부호를 가장 먼저 넣는다.
    if (chars[i] === "-" || chars[i] === "+") {
      sb.push(chars[i]);
    }
    // 숫자가 한번 등장하면, 숫자가 나오지 않을때까지 진행
    if (chars[i] >= "0" && chars[i] <= "9") {
      // 리딩 제로가 나올 경우 모두 제거
      // 리딩 제로를 제거하는 이유는 문자열의 길이를 활용하기 위해서이다.
      while (i < chars.length && chars[i] === "0") {
        i++;
      }
      // 리딩 0 이후에 숫자가 나오지 않으면 답은 0이다.
      if (!(chars[i] >= "0" && chars[i] <= 9)) {
        return 0;
      }
      // 연속된 숫자를 문자열에 담는다.
      // 핵심적인 문자열 부분을 받는 부분이다.
      while (i < chars.length && chars[i] >= "0" && chars[i] <= "9") {
        sb.push(chars[i]);
        i++;
      }
      return clipNum(sb.join(""));
    }
  }
}

const MIN_LEN = String(Number.MIN_SAFE_INTEGER).length;
const MAX_LEN = String(Number.MAX_SAFE_INTEGER).length;

function clipNum(s) {
  s = s.trimStart();
  let sign = 1;
  let result = 0;
  let i = 0;

  // 부호 처리
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }

  // 숫자 파싱
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + (s[i] - "0");
    i++;

    // 오버플로우 체크
    if (result * sign >= Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (result * sign <= -Math.pow(2, 31)) return -Math.pow(2, 31);
  }

  return result * sign;
}
