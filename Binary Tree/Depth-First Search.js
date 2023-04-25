// depth first search
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Depth first Search
class DepthFirstSearch {
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

  // depth first search (in order, pre order, post order - traversing);
  inOrder(root) {
    if (root.left) {
      this.inOrder(root.left);
    }

    //print
    console.log(root.value);

    if (root.right) {
      this.inOrder(root.right);
    }
  }
}
const depth = new DepthFirstSearch(10);
depth.insert(5);
depth.insert(15);
depth.insert(13);
depth.insert(16);
depth.insert(7);
depth.insert(3);
depth.insert(20);
depth.insert(2);
depth.insert(12);
depth.insert(6);
depth.insert(9);

depth.inOrder(depth.root);

console.log(depth);
