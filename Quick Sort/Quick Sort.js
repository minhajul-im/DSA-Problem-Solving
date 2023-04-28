/**
 * @param the pivot data is greater than the left data & the pivot data is  less than the right data.
 */

const greaterThanPivotLessThan = (arr, start = 0, end = arr.length - 1) => {
  let count = 0;

  // find data smaller than "pivot" data in the array.
  for (let i = start; i <= end; i++) {
    if (arr[start] > arr[i]) {
      count++;
    }
  }

  count += start;

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

  return count;
};

// quick sort implement
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivot = greaterThanPivotLessThan(arr, left, right);

    quickSort(arr, left, pivot - 1); // left
    quickSort(arr, pivot + 1, right); // right
  }
  return arr;
};
// let arr = [10, 20, 5, 2, 9, 19, 40, 30];
let arr = [14, 10, 30, 15, 18, 5, 25, 12, 35, 8];

console.log(quickSort(arr));
