function solution(arr, target) {
  const N = arr.length;
  let closestDiff = Infinity;
  let result = 0;

  arr.sort((a, b) => a - b);

  // left를 고정한 상태로, mid와 right를 투포인터 알고리즘을 사용
  for (let left = 0; left < N - 2; left++) {
    // left를 하나 이동시켜도 똑같다면
    // 그 left는 굳이 확인 X
    if (left > 0 && arr[left] === arr[left - 1]) {
      continue;
    }
    // mid는 left+1부터 하나씩 증가
    let mid = left + 1;
    // right는 N-1부터 하나씩 감소
    let right = N - 1;
    while (mid < right) {
      const currSum = arr[left] + arr[mid] + arr[right];
      const diff = Math.abs(target - currSum);

      if (diff < closestDiff) {
        // 더 가까운 경우가 발생하면 업데이트
        closestDiff = diff;
        result = currSum;
      } else if (diff === closestDiff && result > currSum) {
        // 같은 거리라면, 더 작은 것을 답안 처리
        result = currSum;
      }

      // 타겟보다 작으면 mid를 증가시킨다.
      if (currSum < target) {
        mid++;
      }
      // 타겟보다 작으면 right를 감소시킨다.
      else if (currSum > target) {
        right--;
      }
      // 타겟과 일치하면 곧바로 종료
      else {
        return target;
      }
    }
  }
  return result;
}
