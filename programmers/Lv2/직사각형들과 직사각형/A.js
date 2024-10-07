function solution(heights) {
  let result = 0;
  const N = heights.length;

  const stack = [];
  stack.push([0, heights[0]]);

  const heightsAug = new Array(N + 1);
  for (let i = 0; i < N; i++) {
    heightsAug[i] = heights[i];
  }
  heightsAug[N] = 0;

  for (let i = 1; i < N + 1; i++) {
    let left = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heightsAug[i]) {
      const [index, height] = stack.pop();
      left = index;
      result = Math.max(result, height * (i - left));
    }
    stack.push([left, heightsAug[i]]);
  }

  return result;
}
