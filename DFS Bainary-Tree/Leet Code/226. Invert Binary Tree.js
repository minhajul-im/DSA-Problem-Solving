var invertTree = function (root) {
  if (!root) return null;

  let itIsLeftSide = invertTree(root.left);
  let itIsRightSide = invertTree(root.right);

  root.left = itIsRightSide;
  root.right = itIsLeftSide;

  return root;
};
