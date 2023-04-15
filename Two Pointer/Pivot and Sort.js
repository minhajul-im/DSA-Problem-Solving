let arr = [14, 10, 30, 15, 18, 5, 25, 12, 35, 8];

/**
 * @param the pivot data is greater than the left data & the pivot data is  less than the right data.
 */
const greaterThanPivotLessThan = (arr) => {
  let start = 0,
    end = arr.length - 1,
    count = 0;

  // find data smaller than "pivot" data in the array.
  for (let i = 0; i < arr.length; i++) {
    if (arr[start] > arr[i]) {
      count++;
    }
  }

  // swapping with pivot data
  let temp = arr[start];
  arr[start] = arr[count];
  arr[count] = temp;

  // pivot data
  let pivot = arr[count];

  // two pointer algorithm
  let left = start,
    right = end;

  /* if the left index doesn't equal the count index or the right index doesn't equal the count index then the loop will continue
  otherwise, if the left index is equal to the count index or the right index is equal to the count index then the loop will close.*/
  while (left !== count || right !== count) {
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

console.log(greaterThanPivotLessThan(arr));
