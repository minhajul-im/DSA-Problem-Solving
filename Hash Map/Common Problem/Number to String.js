/**
  => Some numbers given here, convert to the number of string.
  => like as 1=> One, 2 => Two.
 */

const numberToString = (str) => {
  let strToNum = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };

  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += strToNum[str[i]] + " ";
  }
  return result;
};

console.log(numberToString("475674"));
console.log(numberToString("08734475674"));
