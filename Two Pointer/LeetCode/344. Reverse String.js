var reverseString = function(str) {
      let s = 0, e = str.length - 1, temp;

  while (s <= e) {
    temp = str[s];
    str[s] = str[e];
    str[e] = temp;
    s++;
    e--;
  };
  return str;
};

console.log(reverseString(['a', 'b', 'c', 'd']))
