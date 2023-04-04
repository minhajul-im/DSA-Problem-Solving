// TODO: --> FAST IN FAST OUT (FIFO)

class Node{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }
  // check is empty or not
  isEmpty() {
    return this.length === 0;
  }
  // push element
  enqueue(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  // last element delete 
  dequeue() {
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
    let head = this.head.next;
    this.head = head;
    }
    this.length--;
  }
  // top element check just for see not remove
  peek() {
    if (this.length === 0) return null;
    else {
      let result = this.tail.value;
      console.log(result)
      return result;
    }
  }
  //size
  size() {
    let result = this.length, count = 0;
    let data = this.head;
    while (data) {
      count++;
      console.log(data.value);
      data = data.next;
    }
    console.log(result, count)
    return result, count;
  }
}
const stack = new Stack();
stack.enqueue(10)
stack.enqueue(20)
stack.enqueue(30)
stack.enqueue(40)
stack.dequeue()
stack.dequeue()
stack.dequeue()
// stack.dequeue()
stack.peek()
stack.size();
console.log(stack)