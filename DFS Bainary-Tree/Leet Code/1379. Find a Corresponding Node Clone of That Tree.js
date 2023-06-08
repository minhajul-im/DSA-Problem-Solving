var getTargetCopy = function (original, cloned, target) {
  if (!original || original === target) {
    return cloned;
  }

  let leftSide = getTargetCopy(original.left, cloned.left, target);
  if (leftSide) return leftSide;

  let rightSide = getTargetCopy(original.right, cloned.right, target);
  if (rightSide) return rightSide;
};
