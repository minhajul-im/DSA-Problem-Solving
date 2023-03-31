class Node {
  constructor(value, next = null, pre = null) {
    this.value = value;
    this.pre = pre;
    this.next = next;
  }
}

class OddAndEven {
  constructor(value) {
    let node = new Node(value);
    this.head = this.tail = node;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length = 1;
  }

  preInsertNode(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
    this.head.pre = this.tail;
    this.tail.next = this.head;
    this.length++;
  }

  postInsertNode(value) {
    let node = new Node(value);
    node.pre = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.tail.next = this.head;
    this.head.pre = this.tail;
    this.length++;
  }

  insertAnyPosition(position, value) {
    let node = new Node(value);
    if (position === 1) {
      this.preInsertNode(value);
    } else if (position === this.length + 1) {
      this.postInsertNode(value);
    } else {
      let place = this.findNodePosition(position - 1);
      let placeNext = place.next;
      place.next = node;
      node.pre = place;
      node.next = placeNext;
      placeNext.pre = node;
      this.length++;
    }
  }

  oddSummation() {
    let data = this.head;
    let length = 1, result = 0;
    while (length <= this.length) {
      if (data.value % 2 === 1) {
        result += data.value;
      }
      data = data.next;
      this.length--;
    }
    console.log(result)
    return result;
  }
  evenSummation() {
    let data = this.head;
    let length = 1, result = 0;
    while (length <= this.length) {
      if (data.value % 2 === 0) {
        result += data.value;
      }
      data = data.next;
      this.length--;
    }
    console.log(result)
    return result;
  }

}

const list = new OddAndEven(10);
list.insertAnyPosition(2,31)
list.insertAnyPosition(3,100)
list.insertAnyPosition(4,17)
list.insertAnyPosition(5,87)
list.insertAnyPosition(6,51)
list.insertAnyPosition(7,48)
// list.oddSummation()
list.evenSummation()


console.log(list);