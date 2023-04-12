const palindromeRecursion = (str, left = 0, right = str.length - 1) => {
  // base case
  if (left >= right) return true;

  //operation
  if (str.length <= 1) return true;

  if (str[left] === str[right]) {
    return palindromeRecursion(str, left + 1, right - 1);
  } else return false;
};

console.log(palindromeRecursion("m"));
console.log(palindromeRecursion("hello"));
console.log(palindromeRecursion("madam"));
