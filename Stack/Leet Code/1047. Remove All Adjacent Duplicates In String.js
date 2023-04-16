var removeDuplicates = function (str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (arr.length && arr[arr.length - 1] === str[i]) {
      arr.pop();
    } else {
      arr.push(str[i]);
    }
  }

  return arr.join("");
};
console.log(removeDuplicates("abbaca"));

const removeDuplicatesStr = (str) => {
  let left = 0,
    right = str.length - 1,
    string = [];

  while (left <= right) {
    if (string.length && string[string.length - 1] === str[left]) {
      string.pop();
    } else {
      string.push(str[left]);
    }
    left++;
  }

  return string.join("");
};
console.log(removeDuplicatesStr("abbaca"));
