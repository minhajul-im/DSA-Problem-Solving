//1332. Remove Palindromic Subsequences

var removePalindromeSub = function (str) {
  let fast = 0,
    last = str.length - 1;

  while (fast <= last) {
    if (str[fast++] !== str[last--]) {
      return 2;
    }
  }

  return 1;
};

let s = "ababa";

removePalindromeSub(s);
