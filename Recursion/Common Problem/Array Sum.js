let summation = 0;

const arraySummation = (arr, start = 0) => {
  //base case
  if (start === arr.length) return;

  // summation
  summation += arr[start];

  arraySummation(arr, start + 1);

  return summation;
};

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arraySummation(arr));
