// 701. Insert into a Binary Search Tree

var insertIntoBST = function (root, val) {
  const node = new TreeNode(val);
  let newRoot = root;

  if (!root) return node;

  while (newRoot) {
    if (newRoot.val > val) {
      if (!newRoot.left) {
        newRoot.left = node;

        return root;
      }

      newRoot = newRoot.left;
    } else if (newRoot.val < val) {
      if (!newRoot.right) {
        newRoot.right = node;

        return root;
      }

      newRoot = newRoot.right;
    }
  }

  return root;
};
