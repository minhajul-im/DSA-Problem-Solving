const recursionArrayTraverse = (arr, fast) => {
  // base case
  if (fast === arr.length) return;

  console.log(arr[fast]);

  recursionArrayTraverse(arr, (fast += 1));

  return arr;
};

const arr = [1, 2, 3, 4, 5];
console.log(recursionArrayTraverse(arr, 0));
