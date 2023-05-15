//

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class IsValidBinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  insetNode(root, value) {
    while (true) {
      if (root.value < value) {
        if (!root.right) {
          let node = new Node(value);
          root.right = node;
          break;
        }
        root = root.right;
      } else {
        if (!root.left) {
          let node = new Node(value);
          root.left = node;
          break;
        }
        root = root.left;
      }
    }
  }

  // isValid
  isValid(root, min = -Infinity, max = Infinity) {
    if (!root) return true;

    if (root.value < min || root.value > max) return false;

    return (
      this.isValid(root.left, min, root.value) &&
      this.isValid(root.right, root.value, max)
    );
  }
}

const tree = new IsValidBinarySearchTree(10);
tree.insetNode(tree.root, 11);
tree.insetNode(tree.root, 7);
tree.insetNode(tree.root, 8);
tree.insetNode(tree.root, 15);
tree.insetNode(tree.root, 18);
tree.insetNode(tree.root, 12);
tree.insetNode(tree.root, 3);
console.log(tree);

console.log(tree.isValid(tree.root));

tree.root.left.value = 30;

console.log(tree.isValid(tree.root));
