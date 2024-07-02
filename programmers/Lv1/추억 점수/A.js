function solution(name, yearning, photo) {
  const nameMap = new Map();
  name.forEach((item, index) => nameMap.set(item, yearning[index]));
  return photo.map((photos, index) => {
    return photos
      .map((item) => nameMap.get(item) || 0)
      .reduce((acc, cur, index) => (acc += cur), 0);
  });
}
