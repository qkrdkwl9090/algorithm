function solution(sequence, k) {
  let left = 0,
    right = 0;
  let sum = sequence[0];
  let minLength = Infinity;
  let result = [0, 0];

  while (right < sequence.length) {
    if (sum < k) {
      right++;
      if (right < sequence.length) {
        sum += sequence[right];
      }
    } else if (sum > k) {
      sum -= sequence[left];
      left++;
    } else {
      if (right - left < minLength) {
        minLength = right - left;
        result = [left, right];
      }
      sum -= sequence[left];
      left++;
    }
  }

  return result;
}
