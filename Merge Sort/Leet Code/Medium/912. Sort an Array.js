// 912. Sort an Array

var sortArray = function (nums) {
  const mergeSort = (arr, left, right) => {
    if (left < right) {
      // mid index
      let mid = Math.floor(left + (right - left) / 2);

      // left sub array
      mergeSort(arr, left, mid);

      // right sub array
      mergeSort(arr, mid + 1, right);

      // merge twice array
      merge(arr, left, mid, right);
    }
  };

  //temporary array
  let arr2 = [];

  const merge = (arr, left, mid, right) => {
    let i = left,
      j = mid + 1,
      k = left;

    // twice array check & set ascending order array
    while (i <= mid && j <= right) {
      if (arr[i] < arr[j]) {
        arr2[k] = arr[i++];
      } else {
        arr2[k] = arr[j++];
      }
      k++;
    }

    // the rest value of the array setting the new array
    if (i > mid) {
      while (j <= right) {
        arr2[k++] = arr[j++];
      }
    } else {
      while (i <= mid) {
        arr2[k++] = arr[i++];
      }
    }

    // the new array of the value setting the old array.
    for (let i = left; i <= right; i++) {
      arr[i] = arr2[i];
    }
  };
  mergeSort(nums, 0, nums.length - 1);

  return nums;
};

let nums = [5, 2, 3, 1];

console.log(sortArray(nums));
