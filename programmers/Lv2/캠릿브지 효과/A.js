function solution(s, t) {
  var answer = true;
  const sSplit = s.split(" ");
  const tSplit = t.split(" ");
  sSplit.forEach((item, i) => {
    if (!answer) return false;
    const last = item.length - 1;
    if (sSplit[i][0] != tSplit[i][0] || sSplit[i][last] != tSplit[i][last])
      answer = false;
    else answer = true;
  });
  return answer;
}
