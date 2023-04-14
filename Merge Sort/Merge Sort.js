let arr = [10, 40, 15, 20, 35, 25, 30];

const newArr = [];

const merge = (arr, left, mid, right) => {
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

// merge sort
const mergeSort = (arr, left, right) => {
  // base case
  if (left >= right) return;

  // mid index
  let mid = Math.trunc((left + right) / 2);

  // left
  mergeSort(arr, left, mid);

  // right
  mergeSort(arr, mid + 1, right);

  // merge
  merge(arr, left, mid, right);

  // return arr
  return arr;
};

console.log(mergeSort(arr, 0, arr.length - 1));
