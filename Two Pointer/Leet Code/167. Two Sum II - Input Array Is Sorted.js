var twoSum = function(num, target) {
  let left = 0, right = num.length - 1;

  while (left <= right) {
    let sum = num[left] + num[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    else if (sum < target) {
      left++;
    } else {right--}
  };
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,4,11,16], 15))