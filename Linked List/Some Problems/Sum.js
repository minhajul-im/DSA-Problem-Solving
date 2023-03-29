class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Sum {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  insertNode(value) {
    let node = new Node(value)
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  sumNode() {
    let data = this.head;
    let sum = 0;
    while (data) {
      sum += data.value;
      data = data.next;
    }
    console.log(sum)
    return sum;
  }
  addSum(head) {
    let data = head;
    let result = 0;
    while (data) {
      result = result + data.value;
      data = data.next;
    }
    console.log(result)
    return result;
  }
}

const list = new Sum();
list.insertNode(5)
list.insertNode(10)
list.insertNode(15)
list.insertNode(20)
list.insertNode(25)
console.log(list.sumNode())
console.log(list.addSum(list.head))
console.log(list.head)
console.log(list)
