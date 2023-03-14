// 704. Binary Search

const search = (nums, target) => {
  let mid;
  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    mid = Math.trunc((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = ++mid;
    } else {
      end = --mid;
    }
  }

  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12],
  target = 9;

console.log(search(nums, target));
