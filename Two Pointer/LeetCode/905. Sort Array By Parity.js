var sortArrayByParity = function(num) {
  if (num.length === 0) return num;
  if (num.length === 1) return num;
  let fast = 0, last = 0, temp;
  
  while (fast < num.length) {
    if (num[fast] % 2 === 0) {
      temp = num[last];
      num[last] = num[fast];
      num[fast] = temp;
      last++;
    }
    fast++;
  }
  return num;
};