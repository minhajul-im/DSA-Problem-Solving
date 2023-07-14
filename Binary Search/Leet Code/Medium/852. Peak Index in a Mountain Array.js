const peakIndexInMountainArray = (arr) => {
  let mid; start = 0; end = arr.length - 1;

  while (start <= end) {
    mid = Math.trunc((start + end) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    } else if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else { end = mid - 1 };
  };
};