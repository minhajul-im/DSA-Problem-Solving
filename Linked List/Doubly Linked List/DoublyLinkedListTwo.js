class Node {
  constructor(value, pre = null, next = null) {
    this.value = value;
    this.pre = pre;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  // check node empty or not
  isEmptyNode() {
    return this.length === 0;
  }

  // post Insert Node
  insertNode(value) {
    let node = new Node(value);
    if (this.isEmptyNode()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.pre = this.tail;
    }
    this.length++;
  }

  //pre insert node
  preInsertNode(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
    this.length++;
  }

  // first node delete
  firstNodeDelete() {
    let head = this.head.next;
    this.head = head;
    this.head.pre = null;
    this.length--;
  }
}

const list = new DoublyLinkedList();
list.insertNode(5);
list.insertNode(10);
list.preInsertNode(3);
list.insertNode(15);
// list.firstNodeDelete();

console.log(list);
