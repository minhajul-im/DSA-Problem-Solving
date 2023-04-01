class Node {
  constructor(value, next= null){
    this.value = value;
    this.next = next;
  }
}

class HareAndTortoise{
  constructor(value) {
    let node = new Node(value);
    this.head = this.tail = node;
    this.length = 1;
  }
  preInsert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  postInsert(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.tail.next = null;
    this.length++;
  }

  insertAnyPosition(position, value) {
    if (position === 1) {
      this.preInsert(value);
    } else if (position === this.length + 1) {
      this.postInsert(value);
    } else {
      let node = new Node(value);
      let place = this.findPosition(position - 1);
      node.next = place.next;
      place.next = node;
      this.length++;
    }
  }
  findPosition(position) {
    let head = this.head;
    let count = 1;
    while (head) {
      if (position === count) break;
      count++;
      head = head.next;
    }
    return head;
  }

  printNode() {
    let head = this.head;
    while (head) {
      console.log(head.value);
      head = head.next;
    }
  }

  findMidNode() {
    let x = this.head;
    let y = this.head;
    let count = 1;
    while (y.next) {
      count++;
      x = x.next;
      y = y.next;
      if (y.next) y = y.next;
    }
    console.log(x.value, count);
    return x.value, count;
  }

}

const list = new HareAndTortoise(10);
list.preInsert(5);
list.postInsert(22);
list.insertAnyPosition(3, 20);
list.insertAnyPosition(2, 35);
list.insertAnyPosition(4, 85);
list.insertAnyPosition(1, 50);
list.findMidNode()
list.printNode()




console.log(list)
