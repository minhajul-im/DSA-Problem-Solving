// 938. Range Sum of BST

var rangeSumBST = function (root, low, high) {
  let sum = 0;

  function preOrder(root) {
    if (!root) return;

    if (root.val >= low && root.val <= high) {
      sum += root.val;
    }

    if (root.left) {
      preOrder(root.left);
    }

    if (root.right) {
      preOrder(root.right);
    }
  }

  preOrder(root);

  return sum;
};
