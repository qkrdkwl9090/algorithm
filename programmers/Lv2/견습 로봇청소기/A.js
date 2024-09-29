const directions = [
  [0, 1], // 오른쪽
  [1, 0], // 아래쪽
  [0, -1], // 왼쪽
  [-1, 0], // 위쪽
];

function solution(board) {
  let i = 0;
  let j = 0;
  let dir = 0;
  const visited = new Map();

  const N = board.length;
  const M = board[0].length;
  const D = directions.length;

  // 같은 위치, 같은 방향이 나온적이 없다면 계속 진행
  while (!(visited.has(`${i},${j}`) && visited.get(`${i},${j}`)[dir])) {
    // 새로운 위치라면 visited에 추가
    if (!visited.has(`${i},${j}`)) {
      // 4방향에 대해서 각각 visited 여부
      visited.set(`${i},${j}`, new Array(D).fill(false));
    }
    visited.get(`${i},${j}`)[dir] = true;

    const newI = i + directions[dir][0];
    const newJ = j + directions[dir][1];

    // 새 위치에 갈 수 있으면 이동, 불가하면 90도 회전
    if (
      newI >= 0 &&
      newI < N &&
      newJ >= 0 &&
      newJ < M &&
      board[newI][newJ] === 0
    ) {
      i = newI;
      j = newJ;
    } else {
      dir = (dir + 1) % D;
    }
  }

  return visited.size;
}
