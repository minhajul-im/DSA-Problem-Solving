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

//--------------- TODO: EXTRA SOLVE ------------------ -->

const merge = (arr, left, mid, right) => {
  const newArr = [];

  let i = left,
    j = mid + 1;
  let k = i;

  // twice array check
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      newArr[k] = arr[i];
      i++;
    } else {
      newArr[k] = arr[j];
      j++;
    }
    k++;
  }

  //copy temporary array
  if (i > mid) {
    while (j <= right) {
      newArr[k] = arr[j];
      k++;
      j++;
    }
  } else {
    while (i <= mid) {
      newArr[k] = arr[i];
      k++;
      i++;
    }
  }
  // set original array
  for (let x = left; x <= right; x++) {
    arr[x] = newArr[x];
  }
};

const sortArrayExtra = (arr, left = 0, right = arr.length - 1) => {
  if (arr.length === 1) return arr;

  if (left >= right) return;

  let mid = Math.trunc((left + right) / 2);

  sortArray(arr, left, mid);
  sortArray(arr, mid + 1, right);
  merge(arr, left, mid, right);

  return arr;
};
