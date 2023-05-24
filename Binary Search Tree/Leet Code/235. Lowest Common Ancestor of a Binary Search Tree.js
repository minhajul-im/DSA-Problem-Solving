// 235. Lowest Common Ancestor of a Binary Search Tree

var lowestCommonAncestor = function (root, p, q) {
  if (!root) return false;

  if (p.val < root.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
};
