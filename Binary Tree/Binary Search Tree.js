// binary search tree start

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
  }

  //insert
  insert(value) {
    let root = this.root;
    let node = new Node(value);

    while (true) {
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
  }

  // search
  search(target) {
    let root = this.root;

    while (root) {
      if (root.value === target) {
        return true;
      } else if (root.value < target) {
        if (!root.right) return false;
        root = root.right;
      } else {
        if (!root.left) return false;
        root = root.left;
      }
    }
    return false;
  }

  // predecessor
  predecessor() {
    let root = this.root.left;

    while (true) {
      if (!root.right) {
        return root.value;
      }
      root = root.right;
    }
  }

  // successor
  successor() {
    let root = this.root.right;

    while (true) {
      if (!root.left) {
        return root.value;
      }
      root = root.left;
    }
  }
}
const tree = new BinarySearchTree(10);
tree.insert(8);
tree.insert(41);
tree.insert(6);
tree.insert(1);
tree.insert(7);
tree.insert(71);
tree.insert(30);

console.log(tree.search(1));
console.log(tree.search(100));

console.log(tree.predecessor());
console.log(tree.successor());

console.log(tree);
