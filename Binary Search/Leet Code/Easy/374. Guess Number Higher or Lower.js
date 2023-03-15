// 374. Guess Number Higher or Lower

var guessNumber = function (n) {
  let s = 1;
  e = n;

  while (s <= e) {
    let mid = s + Math.trunc((e - s) / 2);

    let x = guess(mid);

    if (x === 0) return mid;
    if (x === -1) e = mid - 1;
    if (x === 1) s = mid + 1;
  }
};

let n = 10,
  pick = 6;

console.log(guessNumber(n, pick));
