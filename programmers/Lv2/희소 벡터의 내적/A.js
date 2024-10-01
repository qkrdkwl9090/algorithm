function solution(x, y) {
  x.sort((a, b) => a[0] - b[0]);
  y.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let j = 0;
  let inner = 0;

  while (i < x.length && j < y.length) {
    if (x[i][0] === y[j][0]) {
      inner += x[i][1] * y[j][1];
    }
    if (x[i][0] < y[j][0]) {
      i++;
    } else {
      j++;
    }
  }
  return inner;
}
