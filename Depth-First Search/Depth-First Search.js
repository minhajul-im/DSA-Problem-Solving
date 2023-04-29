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

  /**
   * @param {depth first search (in order, pre order, post order - traversing)}
   */

  // in order traversing
  inOrder(root, item) {
    if (root.left) {
      this.inOrder(root.left, item);
    }

    //print
    console.log(root.value);
    item.push(root.value);

    if (root.right) {
      this.inOrder(root.right, item);
    }

    console.log(item);
    return item;
  }

  // pre order traversing
  preOrder(root) {
    console.log(root.value);

    if (root.left) {
      this.preOrder(root.left);
    }

    if (root.right) {
      this.preOrder(root.right);
    }
  }

  //post order traversing
  postOrder(root) {
    if (root.left) {
      this.postOrder(root.left);
    }

    if (root.right) {
      this.postOrder(root.right);
    }

    console.log(root.value);
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

console.log(depth.inOrder(depth.root, []));
depth.preOrder(depth.root);
depth.postOrder(depth.root);

console.log(depth);
