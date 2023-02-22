//922. Sort Array By Parity II

var sortArrayByParityII = function (num) {
  let arr = [],
    a = 1,
    b = 0,
    x = 0;
  while (x < num.length) {
    if (num[x] % 2 === 0) {
      arr[b] = num[x];
      b += 2;
    } else {
      arr[a] = num[x];
      a += 2;
    }
    x++;
  }
  return arr;
};

let nums = [4, 2, 5, 7];

sortArrayByParityII(nums);
