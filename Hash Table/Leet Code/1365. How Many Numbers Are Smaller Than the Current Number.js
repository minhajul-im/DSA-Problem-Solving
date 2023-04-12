var smallerNumbersThanCurrent = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0,
      j = 0;
    while (j < nums.length) {
      if (nums[j] < nums[i]) {
        count++;
      }
      j++;
    }
    arr.push(count);
  }

  return arr;
};
