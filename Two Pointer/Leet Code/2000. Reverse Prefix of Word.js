// 2000. Reverse Prefix of Word

var reversePrefix = function (word, ch) {
  let wordArr = word.split("");
  let start = 0;
  let end = word.indexOf(ch);

  while (start <= end) {
    const temp = wordArr[start];
    wordArr[start] = wordArr[end];
    wordArr[end] = temp;

    start++;
    end--;
  }

  return wordArr.join("");
};
