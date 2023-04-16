/**
 * @param the pivot data is greater than the left data & the pivot data is  less than the right data.
 */
const greaterThanPivotLessThan = (arr) => {
  let start = 0,
    end = arr.length - 1,
    count = 0;

  // find data smaller than "pivot" data in the array.
  for (let i = start; i < end; i++) {
    if (arr[start] > arr[i]) {
      count++;
    }
  }

  // when you recursion use then can use the condition
  // count += start;

  // swapping with pivot data
  let temp = arr[start];
  arr[start] = arr[count];
  arr[count] = temp;

  // pivot data
  let pivot = arr[count];

  // two pointer algorithm
  let left = start,
    right = end;

  while (left < count || right > count) {
    if (arr[left] > pivot && arr[right] < pivot) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    } else if (arr[left] > pivot && arr[right] > pivot) {
      right--;
    } else {
      left++;
    }
  }

  return arr;
};

let arr = [10, 20, 5, 2, 9, 19, 40, 30];

// let arr = [16, 10, 30, 15, 18, 50, 25, 12, 35, 8];

console.log(greaterThanPivotLessThan(arr));
