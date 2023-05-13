// 145. Binary Tree Post order Traversal

var postOrderTraversal = function (root, arr = []) {
  if (!root) return arr;

  postOrderTraversal(root.left, arr);
  postOrderTraversal(root.right, arr);

  arr.push(root.val);

  return arr;
};
