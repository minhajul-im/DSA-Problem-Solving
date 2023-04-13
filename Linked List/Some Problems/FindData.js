class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class FindNode {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  // check is empty or not
  isEmpty() {
    return this.length === 0;
  }

  //inset node
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

  // find node
  findData(value) {
    let data = this.head;
    while (data) {
      if (value === data.value) {
        console.log(data.value);
        return data.value;
      }
      data = data.next;
    }
    return false;
  }
}

const list = new FindNode();
list.insert(5);
list.insert(10);
list.insert(15);
list.insert(9);
list.insert(11);
list.insert(4);
list.insert(8);
console.log(list.findData(90));

console.log(list);
