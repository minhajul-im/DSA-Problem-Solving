class TowQueueOneStack {
  constructor() {
    this.arr1 = [];
    this.arr2 = [];
    this.size = 0;
  }

  enqueue(value) {
    this.arr1.push(value);
    this.size++;
  }

  dequeue() {
    for (let i = 1; i < this.size; i++) {
      this.arr2.push(this.arr1.shift());
    }

    const output = this.arr1.pop();

    for (let i = 1; i < this.size; i++) {
      this.arr1.push(this.arr2.shift());
    }

    this.size--;
    return output;
  }

  peek() {
    for (let i = 1; i < this.size; i++) {
      this.arr2.push(this.arr1.shift());
    }

    let outputPeek = this.arr1.shift();

    for (let i = 1; i < this.size; i++) {
      this.arr1.push(this.arr2.shift());
    }

    this.arr1.push(outputPeek);

    return outputPeek;
  }
}
const stack = new TowQueueOneStack();
stack.enqueue(10);
stack.enqueue(20);
stack.enqueue(30);
// console.log(stack.dequeue());
// console.log(stack.dequeue());
// console.log(stack.dequeue());
console.log(stack.peek());
console.log(stack);
