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
