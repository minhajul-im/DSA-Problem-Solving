// Binary Tree Start
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
  }

  // insert node
  insert(value) {
    let root = this.root;

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
}
const list = new BinaryTree(10);
console.log(list);
list.insert(5);
list.insert(13);
list.insert(15);
list.insert(11);
list.insert(21);
list.insert(2);
list.insert(7);
list.insert(6);
list.insert(1);

console.log(list);
