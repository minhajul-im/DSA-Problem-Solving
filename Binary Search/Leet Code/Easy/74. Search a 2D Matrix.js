// 74. Search a 2D Matrix

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1,
    mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) return true;
    else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

var searchMatrix = function (matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) return false;

  let left = 0,
    right = matrix.length - 1,
    mid;

  while (left < right - 1) {
    mid = left + Math.floor((right - left) / 2);

    if (matrix[mid][0] === target) {
      return true;
    } else if (matrix[mid][0] < target) {
      left = mid;
    } else if (matrix[mid][0] > target) {
      right = mid - 1;
    }
  }

  return (
    binarySearch(matrix[left], target) || binarySearch(matrix[right], target)
  );
};
