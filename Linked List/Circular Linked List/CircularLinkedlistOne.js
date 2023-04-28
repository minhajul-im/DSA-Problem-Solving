class Node {
  constructor(value) {
    this.value = value;
    this.next;
    this.pre;
  }
}

class CircularLinkList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length = 1;
  }

  // pre insert
  preInsert(value) {
    let node = new Node(value);

    node.next = this.head;
    this.head.pre = node;
    node.pre = this.tail;
    this.head = node;
    this.tail.next = this.head;
    this.length++;
  }

  // post insert
  postInsert(value) {
    let node = new Node(value);
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length++;
  }

  // find Node
  findNode(position) {
    let head = this.head;
    let count = 1;
    while (this.head) {
      if (count === position) break;
      count++;
      head = head.next;
    }
    return head;
  }

  // insert any position
  insertMid(position, value) {
    let node = new Node(value);
    if (position === 1) {
      this.preInsert(value);
    } else if (position === this.length + 1) {
      this.postInsert(value);
    } else {
      let prePosition = this.findNode(position - 1);
      let postPosition = this.findNode(position);
      node.next = prePosition.next;
      postPosition.pre = node;
      node.pre = prePosition;
      node.next = postPosition;
      prePosition.next = node;
      this.length++;
    }
  }

  // delete Node
  deleteNode(position) {
    let prePosition = this.findNode(position - 1);
    let postPosition = this.findNode(position + 1);
    prePosition.next = postPosition;
    postPosition.pre = prePosition;
    this.length--;
  }

  //pre delete node
  preDeleteNode() {
    let head = this.head.next;
    this.head = head;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length--;
  }

  // last delete node
  lastDeleteNode() {
    let data = this.head;
    let length = 1;
    let tail;
    while (length <= this.length) {
      if (data.next === this.tail) {
        tail = data;
      }
      length++;
      data = data.next;
    }
    this.tail = tail;
    this.tail.next = this.head;
    this.head.pre = this.tail;
    this.length--;
  }

  // Either one must be selected, both cannot be printed together. Because, depending on the length it is printed.
  //ascending print
  printAscendingNode() {
    console.log(this.length);
    let head = this.head;
    let length = 1;

    while (length <= this.length) {
      console.log(head.value);
      this.length--;
      head = head.next;
    }
  }
  // descending print
  /**
  printDescendingNode() {
    let tail = this.tail;
    let length = 1;
    while (length <= this.length) {
      console.log(tail.value);
      this.length--;
      tail = tail.pre;
    }
  }
  */

  //update Node
  updateNode(position, value) {
    let head = this.head;
    let count = 1;
    while (head) {
      if (position === count) {
        head.value = value;
        break;
      }
      count++;
      head = head.next;
    }
    return head;
  }
}

const list = new CircularLinkList(10);

list.postInsert(20);
list.postInsert(40);
list.postInsert(50);
list.insertMid(3, 30);
list.preInsert(5);
// list.deleteNode(2);
// list.deleteNode(4);
// list.printAscendingNode();
// list.updateNode(1, 100);
// list.preDeleteNode();
list.lastDeleteNode();

// list.printDescendingNode();

console.log(list);
