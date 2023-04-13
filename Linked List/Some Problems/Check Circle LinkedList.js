class Node {
  constructor(value, next = null, pre = null) {
    this.value = value;
    this.pre = pre;
    this.next = next;
  }
}

class CheckCircleLinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = this.tail = node;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length = 1;
  }

  //pre insert node
  preInsertNode(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length++;
  }

  //post insert node
  postInsertNode(value) {
    let node = new Node(value);
    node.pre = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.tail.next = this.head;
    this.head.pre = this.tail;
    this.length++;
  }

  //insert any position
  insertAnyPosition(position, value) {
    let node = new Node(value);
    if (position === 1) {
      this.preInsertNode(value);
    } else if (position === this.length + 1) {
      this.postInsertNode(value);
    } else {
      let place = this.findNodePosition(position - 1);
      let placeNext = place.next;
      place.next = node;
      node.pre = place;
      node.next = placeNext;
      placeNext.pre = node;
      this.length++;
    }
  }

  // find node position
  findNodePosition(position) {
    let data = this.head;
    let count = 1;
    while (data) {
      if (count === position) break;
      count++;
      data = data.next;
    }
    return data;
  }

  //ascending nod
  ascendingNode() {
    let data = this.head;
    let length = 1,
      arr = [];
    while (length <= this.length) {
      console.log(data.value);
      arr.push(data.value);
      data = data.next;
      this.length--;
    }
    console.log(arr);
    return arr;
  }

  //is circle linked list or not circle linked list
  circleNode() {
    let x = this.head;
    let y = this.head;
    while (this.head) {
      x = x.next;
      y = y.next.next;
      if (x === y) {
        console.log(x.value, y.value);
        return true;
      }
    }
    return false;
  }
}
const list = new CheckCircleLinkedList(30);
list.preInsertNode(20);
list.preInsertNode(2);
list.postInsertNode(40);
list.insertAnyPosition(1, 10);
list.insertAnyPosition(5, 50);
list.insertAnyPosition(6, 60);
list.ascendingNode();
list.circleNode();

console.log(list);
