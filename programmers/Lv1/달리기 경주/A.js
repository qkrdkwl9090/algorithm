function solution(players, callings) {
  // 선수 이름을 key, 현재 등수를 value로 가지는 Map 생성
  let playerMap = new Map();
  for (let i = 0; i < players.length; i++) {
    playerMap.set(players[i], i);
  }

  for (let i = 0; i < callings.length; i++) {
    let calledPlayer = callings[i];
    let currentRank = playerMap.get(calledPlayer);

    // 추월한 선수와 현재 선수의 위치를 바꾼다.
    let frontPlayer = players[currentRank - 1];
    players[currentRank - 1] = calledPlayer;
    players[currentRank] = frontPlayer;

    // Map에서도 위치를 갱신
    playerMap.set(calledPlayer, currentRank - 1);
    playerMap.set(frontPlayer, currentRank);
  }

  return players;
}
