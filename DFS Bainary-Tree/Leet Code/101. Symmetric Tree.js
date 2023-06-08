// 101. Symmetric Tree

var isSymmetric = function (root) {
  const symmetric = (leftRoot, rightRoot) => {
    if (!leftRoot && !rightRoot) return true;

    if (!leftRoot || !rightRoot) return false;

    if (leftRoot.val !== rightRoot.val) return false;

    return (
      symmetric(leftRoot.left, rightRoot.right) &&
      symmetric(leftRoot.right, rightRoot.left)
    );
  };

  return symmetric(root.left, root.right);
};
