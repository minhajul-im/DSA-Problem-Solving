// 700. Search in a Binary Search Tree

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Hello {
  constructor(value) {
    this.root = new Node(value);
  }

  // insert
  insert(value) {
    let root = this.root;
    let node = new Node(value);

    while (root) {
      if (root.value < value) {
        if (!root.right) {
          root.right = node;
          break;
        }
        root = root.right;
      } else {
        if (!root.left) {
          root.left = node;
          break;
        }
        root = root.left;
      }
    }
    return false;
  }

  /** Leet Code
   * @param {700. Search in a Binary Search Tree}
   */

  searchBinarySearchTree(root, value) {
    if (!root) return null;

    while (true) {
      if (root.value === value) {
        return root;
      } else if (root.value < value) {
        if (!root.right) return null;
        root = root.right;
      } else {
        if (!root.left) return null;
        root = root.left;
      }
    }
  }
}
const tree = new Hello(5);
tree.insert(3);
tree.insert(6);
tree.insert(2);
tree.insert(4);
tree.insert(8);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree.searchBinarySearchTree(tree.root, 7));

console.log(tree);
