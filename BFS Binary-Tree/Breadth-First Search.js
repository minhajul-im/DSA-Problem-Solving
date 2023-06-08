// breadth fast search
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Breadth fast Search
class BreadthFastSearch {
  constructor(value) {
    this.root = new Node(value);
  }

  // inset
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

  // breadth fast search(BFS)
  BFS() {
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      console.log(queue.length);

      // current node print
      let currentNode = queue.at(0);
      console.log(currentNode.value);

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      // delete fast node delete on queue
      queue.shift();
    }
  }
}
const fast = new BreadthFastSearch(10);

fast.insert(5);
fast.insert(15);
fast.insert(13);
fast.insert(16);
fast.insert(7);
fast.insert(3);
fast.insert(20);
fast.insert(2);
fast.insert(12);
fast.insert(6);
fast.insert(9);
fast.BFS();

console.log(fast);
