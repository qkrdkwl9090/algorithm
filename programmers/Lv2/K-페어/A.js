function solution(param0) {
  let maxK = 0;
  const dataSet = new Set(param0.filter((data) => data < 0));

  param0
    .filter((data) => data > 0)
    .forEach((data) => {
      if (dataSet.has(-data)) {
        maxK = Math.max(maxK, data);
      }
    });
  return maxK;
}
