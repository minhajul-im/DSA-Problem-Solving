// 653. Two Sum IV - Input is a BST

var findTarget = function (root, k, obj = {}) {
  if (!root) return false;

  const temp = k - root.val;

  if (obj[temp]) return true;

  obj[root.val] = true;

  return findTarget(root.left, k, obj) || findTarget(root.right, k, obj);
};
