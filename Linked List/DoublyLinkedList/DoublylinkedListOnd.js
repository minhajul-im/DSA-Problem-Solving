//TODO: Doubly link list
class Node{
  constructor(value, pre = null, next = null) {
    this.value = value;
    this.pre = pre;
    this.next = next;
  }
}


class DoublyLinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.tail.pre = node;
    this.length = 1;
  }

  // pre insert node
  preInsertNode(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
    this.length++;
  }
  
  //post insert node
  postInsertNode(value) {
    let node = new Node(value);
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
    this.length++;
  }



}

const list = new DoublyLinkedList(10);
list.preInsertNode(5)
list.postInsertNode(15)


console.log(list)