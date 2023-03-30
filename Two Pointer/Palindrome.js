// check is palindrome or not palindrome
const palindrome = (str) => {
  let left = 0, right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++; right--;
  }
  return true;
}

console.log(palindrome('madam'))


// check   is palindrome or not palindrome
const palindromeFor = (str) => {
  let temp;
  for (let i = 0, j = str.length - 1; i <= j; i++, j--){
    if (str[i] === str[j]) {
      temp = true;
    } else {
      return false;
    }
  }
  return true;
}
console.log(palindromeFor('mom'))
console.log(palindromeFor('wow'))
console.log(palindromeFor('minhaj'))


const arr = ['minhaj','john', 'ada', 'hello', 'mom', 'wow', 'titt', 'dad'];

// find first palindrome in the array.
const findFirstPalindrome = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (palindrome(arr[i])) {
      return arr[i];
    }
  }
  return false;
}

console.log(findFirstPalindrome(arr))


// how many palindromes are in the array.
const countPalindrome = (arr) => {
  let count = 0, start = 0, end = arr.length - 1;

  while (start <= end) {
    if (palindromeFor(arr[start])) {
      count++;
    }
     start++;
  }
  return count;
}

console.log(countPalindrome(arr))