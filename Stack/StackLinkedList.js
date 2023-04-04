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
  isEmpty() {
    return this.length === 0;
  }
  push(value) {
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
  pop() {
    if (this.length === 1) {
      this.head = null; this.tail = null;
      this.length--;
    } else {
      let data = this.head;
      let tail;
      while (data) {
        if (data.next === this.tail) {
          tail = data;
        }
        data = data.next;
      }
      this.tail = tail;
      this.tail.next = null;
      this.length--;
    }
  }
}
const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
stack.pop()
stack.pop()
stack.pop()

console.log(stack)