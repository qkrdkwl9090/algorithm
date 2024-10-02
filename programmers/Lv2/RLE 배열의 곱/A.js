function solution(s, t) {
  let idx1 = 0;
  let idx2 = 0;

  let result = [];

  while (idx1 < s.length || idx2 < t.length) {
    let minRep;
    let multVal;

    if (idx1 < s.length && idx2 < t.length) {
      // 더 짧은 반복을 기준으로 계산한다.
      minRep = Math.min(s[idx1][1], t[idx2][1]);
      multVal = s[idx1][0] * t[idx2][0];

      if (minRep === s[idx1][1]) {
        idx1++;
      } else {
        // 반복만큼 사용되었으니 제외
        s[idx1][1] -= minRep;
      }

      if (minRep === t[idx2][1]) {
        idx2++;
      } else {
        // 반복만큼 사용되었으니 제외
        t[idx2][1] -= minRep;
      }
    } else if (idx1 < s.length) {
      minRep = s[idx1][1];
      multVal = s[idx1][0];
      idx1++;
    } else {
      minRep = t[idx2][1];
      multVal = t[idx2][0];
      idx2++;
    }

    if (result.length > 0 && multVal === result[result.length - 1][0]) {
      // 이전 값과 같다면 이전 값에 결합
      result[result.length - 1][1] += minRep;
    } else {
      // 새로운 값 추가
      result.push([multVal, minRep]);
    }
  }

  return result;
}
