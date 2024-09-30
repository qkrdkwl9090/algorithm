function solution(n) {
  let mul2 = 0,
    mul3 = 0,
    mul5 = 0;
  let dp = new Array(n);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    let valMul2 = 2 * dp[mul2];
    let valMul3 = 3 * dp[mul3];
    let valMul5 = 5 * dp[mul5];

    // 2곱한거 3곱한거 5곱한것 중 가장 작은 것을 i번째 숫자로 확정
    dp[i] = Math.min(valMul2, valMul3, valMul5);

    // 아래 조건은 else if로 하면 안됩니다. 왜냐하면 여러 경우에 동시에 일치할 수 있기 때문!
    // ex) dp[mult2] = 6, dp[mult3] = 4, dp[mult5] = 3인 경우,
    // 2*dp[mult2]와 3*dp[mult3]가 같은 값이므로, 둘 다 인덱스가 변경되어야 함
    if (dp[i] === valMul2) {
      // dp[mul2]의 2배와 일치하는 값이라면, mul2를 다음 값으로 업데이트
      mul2++;
    }
    if (dp[i] === valMul3) {
      // dp[mul3]의 3배와 일치하는 값이라면, mul3를 다음 값으로 업데이트
      mul3++;
    }
    if (dp[i] === valMul5) {
      // dp[mul5]의 5배와 일치하는 값이라면, mul5를 다음 값으로 업데이트
      mul5++;
    }
  }
  return dp[n - 1];
}
solution(10);
