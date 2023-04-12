const linearSearchRecursion = (arr, target, i = 0) => {
  // base case
  if (arr.length === i) return false;

  //operation
  if (arr[i] === target) {
    return { status: true, index: i };
  }

  return linearSearchRecursion(arr, target, i + 1);
};

const arr = [1, 3, 4, 5, 6, 7, 8, 9];

console.log(linearSearchRecursion(arr, 54));
