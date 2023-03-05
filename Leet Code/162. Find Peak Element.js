const findPeakElement = (nums) => {
  // if (nums.length <= 1) { return 0 }

  let mid; start = 0; end = nums.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      return mid;
    } else if (nums[mid] < nums[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    };
  };
}
  
console.log(findPeakElement([1,2,3,1]))
console.log(findPeakElement([1]))
console.log(findPeakElement([2,1,1]))
