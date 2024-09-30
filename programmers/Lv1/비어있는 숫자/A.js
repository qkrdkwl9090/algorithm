function solution(param0) {
  let maxK = 0;
  for (const i of param0) {
    maxK = Math.max(maxK, i);
  }
  return maxK - param0.length;
}
