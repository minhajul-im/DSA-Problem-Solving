// 167. Two Sum II - Input Array Is Sorted

var twoSum = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let sum = nums[left] + nums[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

let numbers = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(numbers));
