const missingNumber = (nums) => {
  let sum1 = 0; 

  for (let i = 0; i <= nums.length; i++){
    sum1 = sum1 + i;
  };

  let sum2 = 0;

  for (let i = 0; i < nums.length; i++){
    sum2 = sum2 + nums[i];
  };

  return sum1 - sum2;
};
