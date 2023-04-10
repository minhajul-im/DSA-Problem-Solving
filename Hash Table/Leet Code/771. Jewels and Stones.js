var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    let x = jewels[i];
    for (let i = 0; i < stones.length; i++) {
      if (x === stones[i]) {
        count++;
      }
    }
  }
  return count;
};

let jewel = "z",
  stone = "ZZ",
  jewels = "aA",
  stones = "aAAbbbb";
console.log(numJewelsInStones(jewel, stone));
console.log(numJewelsInStones(jewels, stones));
