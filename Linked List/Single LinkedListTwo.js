// TODO: <------CRUD OPERATION DONE----->

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SingleLinkedList{
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  // check node empty or not empty
  isEmptyNode() {
    return this.length === 0;
  }

  //pre insert node
  preInsert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  // post insert node 
  insertNode(value) {
    let node = new Node(value);
    if (this.isEmptyNode()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }
  
  //mid insert node
  midInsetNode(position, value) {
    let node = new Node(value);
    let findPosition = this.findPositionNode(position - 1);
    node.next = findPosition.next;
    findPosition.next = node;
    this.length++;
  }

  //find position node
  findPositionNode(position) {
    let data = this.head;
    let count = 1;
    while (data) {
      if (count === position) break;
      count++;
      data = data.next;
    }
    return data;
  }

  // pre delete node
  preDeleteNode() {
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;
    }
  }

  //post delete node
  postDeleteNode() {
    let headData = this.head;
    let tailData;
    while (headData) {
      if (headData.next === this.tail) {
        tailData = headData; break;
      }
      headData = headData.next;
    }
    tailData.next = null;
    this.tail = tailData;
    this.length--;
  }

  // mid delete node
  midDeleteNode(position) {
    let find1 = this.findPositionNode(position - 1);
    let find2 = this.findPositionNode(position + 1);
    find1.next = find2;
    this.length--;
  }
  
  //update node 
  updateNode(position, value) {
    let place = this.findPositionNode(position);
    place.value = value;
  }

  // print node
  printNode() {
    let data = this.head;
    while (data) {
      console.log(data.value);
      data = data.next;
    }
  }

}

const list = new SingleLinkedList();
list.insertNode(5)
list.insertNode(10)
list.insertNode(15)
list.insertNode(20)
list.insertNode(25)
list.insertNode(30)
// list.preDeleteNode()
// list.postDeleteNode()
// list.midDeleteNode(3)
list.updateNode(6,100)
list.printNode();


console.log(list)