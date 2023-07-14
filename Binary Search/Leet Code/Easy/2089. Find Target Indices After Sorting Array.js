// 2089. Find Target Indices After Sorting Array

var targetIndices = function (nums, target) {
  let arr = [];
  let temp;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }

    if (nums[i] === target) {
      arr.push(i);
    }
  }

  return arr;
};
