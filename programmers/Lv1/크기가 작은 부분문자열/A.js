function solution(t, p) {
  const length = p.split("").length;
  const list = t.split("");
  var answer = 0;
  for (i = 0; i < list.length; i++) {
    let temp = "";
    for (j = 0; j < length; j++) {
      if (!t[i + j]) temp = null;
      else temp += t[i + j];
    }
    if (temp && temp <= p) answer++;
  }
  return answer;
}
