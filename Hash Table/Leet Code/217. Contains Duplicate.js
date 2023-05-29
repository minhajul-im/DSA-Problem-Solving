// 217. Contains Duplicate

var containsDuplicate = function (nums) {
  let newSetSize = new Set([...nums]).size;

  return !(nums.length === newSetSize);
};

var containsDuplicate = function (nums) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i])) return true;

    numMap.set(nums[i], 1);
  }

  return false;
};
