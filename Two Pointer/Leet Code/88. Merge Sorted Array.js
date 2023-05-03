var merge = function (nums1, m, nums2, n) {
  let i = m,
    j = 0;

  while (i < m + n) {
    nums1[i] = nums2[j];
    i++;
    j++;
  }
  return nums1.sort((x, y) => (x < y ? -1 : 1));
  // return nums1.sort();
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
console.log(merge(nums1, m, nums2, n));
