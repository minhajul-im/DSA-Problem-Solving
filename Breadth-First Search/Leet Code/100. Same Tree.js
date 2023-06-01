// 100. Same Tree

var isSameTree = function (p, q) {
  const stack = [p, q];

  while (stack.length) {
    const fast = stack.pop(),
      last = stack.pop();

    if (!fast && !last) continue;

    if (!fast || !last || fast.val !== last.val) return false;

    stack.push(fast.left, last.left, fast.right, last.right);
  }

  return true;
};
