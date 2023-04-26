// 938. Range Sum of BST

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

  /**Depth fast search
   * @param {938. Range Sum of BST}
   */
  sumOfRangeDFS(root, low, high) {
    let sum = 0;
    function preOrder(root) {
      if (!root) return;

      if (root.value >= low && root.value <= high) {
        sum += root.value;
      }
      if (root.left) {
        preOrder(root.left);
      }
      if (root.right) {
        preOrder(root.right);
      }
    }
    preOrder(root);

    return sum;
  }

  /**Breadth fast search
   * @param {938. Range Sum of BST}
   */
  sumOfRangeBFS(root, low, high) {
    let queue = [root];
    let sum = 0;

    while (queue.length) {
      let currentNode = queue.at(0);
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      queue.shift();

      if (currentNode.value >= low && currentNode.value <= high) {
        sum += currentNode.value;
      }
    }
    return sum;
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

console.log(tree.sumOfRangeDFS(tree.root, 5, 8));
console.log(tree.sumOfRangeBFS(tree.root, 5, 8));

console.log(tree);
