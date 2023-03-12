// 1351. Count Negative Numbers in a Sorted Matrix

function isNegative(num) {
  if (Math.sign(num) == -1) {
    return true;
  }

  return false;
}
var countNegatives = function (grid) {
  let nums = grid.flat();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (isNegative(nums[i])) {
      count++;
    }
  }

  return count;
};

let grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

console.log(isNegative(grid));
