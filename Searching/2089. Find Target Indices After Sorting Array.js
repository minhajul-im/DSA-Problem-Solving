// Bubble Sort
const bubbleSortTargetIndices = (nums, target) => {
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

// Selection Sort
const selectionSortTargetIndices = (nums, target) => {
  let arr = [];
  let temp;
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
    if (nums[i] === target) {
      arr.push(i);
    }
  }
  return arr;
};
