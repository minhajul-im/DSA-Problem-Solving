// 1539. Kth Missing Positive Number

var findKthPositive = function (n, k) {
  let s = 0,
    m = 0;

  while (true) {
    s++;
    if (!n.includes(s)) m++;
    if (m === k) {
      return s;
    }
  }
};

const arr = [2, 3, 4, 7, 11],
  k = 5;

console.log(findKthPositive(arr, k));
