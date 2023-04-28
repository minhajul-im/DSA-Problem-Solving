//TODO: Doubly link list
class Node {
  constructor(value, pre = null, next = null) {
    this.value = value;
    this.pre = pre;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.tail.pre = node;
    this.length = 1;
  }

  // pre insert node
  preInsertNode(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
    this.length++;
  }

  // post insert node
  postInsertNode(value) {
    let node = new Node(value);
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
    this.length++;
  }

  // mid insert
  midInsert(position, value) {
    let place = this.findNode(position - 1);
    // let place2 = this.findNode(position + 1);
    let node = new Node(value);
    let postPlace = place.next;
    node.next = place.next;
    postPlace.pre = node;
    place.next = node;
    node.pre = place;
    this.length++;
  }

  // find node
  findNode(position) {
    let data = this.head;
    let count = 1;

    while (data) {
      if (position === count) break;
      count++;
      data = data.next;
    }
    return data;
  }

  // delete pre node
  deletePreNode() {
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;
    }
  }

  // delete last node
  deleteLastNode() {
    let currentNode = this.head;
    let tailNode;
    while (currentNode) {
      if (currentNode.next === this.tail) {
        tailNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    this.tail = tailNode;
    this.tail.next = null;
    this.length--;
  }

  // delete mid node
  deleteMidNode(position) {
    let place1 = this.findNode(position - 1);
    let place2 = this.findNode(position + 1);
    place1.next = place2;
    place2.pre = place1;
    this.length--;
  }

  // print all node
  printNode() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }

  // update node
  updateNode(position, value) {
    let place = this.findNode(position);
    place.value = value;
  }
}

const list = new DoublyLinkedList(10);
list.preInsertNode(5);
list.postInsertNode(15);
list.midInsert(3, 12);
// list.deletePreNode()
// list.deleteLastNode();
// list.deleteMidNode(3)
list.updateNode(3, 1200);
list.printNode();

console.log(list);
