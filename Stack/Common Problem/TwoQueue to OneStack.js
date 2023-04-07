class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class MyQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  quePush(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  quePop() {
    if (this.length === 0) return -1;

    let value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }
}

class MyStack {
  constructor() {
    this.que1 = new MyQueue();
    this.que2 = new MyQueue();
  }

  stackPush(value) {
    this.que1.quePush(value);
  }

  stackPop() {
    let q1Size = this.que1.length;

    for (let i = 1; i < q1Size; i++) {
      this.que2.quePush(this.que1.quePop());
    }

    let output = this.que1.quePop();
    this.que1.head = this.que1.tail = null;

    let q2Size = this.que2.length;

    for (let i = 1; i <= q2Size; i++) {
      this.que1.quePush(this.que2.quePop());
    }

    this.que2.head = this.que2.tail = null;

    return output;
  }
}

const stack = new MyStack();
// stack.stackPush(10)
// stack.stackPush(20)
stack.stackPush(30);
stack.stackPush(40);
stack.stackPush(50);
// console.log(stack.stackPop())
console.log(stack.stackPop());
console.log(stack.stackPop());
console.log(stack.stackPop());
console.log(stack.stackPop());
console.log(stack);
