// 162. Find Peak Element

var findPeakElement = function (nums) {
  let mid;
  (start = 0), (end = nums.length - 1);

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (
      (mid === 0 || nums[mid] > nums[mid - 1]) &&
      (mid === nums.length - 1 || nums[mid] >= nums[mid + 1])
    ) {
      return mid;
    } else if (nums[mid - 1] > nums[mid]) {
      end = --mid;
    } else {
      start = ++mid;
    }
  }

  return -1;
};
