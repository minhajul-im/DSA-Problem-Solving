class TowQueueOneStack {
  constructor() {
    this.a = [];
    this.b = [];
    this.size = 0;
  }

  enqueue(value) {
    this.a.push(value);
    this.size++;
  }

  dequeue() {
    for (let i = 1; i < this.size; i++) {
      this.b.push(this.a.pop());
    }

    const output = this.a.pop();

    for (let i = 1; i < this.size; i++) {
      this.a.push(this.b.pop());
    }

    this.size--;
    return output;
  }
}
const s = new TowQueueOneStack();
s.enqueue(10);
s.enqueue(20);
s.enqueue(30);
console.log(s.dequeue());
console.log(s.dequeue());
console.log(s.dequeue());
console.log(s);
