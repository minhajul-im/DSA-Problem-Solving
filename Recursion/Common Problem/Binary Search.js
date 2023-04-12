const binarySearchRecursion = (arr, target, fast, last) => {
  // base case
  if (fast > last) return false;

  const mid = Math.floor((fast + last) / 2);

  if (arr[mid] === target) {
    return { get: true, index: mid };
  } else if (arr[mid] < target) {
    return binarySearchRecursion(arr, target, mid + 1, last);
  } else {
    return binarySearchRecursion(arr, target, fast, mid - 1);
  }
};

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 9;

console.log(binarySearchRecursion(arr, target, 0, arr.length - 1));
