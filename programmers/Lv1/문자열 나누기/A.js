function solution(s) {
  let first = s.substr(0, 1);
  let xcount = 0,
    count = 0;
  let index = 0;
  let result = 1;

  for (item of s) {
    if (item === first) xcount++;
    else count++;
    if (xcount === count) {
      xcount = 0;
      count = 0;
      const temp = index;
      first = s[temp + 1];
      if (!first) return result;

      result++;
    }
    index++;
  }
  return result;
}
