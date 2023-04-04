// --> TODO: INSERTION & DELETION ARE BOTH POSSIBLE FROM BOTH END

class Node{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class DEQue {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }
  // check is empty or not
  isEmpty() {
    return this.length === 0;
  }
  //pre add element 
  frontInsert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  // push element in linked list
  rearInsert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    }
    else {
      console.log(this.tail.value)
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  // dequeue fast element delete
  frontDelete() {
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
    let head = this.head.next;
    this.head = head;
    }
    this.length--;
  }
  // last element delete 
  rearDelete() {
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
  // top element check just for see not remove
  peek() {
    if (this.length === 0) return null;
    else {
      let result = this.tail.value;
      console.log(result)
      return result;
    }
  }
  // check size element in linked list
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
const deQue = new DEQue();
deQue.rearInsert(10)
deQue.rearInsert(20)
deQue.rearInsert(30)
deQue.rearInsert(40)
deQue.frontInsert(5)
deQue.rearDelete()
deQue.rearDelete()
// deQue.frontDelete()
// deQue.frontDelete()
// deQue.peek()
deQue.size();
console.log(deQue)