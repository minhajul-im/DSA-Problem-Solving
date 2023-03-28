class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
} 

class SingleLinkList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  // pre insert node first
  preInsert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  // insert node
  insertNode(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  // any place insert Node
  midInsert(position, value) {
    if (position === 1) {
      this.preInsert(value)
    }
    else if (position === this.length + 1) {
      this.insertNode(value)
    }
     else{
      let prePosition = this.findPosition(position - 1);
      let node = new Node(value);
      node.next = prePosition.next;
      prePosition.next = node;
      this.length++;
    }
    

  }

  // find position index
  findPosition(position) {
    let head = this.head;
    let count = 1;

    while (head) {
      if (position === count) break;
      count++; 
      head = head.next;
    }
    return head;
  }

  // Print Data
  printNode() {
    let head = this.head;
    while (head) {
      console.log(head.value);
      head = head.next;
    }
  }

  // delete last Node
  deleteLastNode() {
    let currentData = this.head;
    let tailData;
    while (currentData) {
      if (currentData.next === tailData) {
        tailData = currentData; break;
      }
      currentData = currentData.next;
    }
    this.tail = tailData;
    this.length--;
  }

  // Delete Node
  deleteNode(position) {
    let place = this.findPosition(position);
    if (position === 1) {
      let nextHead = this.head.next;
      this.head = nextHead;
      this.length--;
    }
  }

}

const list = new SingleLinkList(10);
list.insertNode(20);
list.insertNode(30);
list.insertNode(40);
list.preInsert(5)
list.midInsert(4, 25)
list.midInsert(1, 2)
list.deleteNode(1)

list.deleteLastNode();

list.printNode()


console.log(list);