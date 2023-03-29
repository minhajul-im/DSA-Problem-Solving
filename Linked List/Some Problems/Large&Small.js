class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LargeAndSmall {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }

  insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  largeNode() {
    let large = 0;
    let data = this.head;
    while (data) {
      if (large < data.data) {
        large = data.data;
      }
      data = data.next;
    }
    console.log(large);
    return large;
  }

  smallNode() {
    let data = this.head;
    let small = data.data;
    while (data) {
      if (small > data.data) {
        small = data.data;
      }
      data = data.next;
    }
    console.log(small);
  }

}

const list = new LargeAndSmall();
list.insert(5)
list.insert(3)
list.insert(15)
list.insert(8)
list.insert(20)
list.insert(11)
list.largeNode()
list.smallNode()

console.log(list)