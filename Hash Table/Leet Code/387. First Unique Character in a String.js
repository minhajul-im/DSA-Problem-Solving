// 387. First Unique Character in a String

var firstUniqChar = function (s) {
  let map = new Map();

  for (let char of s) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (let char of s) {
    if (map.get(char) === 1) {
      return s.indexOf(char);
    }
  }

  return -1;
};
