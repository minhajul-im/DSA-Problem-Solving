// 144. Binary Tree Preorder Traversal

var preOrderTraversal = function (root, arr = []) {
  if (!root) return arr;

  if (root) {
    arr.push(root.val);

    preOrderTraversal(root.left, arr);

    preOrderTraversal(root.right, arr);
  }

  return arr;
};
