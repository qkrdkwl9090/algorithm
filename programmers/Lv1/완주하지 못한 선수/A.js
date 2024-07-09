function solution(participant, completion) {
  var answer = "";
  var p = participant.sort();
  var c = completion.sort();
  for (var i = 0; i < p.length; i++) {
    if (p[i] != c[i]) {
      answer += p[i];
      return answer;
    }
  }
}
