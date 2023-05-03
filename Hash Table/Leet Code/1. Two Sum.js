const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
};

let nums = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(nums, target));
