class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedListTraverse {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  // Never empty call recursion
  recursionTraverse(data) {
    // base case
    if (!data) return;

    console.log(data.value);

    this.recursionTraverse(data.next);
  }
}

const list = new LinkedListTraverse();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.recursionTraverse(list.head);
console.log(list);
