// 383. Ransom Note

var canConstruct = function (ransomNote, magazine) {
  let map = new Map();

  for (let key of magazine) {
    map.set(key, map.get(key) + 1 || 1);
  }

  for (let key of ransomNote) {
    if (!map.get(key)) return false;

    map.set(key, map.get(key) - 1);
  }

  return true;
};
