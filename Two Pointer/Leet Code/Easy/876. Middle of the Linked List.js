// 876. Middle of the Linked List

var twoSum = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let sum = nums[l] + nums[r];

    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
};

let ead = [1, 2, 3, 4, 5, 6];

twoSum(ead);
