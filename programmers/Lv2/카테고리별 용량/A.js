const musics = new Set(["mp3", "aac", "flac"]);
const images = new Set(["jpg", "bmp", "gif"]);
const movies = new Set(["mp4", "avi", "mkv"]);

function solution(strings) {
  let answer = [0, 0, 0, 0];

  for (let string of strings) {
    const data = string.split(" ")[1].slice(0, -1);
    const split = string.split(" ")[0].split(".");
    const ext = split[split.length - 1];

    if (musics.has(ext)) {
      answer[0] += Number(data);
    } else if (images.has(ext)) {
      answer[1] += Number(data);
    } else if (movies.has(ext)) {
      answer[2] += Number(data);
    } else {
      answer[3] += Number(data);
    }
  }
  console.log(answer);

  return answer;
}
