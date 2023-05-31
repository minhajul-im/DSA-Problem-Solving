// 189. Rotate Array

var rotate = function (nums, k) {
  const reverseArr = (left, right) => {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];

      left++;
      right--;
    }
  };

  k = k % nums.length;

  reverseArr(0, nums.length - 1);

  reverseArr(0, k - 1);

  reverseArr(k, nums.length - 1);
};
