var search = function(nums, target) {
  let mid; start= 0; end = nums.length -1;

  while (start <= end){
    mid = Math.trunc((start + end) / 2);

    if(nums[mid] === target){
      return mid;
    } else if(nums[mid] < target){
      start = ++mid;
    }else{
      end = --mid;
    }
  };
  return -1;
};
