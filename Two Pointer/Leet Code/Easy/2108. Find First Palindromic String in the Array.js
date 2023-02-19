// 2108. Find First Palindromic String in the Array

const palindrome = (str) => {
  let left = 0,
    right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

var firstPalindrome = function (words) {
  let start = 0,
    end = words.length - 1;
  while (start <= end) {
    if (palindrome(words[start])) {
      return words[start];
    }

    start++;
  }

  return "";
};

console.log(firstPalindrome(["adaa", "dsad"]));

console.log(firstPalindrome(["adaa", "dad"]));
