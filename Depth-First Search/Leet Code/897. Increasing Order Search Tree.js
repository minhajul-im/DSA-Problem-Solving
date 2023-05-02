var increasingBST = function (root) {
  let tree = new TreeNode(null);

  let node = tree;

  const inOrderSearch = (root) => {
    if (!root) return null;

    inOrderSearch(root.left);

    node.right = root;
    root.left = null;
    node = root;

    inOrderSearch(node.right);
  };

  inOrderSearch(root);

  return tree.right;
};
