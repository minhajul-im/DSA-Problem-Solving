// 540. Single Element in a Sorted Array

var singleNonDuplicate = function (nums) {
  let mid,
    start = 0;
  end = nums.length - 1;

  while (start < end) {
    mid = Math.floor((start + end) / 2);

    if (
      (mid % 2 === 0 && nums[mid] !== nums[mid + 1]) ||
      (mid % 2 === 1 && nums[mid] !== nums[mid - 1])
    ) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return nums[end];
};
