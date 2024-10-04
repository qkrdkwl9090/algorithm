function solution(N, M) {
  // 일반적으로 직선이 지나는 정사각형의 개수 = N + M
  // 정확히 모서리가 맞아서 직선을 지나지 않는 경우의 수 = N과 M의 최대공약수
  return N + M - gcd(N, M);
}

// 유클리드 호제법을 이용한 최대공약수
function gcd(x, y) {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}
