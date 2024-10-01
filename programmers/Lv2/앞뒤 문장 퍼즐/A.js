function solution(phrases) {
  const heads = new Map();
  const tails = new Map();

  for (const phrase of phrases) {
    const phraseSplit = phrase.split(" ");
    const h = phraseSplit[phraseSplit.length - 1];
    const t = phraseSplit[0];

    if (!heads.has(h)) {
      heads.set(h, []);
    }
    if (!tails.has(t)) {
      tails.set(t, []);
    }
    heads.get(h).push(phrase);
    tails.get(t).push(phrase);
  }
  const result = [];
  for (const h of heads.keys()) {
    for (const head of heads.get(h)) {
      // 앞부분의 마지막 단어와 일치하는 뒷부분 첫단어가 있을 경우 진행
      if (!tails.has(h)) {
        continue;
      }
      for (const tail of tails.get(h)) {
        const sb = [];
        sb.push(head);

        const tailSplit = tail.split(" ");
        // 첫 단어는 겹치는 단어이므로 제외하고 두 번째 단어부터 이어 붙인다.
        for (let i = 1; i < tailSplit.length; i++) {
          sb.push(tailSplit[i]);
        }
        result.push(sb.join(" "));
      }
    }
  }
  return result.sort();
}
