// Reverse use Two Pointer

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const reverseWhile = (arr) => {
  let temp,
    start = 0,
    end = arr.length - 1;
  while (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

console.log(reverseWhile(arr));

const reverseFor = (arr) => {
  let temp;

  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(reverseFor(arr1));
