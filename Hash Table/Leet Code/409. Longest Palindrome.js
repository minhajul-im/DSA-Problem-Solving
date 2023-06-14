// 409. Longest Palindrome

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  const map = {};

  let count = 0;

  for (let l of s) {
    if (map[l]) {
      count += 2;

      map[l] = null;
    } else {
      map[l] = 1;
    }
  }

  return s.length > count ? count + 1 : count;
};

let s = "abccccdd";

console.log(longestPalindrome(s));
