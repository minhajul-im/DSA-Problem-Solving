const arrayReverse = (arr, start, end) => {
  //base case
  if (start >= end) return;

  // swap array
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  arrayReverse(arr, start + 1, end - 1);

  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arrayReverse(arr, 0, arr.length - 1));
