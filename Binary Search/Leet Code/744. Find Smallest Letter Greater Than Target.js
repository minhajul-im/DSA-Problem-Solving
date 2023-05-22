// 744. Find Smallest Letter Greater Than Target

var nextGreatestLetter = function (letters, target) {
  let left = 0,
    right = letters.length - 1;

  while (left <= right) {
    const mid = Math.trunc((left + right) / 2);

    if (letters[mid] > target && letters[mid - 1] <= target) {
      return letters[mid];
    } else if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return letters[0];
};
