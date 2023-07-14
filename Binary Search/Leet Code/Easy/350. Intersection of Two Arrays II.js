// 350. Intersection of Two Arrays II

var intersect = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return;

  let arr = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        arr.push(nums1[i]);
        nums2.splice(j, 1);
        break;
      }
    }
  }

  return arr;
};
