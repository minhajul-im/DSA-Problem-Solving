// 2733. Neither Minimum nor Maximum
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;

  nums.sort((a, b) => a - b);

  return nums.at(1);
};

let nums = [3, 2, 1, 4];

console.log(findNonMinOrMax(nums));

// another solved using bubble sort
var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;

  let temp;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        temp = nums[i];

        nums[i] = nums[j];

        nums[j] = temp;
      }
    }
  }

  return nums.at(1);
};
