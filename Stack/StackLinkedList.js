//TODO: --> FAST IN LAST OUT OR LAST IN FAST OUT, (LIFO)

class Node {
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

  // push element on linked list
  push(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // last element delete in linked list
  pop() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
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

  // top element check just for see not remove
  peek() {
    if (this.length === 0) return null;
    else {
      let result = this.tail.value;
      console.log(result);
      return result;
    }
  }

  // check size on linked list
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
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
stack.peek();
stack.size();
console.log(stack);
