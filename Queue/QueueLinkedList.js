// TODO: --> FAST IN FAST OUT (FIFO)

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }
  // check is empty or not
  isEmpty() {
    return this.length === 0;
  }
  // push element on linked list
  enqueue(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  // last element delete
  dequeue() {
    if (this.length === 1) {
      let x = this.head.value;
      this.head = this.tail = null;
      this.length--;
      return x;
    }
    let y = this.head.value;
    let head = this.head.next;
    this.head = head;
    this.length--;
    return y;
  }
  // top element check just for see not remove
  peek() {
    if (this.length === 0) return null;
    else {
      let result = this.tail.value;
      console.log(result);
      return result;
    }
  }
  // check size linked list
  size() {
    let result = this.length,
      count = 0;
    let data = this.head;
    while (data) {
      count++;
      console.log(data.value);
      data = data.next;
    }
    console.log(result, count);
    return result, count;
  }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.dequeue();
queue.dequeue();
queue.dequeue();
// queue.dequeue()
queue.peek();
queue.size();
console.log(queue);
