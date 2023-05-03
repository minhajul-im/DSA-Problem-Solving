var inorderTraversal = function (root) {
  let arr = [];

  const dfs = (root, arr) => {
    if (!root) return;

    dfs(root.left, arr);

    arr.push(root.val);

    dfs(root.right, arr);
  };

  dfs(root, arr);

  return arr;
};
