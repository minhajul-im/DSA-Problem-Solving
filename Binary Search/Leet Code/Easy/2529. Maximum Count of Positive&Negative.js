// 2529. Maximum Count of Positive&Negative

const maximumCount = (nums) => {
  let p = 0;
  n = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      p++;
    } else if (nums[i] < 0) {
      n++;
    }
  }

  return p > n ? p : n;
};
