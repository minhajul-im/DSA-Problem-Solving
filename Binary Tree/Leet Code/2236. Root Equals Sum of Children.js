// 2236. Root Equals Sum of Children
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class RootEqualSumOfChildren {
  constructor(value) {
    this.root = new Node(value);
  }

  //insert node
  insertNode(value) {
    let node = new Node(value);
    let root = this.root;
    while (true) {
      if (!root.left) {
        root.left = node;
        break;
      } else {
        if (!root.right) {
          root.right = node;
          break;
        }
      }
    }
  }

  /** Problem solved.
   * @param {2236. Root Equals Sum of Children}
   */
  checkTree(root) {
    if (root.value === root.left.value + root.right.value) return true;
    else return false;
  }
}
const tree = new RootEqualSumOfChildren(10);

tree.insertNode(4);
tree.insertNode(6);

console.log(tree.checkTree(tree.root));

console.log(tree);
